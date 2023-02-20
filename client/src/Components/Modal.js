import React from 'react'

function Modal({ closeModal  }) {

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseButton'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Upload your work here:</h1>
                </div>
                <div className='body'>
                    <input
                        type="file"
                        name="file_upload"
                        onChange={onFileChange}
                        accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
                    />
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Upload</button> {/*upload to db*/}
                </div>
            </div>
        </div>
    )
}

export default Modal;