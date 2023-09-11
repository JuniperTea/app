import React from "react";
import Spinner from "../../shared/components/Spinner";
import { useSelector } from "react-redux";

export default function FriendItem({ data, _id, deleteFriend }) {
  const { friendsBeingDeleted } = useSelector(state => state.friends);
  return (
    <div>
      <div>{data}</div>
      {friendsBeingDeleted.includes(_id) ? (
        <Spinner />
      ) : (
        <button onClick={() => deleteFriend(_id)}>X</button>
      )}
    </div>
  );
}
