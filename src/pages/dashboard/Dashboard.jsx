import React from "react";
import { useNavigate } from "react-router-dom";
import LocalBookList from "../books/LocalBookList";
import FriendList from "../friends/FriendList";

export default function Dashboard() {
  const navigate = useNavigate();
  console.log("opening dashboard");

  function lookupGoogleBooks() {
    navigate("/google-lookup");
  }

  return (
    <div>
      <div className="dashboard-container">
        <div className="currently-reading">Currently Reading</div>
        <div className="comments">Comments</div>
        <div className="friend-list">{<FriendList />}</div>
        <div className="friend-recommendations">Recommended by Friends</div>
        <div className="library">
          <div className="library-title">
            My Library
            <br />
            <p>Grab a Google Book</p>
          </div>
          <button onClick={lookupGoogleBooks}>Google</button>
          <LocalBookList />
        </div>
      </div>
    </div>
  );
}
