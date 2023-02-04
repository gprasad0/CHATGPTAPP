import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from "react";
import { useEffect, useState } from 'react';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const NotificationBar = ({open,message,handleClose,type}) =>{

  const [modal, setModal] = useState(false);
  useEffect(()=>{

  },[])

const closeModal = () =>{
    setModal(false)
    handleClose()
}

    return(
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={closeModal}
      >
        <Alert onClose={closeModal} severity={type} sx={{ width: '100%' }} >
          {message}
        </Alert>
      </Snackbar>
    )
}