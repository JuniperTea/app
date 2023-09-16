import React from "react";

//this displays 1 review item.
export default function ReviewItem({ data }) {
  let { smallThumbnail, title, revs } = data;
  return (
    <div>
      <div className="book-item-container">
        <img src={smallThumbnail} alt="temporary alt" />
        <span>{title}</span>
        <span className="book-description-general "> {revs}</span>
      </div>
    </div>
  );
}
