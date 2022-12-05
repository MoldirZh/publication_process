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
            <div className='uploadleft'>
            {/* Works */}
            <table id="uploadTable">
                <tr>
                    <td>Works</td>
                    <td>Progress</td>
                </tr>
                <tr>
                    <td>Work # <br/>Name:</td>
                    <td>In progress</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                <td>...</td>
                <td>...</td>
                </tr>
                <tr>
                <td>...</td>
                <td>...</td>
                </tr>
                <tr>
                <td>...</td>
                <td>...</td>
                </tr>
                <tr>
                <td>...</td>
                <td>...</td>
                </tr>
                <tr>
                <td>...</td>
                <td>...</td>
                </tr>
            </table>
            </div>
            <div className='uploadright'>
                <div>
                    <button class="buttonNewInvitations">New Invitations</button>
                </div>
                <div className="uploadNews">
                <ul>
                    <li>Editor XXX has sent you a project for consideration</li>
                    <li>Editor YYY approved your work for the Project Y</li>
                    <li>Editor ZZZ left a comment on your work for the Project Z</li>
                </ul>
                </div>

                <div className='uploadForm'>
                    <h1>Upload New Work</h1>
                    <h2> Works can be uploaded in different formats, including PDF, Word, LaTeX</h2>
                    <input
                        className='input'
                        // style=""
                        type="file"
                        name="file_upload"
                        onChange={onFileChange}
                        accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
                    />
                    <button class="buttonUpload">Upload</button>
                </div>
            <div className='submitForm'>
            <h1>Submit Copyright form</h1>
            <input
                type="file"
                name="file_upload"
                onChange={onFileChange}
                accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
            />
            <button class="buttonSubmit">Submit Copyright form</button>
            </div>
            </div>
            </div>
        
    );
}

export default Upload;
