import React, { useState } from 'react';
import '../Styles/App.css';
import '../Styles/Upload.css';
import Modal from '../Components/Modal'
import Axios from 'axios';

function Upload() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='upload'>
            <h1>Upload</h1>
            <button 
                className="openModalBtn"
                onClick={() => {
                    setOpenModal(true);
                }}
            >Open modal</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    );
}

export default Upload;