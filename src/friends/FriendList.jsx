import React, { useEffect, useState } from "react";
import { commonGetJson } from "../../shared/utils/api-helper.js";
import Spinner from "../../shared/components/Spinner";
import FriendItem from "./FriendItem.jsx";

export default function FriendList() {
  const [friendList, setFriendList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    console.log(friendList);
  }, []);

  function getData() {
    setLoading(true);
    console.log("getting book data");
    commonGetJson("/friends")
      .then(x => {
        setFriendList(x);
        console.log("inside friendList");
        console.log(x);
        //setTotalPages(x.totalPages);
      })
      .finally(() => {
        console.log(friendList);
        setLoading(false);
      });
  }
  return (
    <div>
      {friendList.length > 0 ? (
        friendList.map(x => (
          <div>
            <FriendItem data={x} />
          </div>
        ))
      ) : (
        <span>Add a book already!</span>
      )}
    </div>
  );
}
