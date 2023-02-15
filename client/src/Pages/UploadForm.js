import { Grid, makeStyles, TextField} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {useForm, Form} from '../Components/useForm';
import Controls from '../Components/Controls';



const initialFValues = {
    name: '',
    description: '',
    authors: ''
}
export default function UploadForm(){

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
    }
    const{
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);



    return(
            <Form>
            <Grid container>
                <Grid item xs = {6}>
                    <Controls.Input 
                        name = "name"
                        label = "Name"
                        value = {values.name}
                        onChange = {handleInputChange}
                        />
                    <Controls.Input 
                        label = "Description"
                        name = "description"
                        value = {values.description}
                        onChange = {handleInputChange}
                    />
                    <Controls.Input
                        label = "Authors"
                        name = "authors"
                        value = {values.authors}
                        onChange = {handleInputChange}
                    />
                </Grid>

                <Grid item xs = {3}></Grid>
            </Grid>

            {/* <div>
                <Controls.Button 
                    type= "upload"
                    text="Upload"
                />
            </div> */}
            <input
                        className='input'
                        // style=""
                        type="file"
                        name="file_upload"
                        onChange={onFileChange}
                        accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
                    />
                    <button class="buttonUpload">Upload</button>
            </Form>
    )
    
}
