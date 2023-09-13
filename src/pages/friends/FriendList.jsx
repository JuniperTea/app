import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriends, deleteFriend } from "../../data/friendSlice.js";
import {
  commonGetJson,
  commonDeleteJson,
} from "../../shared/utils/api-helper.js";
import Spinner from "../../shared/components/Spinner";
import FriendItem from "./FriendItem.jsx";
import ChooseFriendPopup from "./ChooseFriendPopup.jsx";

export default function FriendList() {
  const [friendList, setFriendList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { friends, areFriendsBeingFetched } = useSelector(
    state => state.friends
  );

  useEffect(() => {
    getFriends();
    console.log(friendList);
  }, []);

  function getFriends() {
    setLoading(true);
    commonGetJson("/friends")
      .then(x => {
        setFriendList(x.data);
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteItem(_id) {
    setLoading(true);
    commonDeleteJson("/friends/" + _id).finally(() => {
      setLoading(false);
    });
  }
  function getMoreFriends() {
    console.log("handleclick");
    setIsOpen(true);
  }

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
          <FriendItem
            key={x.id}
            username={x.username}
            _id={x._id}
            deleteFriend={deleteItem}
          />
        ))
      ) : (
        <span>You Have no Friends. Open User List to select Friends.</span>
      )}
      {isOpen && <ChooseFriendPopup setIsOpen={setIsOpen} />}
    </div>
  );
}
