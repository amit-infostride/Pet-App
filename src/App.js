import { Fragment, useState } from "react";
import Welcome from "./pages/welcome";
import React from "react";
import Header from "./components/header";
import AppointmentForm from "./components/appointmentForm";
import LogInForm from "./components/login/loginForm";
import Modal from "./components/modal/modal";

const App = () => {
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [showForm ,setShowForm] = useState(false);
    const [loginForm ,setLoginForm] = useState(false);
const setUserLogedIn =() =>{
setUserAuthenticated(true);
} 
const setUserLogedOut =() =>{
setUserAuthenticated(false);
}
const ShowForm =() =>{
setShowForm(true);
} 
const hideForm =() =>{
setShowForm(false);
}
const showLoginForm = () => {
  setLoginForm(true);
};
const hideLoginForm = () => {
  setLoginForm(false);
};

return (
  <Fragment>
    {/* {showForm && <LogIn onClose={hideForm} logInHandler={setUserLogedIn} />} */}
    <Header
      authenticted={userAuthenticated}
      logOutHandler={setUserLogedOut}
      onShowForm={ShowForm}
    />
    <Welcome
      authenticted={userAuthenticated}
      showForm={ShowForm}
      hideForm={hideForm}
      loginForm={showLoginForm}
    />
    {showForm && <AppointmentForm hideForm={hideForm} />}
    {loginForm && (
      <Modal onClose={hideLoginForm}>
        <LogInForm
          setUserLogedIn={setUserLogedIn}
          hideLoginForm={hideLoginForm}
        />
      </Modal>
    )}
  </Fragment>
);
}
export default App;