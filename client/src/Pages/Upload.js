import React, { useState } from 'react';
import '../Styles/App.css';
import '../Styles/Upload.css';
import Axios from 'axios';

function Upload() {

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
    }

    return (
        <div className='upload'>
            <h1>Upload</h1>
            <input
                type="file"
                name="file_upload"
                onChange={onFileChange}
                accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
            />
            <button>Upload</button>
        </div>
    );
}

export default Upload;