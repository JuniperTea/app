import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriends, deleteFriend } from "../../data/friendSlice.js";
import Spinner from "../../shared/components/Spinner";
import FriendItem from "./FriendItem.jsx";

export default function FriendList() {
  const [friendList, setFriendList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { friends, areFriendsBeingFetched } = useSelector(
    state => state.friends
  );

  useEffect(() => {
    getFriends();
  }, []);

  function getFriends() {
    dispatch(getAllFriends());
  }
  function deleteFriend(_id) {
    // if (window.confirm("Are you sure want to delete this note?")) {
    // }
    dispatch(deleteFriend(_id));
  }
  function getMoreFriends() {}

  return (
    <div>
      <h1>Friends List</h1>
      <button onClick={getFriends}>Refresh</button>
      <button onClick={getMoreFriends}>Add Friends</button>
      <hr />
      {areFriendsBeingFetched ? (
        <Spinner />
      ) : friends.length > 0 ? (
        friends.map(x => (
          <FriendItem key={x.id} data={x} deleteFriend={deleteFriend} />
        ))
      ) : (
        <span>You Have no Friends</span>
      )}
    </div>
  );
}
