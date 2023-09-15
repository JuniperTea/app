import React from "react";

export default function ReadingPopup({ setIsOpen, data }) {
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
  } = data[0];

  function closeHandler() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="popupContainer">
        <div className="popupBody">
          <div className="popupHeader">
            <h5>Tombstone</h5>
          </div>
          <div className="reading-item">
            <span>
              <img src={smallThumbnail} alt="temporary alt" />
            </span>
            <div>Authors: {authors}</div>
            <div>Publisher: {publisher}</div>
            <div>Publish Date: {publishedDate}</div>
            <div>Language: {language}</div>
            <div>Pages: {pageCount}</div>
            <div>Format: {printType}</div>
            <div>Maturity Rating: {maturityRating}</div>
            <div>ISBN: {isbn}</div>
            <div>Categories: {categories}</div>
          </div>
          <div>
            <button onClick={closeHandler}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}
