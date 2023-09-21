import React, {useState} from 'react';
import Button from '../../sharedComponents/Button';
import {useHistory} from "react-router-dom"
const Home = () => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
        <Button label="Button A" onClick={()=> history.push('/modalA')} />
        <Button className="ml-4" background="#ff7f50" label="Button B" onClick={()=> history.push('/modalB')} />

    </div>
    );
}

export default Home;
