import React from "react";

export default function Popup({ setIsOpen, data }) {
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
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
