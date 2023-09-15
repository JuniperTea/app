import React, { useState, useEffect } from "react";
import { commonGetJson, commonPatchJson } from "../../shared/utils/api-helper";
import ReadingItem from "./ReadingItem";
import Spinner from "../../shared/components/Spinner";

export default function CurrentlyReading() {
  const [readingList, setReadingList] = useState([]);
  const [loading, setLoading] = useState(false);

  //runs upon first enter and when the friendList changes after deletion
  useEffect(() => {
    getReading();
  }, []);

  function getReading() {
    setLoading(true);
    commonGetJson("/current")
      .then(x => {
        setReadingList(x);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
    setLoading(false);
  }

  function deleteItem(_id) {
    let currentlyReading = false;
    let saveCR = {
      _id,
      currentlyReading,
    };
    commonPatchJson("/current/" + _id, saveCR).catch(e => console.log(e));
  }
  return (
    <div>
      <h4>Currently Reading</h4>
      <button onClick={getReading}>Refresh</button>
      {loading ? (
        <>
          <Spinner />
          <div>Standby while processing...</div>
        </>
      ) : readingList.length > 0 ? (
        readingList.map(x => (
          <div className="reading-item-line" key={x._id}>
            <ReadingItem key={x._id} data={x} />
            <span>
              <button onClick={deleteItem(x._id)}>X</button>
            </span>
          </div>
        ))
      ) : (
        <span>
          You need to read more books. Choose a book from your library to read.
        </span>
      )}
    </div>
  );
}
