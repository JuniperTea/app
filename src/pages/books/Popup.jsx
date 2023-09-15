import React, { useState } from "react";
import { commonPatchJson, commonPostJson } from "../../shared/utils/api-helper";

export default function Popup({ setIsOpen, data }) {
  const [currentlyReading, setCurrentlyReading] = useState(
    data.currentlyReading
  );
  const [review, setReview] = useState("");
  const [savedReview, setSavedReview] = useState(false);
  const oldCurrentReading = data.currentlyReading;

  let {
    _id,
    title,
    description,
    authors,
    categories,
    language,
    pageCount,
    printType,
    publisher,
    publishedDate,
    maturityRating,
    smallThumbnail,
    isbn,
  } = data;

  //closes the popup, saves the currently reading value
  const closeHandler = () => {
    setIsOpen(false);
    if (currentlyReading !== oldCurrentReading) {
      let saveCR = {
        _id,
        currentlyReading,
      };
      commonPatchJson("/current/" + _id, saveCR)
        .then(console.log(currentlyReading))
        .catch(e => console.log(e));
    }
  };

  //changes state of currently reading
  function checkHandler() {
    setCurrentlyReading(!currentlyReading);
  }

  //when review is posted, this saves it to database
  function handleSubmit() {
    if (review !== null && review !== "") {
      let saveReview = {
        _id, //book id
        review,
      };
      commonPostJson("/reviews", saveReview)
        .then(response => {
          if (response.success) {
            setSavedReview(true);
            console.log("successfully saved review");
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
  return (
    <>
      <div className="popupContainer">
        <div className="popupHeader">
          <h3>{title}</h3>
        </div>
        <div className="popupBody">
          <span>
            <img src={smallThumbnail} alt="temporary alt" />
          </span>
          <div className="popup-details-container">
            <span className="popupLeftDetails">
              <h5>Tombstone</h5>
              <div>Authors: {authors}</div>
              <div>Publisher: {publisher}</div>
              <div>Publish Date: {publishedDate}</div>
              <div>Language: {language}</div>
              <div>Pages: {pageCount}</div>
              <div>Format: {printType}</div>
              <div>Maturity Rating: {maturityRating}</div>
              <div>ISBN: {isbn}</div>
              <div>Categories: {categories}</div>
            </span>
            <span className="popupRightDetails">
              <h5>Description</h5>
              {description}
            </span>
          </div>

          <input
            type="checkbox"
            name="checkbox"
            defaultChecked={currentlyReading}
            onChange={checkHandler}
          />
          <label htmlFor="checkbox">Currently Reading</label>
          <hr />
          <label htmlFor="postReview">Post a Review</label>
          <textarea
            name="postReview"
            value={review}
            onChange={e => setReview(e.target.value)}
            rows={4}
            cols={40}
          />
          <hr />
          <button type="reset">Cancel</button>
          <button type="submit" onClick={handleSubmit}>
            Save post
          </button>
          {savedReview ? <div>Review is Saved</div> : null}
          <div>
            <button onClick={closeHandler}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}
