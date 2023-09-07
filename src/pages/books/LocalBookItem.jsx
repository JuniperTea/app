import React, { useState } from "react";
import { commonDeleteJson } from "../../shared/utils/api-helper";
import RecommendSharpIcon from "@mui/icons-material/RecommendSharp";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Tooltip } from "@mui/material";
import Popup from "./Popup";

export default function LocalBookItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);

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
    id,
    isbn,
  } = data;

  function handleClick() {
    console.log("handleclick");
    setIsOpen(true);
  }

  //Delete Book
  function deleteBook() {
    if (window.confirm("you sure?")) {
      commonDeleteJson("/books/" + _id).catch(e => console.log(e));
    }
  }

  return (
    <div>
      <span className="book-item-container">
        <img src={smallThumbnail} alt="temporary alt" />
        <span className="book-title">{title}</span>
        <span className="book-author">
          {authors.map((author, index) => (
            <div key={index}>{author}</div>
          ))}
        </span>
        <Tooltip title="Click for full information">
          <span className="book-description-list" onClick={handleClick}>
            {description}
          </span>
        </Tooltip>
        <span>
          Options
          <div>
            <Tooltip title="Currently Reading">
              <AutoStoriesSharpIcon fontSize="small" />
            </Tooltip>
            <Tooltip title="Recommend">
              <RecommendSharpIcon fontSize="small" />
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteForeverSharpIcon fontSize="small" onClick={deleteBook} />
            </Tooltip>
          </div>
        </span>
        {isOpen && <Popup setIsOpen={setIsOpen} data={data} />}
      </span>
    </div>
  );
}
