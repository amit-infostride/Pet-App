import './appointMent.css';
import React from "react";
import Modal from './modal/modal';

const AppointmentForm = (props) => {
 const hideForm = () => {
    props.hideForm();
 }

  return (
    <Modal onClose={hideForm}>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Book an Appointment</h2>
          <form>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name:</label>
              <input type="text" id="customerName" />
            </div>

            <div className="form-group">
              <label htmlFor="customerPet">Customer Pet:</label>
              <input type="text" id="customerPet" />
            </div>

            <div className="form-group">
              <label htmlFor="customerEmail">Customer Email:</label>
              <input type="email" id="customerEmail" />
            </div>

            <div className="form-group">
              <label htmlFor="servicesNeeded">Services Needed:</label>
              <select id="servicesNeeded">
                <option value="">Select a service</option>
                <option value="petShower">Pet Shower</option>
                <option value="nailCutting">Nail Cutting</option>
                <option value="surgery">Surgery</option>
                <option value="others">Others</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
          <button className="close-button" onClick={hideForm}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AppointmentForm;