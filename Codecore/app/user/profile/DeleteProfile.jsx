'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteProfile({userId}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const router=useRouter()

  const handleClose = async(type) => {
    if(type){
        const res=await axios.post(`http://127.0.0.1:4001/users/deleteuser`,{userId})
        localStorage.removeItem("user");
      deleteCookie('jwt')
      router.push('/user/login')
    }
   
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen} style={{background:'red',color:'white'}}>
        Delete Profile 
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm Delete Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete your profile? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()}>Disagree</Button>
          <Button onClick={()=>handleClose({type:"agree"})}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
