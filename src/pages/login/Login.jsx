import React, { useState, useEffect } from "react";
import { commonGetJson } from "../../shared/utils/api-helper";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/components/Loading";
import { Button, TextField } from "@mui/material";
import jwtDecode from "jwt-decode";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isRememberMe") === "true") {
      let token = localStorage.getItem("token");
      if (token) {
        let decoded = jwtDecode(token);
        let expire = decoded.exp * 1000;
        if (new Date().getTime() < expire) {
          navigate("/dashboard");
        } else {
          localStorage.clear();
        }
      } else {
        localStorage.clear();
      }
    }
  }, []);

  function login() {
    setIsLoggingIn(true);
    console.log("in login function");
    commonGetJson("/landing/", { username: username, password: password }).then(
      x => {
        setIsLoggingIn(false);
        console.log("in login function2");
        console.log({
          Response: x,
        });
        if (x.status === true) {
          // navigate user to dashboard page
          // store token in local storage
          console.log("in login function3");
          localStorage.setItem("token", x.token);
          localStorage.setItem("isRememberMe", isRememberMe);
          navigate("/dashboard");
        } else {
          // clear all controls
          console.log("in login function4");
          localStorage.clear();
          alert("Login failed!");
        }
      }
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <TextField
        value={username}
        onChange={e => setUsername(e.target.value)}
        label="Username"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
        variant="outlined"
      />
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isRememberMe}
          onChange={e => setIsRememberMe(e.target.checked)}
        ></input>
        Remember Me
      </label>
      <br />
      {isLoggingIn ? (
        <Loading />
      ) : (
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      )}
    </div>
  );
}
