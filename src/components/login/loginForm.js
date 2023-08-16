import React, { useState } from "react";
import { httpGetUsers } from "./loginRequest";
import "./loginForm.css";
const LogInForm = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmailValid, setUserEmailValid] = useState("");
  const [userPasswordValid, setPasswordValid] = useState("");
  const emailHandler = async (event) => {
    if (
      event.target.value.length < 10 &&
      !event.target.value.includes("@") &&
      !event.target.value.includes(".")
    ) {
      setUserEmailValid(false);
    } else {
      setUserEmailValid(true);
      setUserEmail(event.target.value);
    }
  };
  const passwordHandler = (event) => {
    if (event.target.value.length < 8 && !event.target.value.includes("#")) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
      setUserPassword(event.target.value);
    }
  };
  const userLogIn = async (event) => {
    event.preventDefault();

    if (!userPassword.includes("#")) {
      return alert("password must contains the special character ");
    }
    const data = await httpGetUsers();
    if (
      userEmailValid &&
      userPasswordValid &&
      userEmail &&
      userPassword === data.password &&
       userEmail === data.email
    ) {
      props.onClose();
      props.logInHandler();
    } else {
      return alert("user not found");
    }
  };
  return (
    <form onSubmit={userLogIn} className="form">
      <div className="form-control">
        <label htmlFor="name">E-Mail Address :</label>
        <input type="email" id="name" onChange={emailHandler} />
      </div>
      <div className="form-control">
        <label htmlFor="name">Password :</label>
        <input type="password" id="password" onChange={passwordHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default LogInForm;
