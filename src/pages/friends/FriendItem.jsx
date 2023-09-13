import React from "react";

export default function FriendItem({ username, _id, deleteFriend }) {
  return (
    <div>
      <div>{username}</div>
      <button onClick={() => deleteFriend(_id)}>X</button>
    </div>
  );
}
