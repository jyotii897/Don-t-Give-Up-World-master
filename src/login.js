import React from "react";
import Button from "./button";
import './logo.css';

function Login(props) {
  return(
    <div>
      <label>Username</label>
      <input type="text"></input>
      <label>Password</label>
      <input type="text"></input>
      <Button text="Login" onClick={props.onLogin}></Button>
    </div>
  );

}
export default Login
