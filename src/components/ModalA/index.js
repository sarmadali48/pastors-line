import React, { useState, useEffect, Fragment } from "react";
import Button from "../../sharedComponents/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesList } from "../../redux/actions/country";
import { Scrollbars } from 'react-custom-scrollbars';
import {useHistory} from "react-router-dom";
import ModalC  from '../../sharedComponents/ModalC';


const ModalA = ({showModal, handleCloseModal}) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); // Track the current page of contacts
  const [loading, setLoading] = useState(true); 
  const [contactsIds, setContactsIds] = useState([]); 
  const [selectedContent, setSelectedContent] = useState(null);
  const [isEven, setIsEven] = useState(false);

const {contacts_ids, contacts} = useSelector((state) => state.countryReducer);

useEffect(() => {
  dispatch(getCountriesList({ companyId: 171, page: 1, noGroupDuplicates: 1 }));
}, []);

useEffect(() => {

    contacts && setContactsIds(Object.keys(contacts));
  }, [contacts_ids, contacts]);

  const handleButtonClick = () => {
    history.push('/modalA')
    setPage(1);
    setLoading(true);
    dispatch(getCountriesList({ companyId: 171, page: 1, noGroupDuplicates: 1 }))
      .finally(() => setLoading(false));
  }

  const handleUSContactsClick = () => {
    history.push('/modalB')
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

  const handleEvenClicked = () => {
    setIsEven(!isEven);
    if(!isEven){
      let evenContactIds = Object.keys(contacts).filter((id) => id % 2 === 0);
      setContactsIds(evenContactIds)
    }else{
      setContactsIds(Object.keys(contacts))
    }
  }

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
    <Modal show={true}>
      <Modal.Body className="d-flex align-items-center justify-content-center vh-25 flex-column">
        {selectedContent ? 
        (<ModalC selectedContent={selectedContent} setSelectedContent= {() =>setSelectedContent(null)} />) : (
          <>
          <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            className="w-100"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: '100%', height: '300px' }}
        >
        <ul className="list-group w-100 mt-4">
          {contactsIds.length>0 && contactsIds.map((id) => (
            <li key={id} onClick={() => setSelectedContent(contacts[id])} className="list-group-item">
              <div className="d-flex justify-content-between btn">
              <span>{id}</span>
                <span>{contacts[id]?.email || 'N/A'}</span>
              </div>
            </li>
          ))}
          {/* <div onClick={()=> history.push('/modal')}>test</div> */}
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
            onClick={()=> history.push('/')}
          />
        </div>
        <div className="mr-auto">
        <Form.Check type="checkbox" onChange={handleEvenClicked} label="Only even" />
        </div>
          </>
        )
        }
      
      </Modal.Body>
    </Modal>
  );
};

export default ModalA;
