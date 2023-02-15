import React from 'react';
import {Dialog, DialogTitle, DialogContent, makeStyles} from '@material-ui/core'
import '../Styles/Popup.css';

// const useStyles = makeStyles(theme =>({
//     root:{
//         '& .MultiFormControl-root':{
//             // width: '100%',
//             height: '80%',
//             color: 'pink',
//             margin:theme.spacing(5)
//         }   
//     }
// }))

const useStyles = makeStyles((theme) => ({
    paper: { minWidth: "500px",
             height:"400px",
             margin:theme.spacing(100)},
  }));

export default function Popup(props){
    const{title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return(

        
        <Dialog open = {openPopup}  classes={{ paper: classes.paper}} >
            <DialogTitle>
                <div>Upload your paper here:</div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
