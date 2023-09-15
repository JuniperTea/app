import React, { useState } from "react";

export default function RecommendItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [passingData, setPassingData] = useState([data]);
  let { title, description, authors, smallThumbnail } = data;

  return (
    <div>
      <span className="book-item-container">
        <img src={smallThumbnail} alt="temporary alt" />
        <span className="book-title">{title}</span>
        <span className="book-author">
          {authors.map((author, index) => (
            <span key={index}>{author},</span>
          ))}
        </span>
        <span> {description}</span>
      </span>
    </div>
  );
}
