import React, {useState} from 'react';
import {Button as MuiButton, Grid, makeStyles, TextField} from '@material-ui/core';


export default function Button(props){
    const{text, size, color, variant, onClick, ...other} = props
    return(
        <MuiButton
            variant = {variant || "contained"}
            size = {size || "large"}
            color = {color || "primary"}
            onClick = {onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )

}
