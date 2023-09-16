import React, { useState, useEffect } from "react";
import { commonGetJson } from "../../shared/utils/api-helper";
import ReviewItem from "./Reviews";
import Spinner from "../../shared/components/Spinner";

//gets the reviews for all the current books in the library
export default function Reviews() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  function getReviews() {
    setLoading(true);
    commonGetJson("/reviews")
      .then(x => {
        console.log(x);
        setReviewList(x);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <h4>Reviews of Books on MyBookshelf</h4>
      <button onClick={getReviews}>Refresh</button>
      {loading ? (
        <>
          <Spinner />
          <div>Standby while processing...</div>
        </>
      ) : reviewList.length > 0 ? (
        reviewList.map(x => (
          <div key={x._id}>
            {x.revs.length > 0 ? (
              <div>
                {x.revs.map(y => (
                  <div key={y._id}>
                    <div className="reading-item-line">
                      <ReviewItem key={y._id} data={y} />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <span>None of your friends read.</span>
      )}
    </div>
  );
}
