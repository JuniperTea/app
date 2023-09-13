import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function Header() {
  const [userName, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let decoded = jwtDecode(token);
      setUsername(decoded.username);
      setAvatar(decoded.avatar);
    }
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/landing");
  }
  function gotoProfile() {
    navigate("/profile");
  }
  return (
    <div className="header-container">
      <h1 className="header-title">My Bookshelf</h1>
      {(userName !== null) & (userName !== "") ? (
        <>
          <div className="header-user-info">
            <div>
              <span>
                {avatar ? (
                  <Avatar
                    src={process.env.REACT_APP_BACKEND_URL + "/image/" + avatar}
                  />
                ) : (
                  <Avatar>{userName?.charAt(0)}</Avatar>
                )}
              </span>
              <span>Welcome,</span>
              <span onClick={gotoProfile}>{userName}</span>
            </div>
            <br />
            <span onClick={logout}>Logout</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
