import React from 'react';
import Button from './Button';

const ModalC = ({selectedContent, setSelectedContent}) => {
  return (
    <div>
        <h2>Details</h2>
        <div className='mt-2'>
        <span>id: {selectedContent?.id}</span>
        </div>
        <div className='mt-2'>
        <span>First name: {selectedContent?.first_name || 'N/A'}</span>
        </div>
        <div className='mt-2'>
        <span>Last name: {selectedContent?.last_name || 'N/A'}</span>
        </div>
        <div className='mt-2'>
            <span>Email: {selectedContent?.email || 'N/A'}</span>
        </div>
        <div className='mt-2 mb-3'>
        <span>Phone #: {selectedContent?.phone_number || 'N/A'}</span>
        </div>
        <Button
            className="ml-2"
            color="#46139f"
            background="#fff"
            label="Back"
            style={{ border: "1px solid #46139f", padding: "8px 20px"}}
            onClick={setSelectedContent}
          />
    </div>
    
  )
}

export default ModalC;