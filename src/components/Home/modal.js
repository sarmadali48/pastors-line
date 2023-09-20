import React, { useState } from "react";
import Button from "../../sharedComponents/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CountryModal = ({showModal, handleCloseModal}) => {
  return (
    <Modal show={showModal}>
      <Modal.Body className="d-flex align-items-center justify-content-center vh-25 flex-column">
        <div className="p-4">
          <Button label="All Contacts" />
          <Button className="ml-2" background="#ff7f50" label="US Contacts" />
          <Button
            className="ml-2"
            color="#46139f"
            background="#fff"
            label="Close"
            style={{ border: "1px solid #46139f" }}
            onClick={handleCloseModal}
          />
        </div>
        <div className="mr-auto">
        <Form.Check type="checkbox" label="Only even" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CountryModal;
