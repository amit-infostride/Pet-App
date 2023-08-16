import React, { Fragment } from "react";
import "./welcome.css";
import Footer from "./footer";
import AvailableServices from "./welcome/services";
const Welcome = (props) => {
function showForm(){
  props.showForm();
}
  return (
    <Fragment>
      <div className="userNotAuthenticated">
        <h2>Welcome to our pet veterinary</h2>
       <p>
          At Pet Veterinary, we are passionate about the well-being of your
          furry companions. With a team of dedicated veterinarians and skilled
          staff, we provide top-notch medical care and personalized attention.
          <p>
            Our mission is to ensure the optimal health of pets through
            comprehensive services, from preventive care to advanced treatments.
          </p>
        </p>
        <button className="appointmentButton" onClick={showForm}>
          Book a Appointment
        </button>
      </div>
      <AvailableServices />
      <Footer loginForm={props.loginForm} />
    </Fragment>
  );
};
export default Welcome;
