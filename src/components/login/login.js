import React from "react";
import Modal from "../modal/modal";
import LogInForm from "./loginForm";
import './login.css';
const LogIn = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <h4 className="h4">LogIn</h4>
      <LogInForm onClose={props.onClose} logInHandler={props.logInHandler} />
    </Modal>
  );
};
export default LogIn;
