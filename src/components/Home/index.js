import React, {useState} from 'react';
import Button from '../../sharedComponents/Button';
import CountryModal from "./modal";
const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
        <Button label="Button A" onClick={handleOpenModal} />
        <Button className="ml-4" background="#ff7f50" label="Button B" onClick={handleOpenModal} />
        <CountryModal showModal={showModal} handleCloseModal={handleCloseModal} />

    </div>
    );
}

export default Home;
