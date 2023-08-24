import React from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../bookshelf/BookList";

export default function Dashboard() {
  const navigate = useNavigate();
  console.log("opening dashboard");
  function addBook() {
    console.log("yes I clicked the button");
    navigate("/add-books");
  }

  return (
    <div>
      <div className="dashboard-container">
        <div className="currently-reading">Currently Reading</div>
        <div className="comments">Comments</div>
        <div className="friend-list">Friends List</div>
        <div className="friend-recommendations">Recommended by Friends</div>
        <div className="library">
          <div className="library-title">
            My Library
            <button className="add-book-btn" onClick={addBook}>
              +
            </button>
          </div>
          <BookList />
        </div>
      </div>
    </div>
  );
}
