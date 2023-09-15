import React, { useState, useEffect } from "react";
import { commonGetJson } from "../../shared/utils/api-helper";
import RecommendItem from "./RecommendItem";
import Spinner from "../../shared/components/Spinner";

export default function RecommendList() {
  const [recList, setRecList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecommendation();
  }, []);

  function getRecommendation() {
    setLoading(true);
    commonGetJson("/recommendations")
      .then(x => {
        setRecList(x);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
    setLoading(false);
  }

  return (
    <div>
      <h4>Recommendations</h4>
      <button onClick={getRecommendation}>Refresh</button>
      {loading ? (
        <>
          <Spinner />
          <div>Standby while processing...</div>
        </>
      ) : recList.length > 0 ? (
        recList.map(x => (
          <div className="reading-item-line" key={x._id}>
            <RecommendItem key={x._id} data={x} />
          </div>
        ))
      ) : (
        <span>None of your friends read.</span>
      )}
    </div>
  );
}
