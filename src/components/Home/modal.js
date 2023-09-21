import React, { useState, useEffect } from "react";
import Button from "../../sharedComponents/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesList } from "../../redux/actions/country";
import { Scrollbars } from 'react-custom-scrollbars';
import {useHistory} from "react-router-dom"



const CountryModal = ({showModal, handleCloseModal}) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); // Track the current page of contacts
  const [loading, setLoading] = useState(false); 
  const [contactsIds, setContactsIds] = useState([]); 

  const contacts1 = [
    1278873,
    1311497,
    1130071,
    1048835,
    916488,
    814850,
    814849,
    249345,
    248983,
    248578,
    248322,
    248066,
    247810,
    247297,
    246786,
    244992,
    1740809,
    1817476,
    1817474,
    1764889
];

const {contacts_ids, contacts} = useSelector((state) => state.countryReducer);

useEffect(() => {
  dispatch(getCountriesList({ companyId: 171, page: 1, noGroupDuplicates: 1 }));
}, []);

useEffect(() => {
    setContactsIds(contacts_ids);
  }, [contacts_ids]);

  const handleButtonClick = () => {
    setPage(1);
    setLoading(true);
    dispatch(getCountriesList({ companyId: 171, page: 1, noGroupDuplicates: 1 }))
      .finally(() => setLoading(false));
  }

  const handleUSContactsClick = () => {
    setPage(1);
    setLoading(true);
    dispatch(getCountriesList({ companyId: 171, page: 1, noGroupDuplicates: 1, countryId: 226 }))
      .finally(() => setLoading(false));
  }

  const handleScroll = () => {
    const list = document.querySelector('.list-group');
    if (list) {
      const isAtBottom = list.scrollTop + list.clientHeight === list.scrollHeight;
      if (isAtBottom && !loading) {
        // If at the bottom and not currently loading, load the next page of contacts
        setPage(page + 1);
        setLoading(true);
        dispatch(getCountriesList({ companyId: 171, page: page + 1, noGroupDuplicates: 1 }))
          .finally(() => setLoading(false));
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    const list = document.querySelector('.list-group');
    if (list) {
      list.addEventListener('scroll', handleScroll);
    }

    // Detach the scroll event listener when the component unmounts
    return () => {
      if (list) {
        list.removeEventListener('scroll', handleScroll);
      }
    };
  }, [page, loading]);

  return (
    <Modal show={showModal}>
      <Modal.Body className="d-flex align-items-center justify-content-center vh-25 flex-column">
      <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: '100%', height: '300px' }}
        >
        <ul className="list-group w-100">
          {contactsIds.length>0 && contactsIds.map((contact) => (
            <li key={contact} className="list-group-item">
              <div className="d-flex justify-content-between">
                <span>{contact}</span>
              </div>
              {/* <div className="d-flex justify-content-between">
                <span>{countriesList?.contacts[contact]?.email}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>{countriesList?.contacts[contact]?.phone_number}</span>
              </div> */}
            </li>
          ))}
          <div onClick={()=> history.push('/modal')}>test</div>
        </ul>
        </Scrollbars>
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
