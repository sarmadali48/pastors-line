import React, { useState } from "react";
import Button from "../../sharedComponents/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { getCountriesList } from "../../redux/actions/country";


const CountryModal = ({showModal, handleCloseModal}) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const data = {
      companyId: 171,
      page: 1,
      noGroupDuplicates: 1,
    }
    dispatch(getCountriesList(data));
  }

  const handleUSContactsClick = () => {
    const data = {
      companyId: 171,
      page: 1,
      noGroupDuplicates: 1,
      countryId: 226,
    }
    dispatch(getCountriesList(data));
  }

  return (
    <Modal show={showModal}>
      <Modal.Body className="d-flex align-items-center justify-content-center vh-25 flex-column">
        <div className="p-4">
          <Button onClick={handleButtonClick} label="All Contacts" />
          <Button className="ml-2" background="#ff7f50" onClick={handleUSContactsClick} label="US Contacts" />
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
