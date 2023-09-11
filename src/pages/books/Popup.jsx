import React, { useState } from "react";

export default function Popup({ setIsOpen, data }) {
  const [currentlyReading, setCurrentlyReading] = useState(
    data.currentlyReading
  );
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

  const closeHandler = () => {
    setIsOpen(false);
    if (currentlyReading !== oldCurrentReading) {
      <div>insert save here </div>;
    }
  };
  const checkHandler = () => {
    setCurrentlyReading(!currentlyReading);
  };
  return (
    <>
      <div className="popupContainer">
        <div className="popupBody">
          <div>
            <span>
              <img src={smallThumbnail} alt="temporary alt" />
            </span>
            <span>
              <h3>{title}</h3>
            </span>
          </div>
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
          <button onClick={closeHandler}>Close</button>

          <input
            type="checkbox"
            id="checkbox"
            checked={currentlyReading}
            onChange={checkHandler}
          />
          <label htmlFor="checkbox">Currently Reading</label>
          {/* <button onClick={() => setCurrentlyReading(!currentlyReading)}>
            {currentlyReading ? (
              <div>Currently Reading</div>
            ) : (
              <div>Not Currently Reading</div>
            )}
          </button> */}
        </div>
      </div>
    </>
  );
}
