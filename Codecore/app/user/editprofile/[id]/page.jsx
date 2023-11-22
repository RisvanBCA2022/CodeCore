'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookies } from 'cookies-next';
const cookie = getCookies('token')
import { EditRounded as EditIcon } from "@mui/icons-material";
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { useParams, useRouter } from 'next/navigation'
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar';
import { toast } from "react-toastify";
import upload from "@/components/upload_profile";
import { fetchAllUser } from "@/redux/axios";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/redux/axiosInstance";
// import './editprofile.css';

const page = () => {
  const router = useRouter();
  const dispatch=useDispatch()
  const {id}=useParams()
  const navigateToProfile = () => {
    router.push('/user/profile');
  }
  const [data,setData]=useState()
  useEffect(()=>{
    dispatch(fetchAllUser())
  },[])

  const cookie=getCookies('jwt')
  console.log(cookie);
  const userdetails=JSON.parse(localStorage.getItem('user'))
  const users=useSelector((state)=>state.userslice.usersdata)
  const currentUser=users.find((user)=>user._id===userdetails.data.ID)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const profilepicture= await upload(data)
    const bio=e.target.bio.value
    const username=e.target.username.value
    const res=await axiosInstance.post(`users/updateprofile/${id}`,{
      bio,
      username,
      profilepicture
  },{
    headers:{
      Authorization:`Bearer ${cookie.jwt}`
    }
  }
  )
  toast.success('Profile Edited successfully')

  router.push('/user/profile')
  };

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div>

      
      <Container component="main" style={{marginTop:"64px"}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={5} sx={{ borderRadius: "9px" }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "3vh",
            }}
          >
            <Typography component="h1" variant="h5">
              Update Profile
            </Typography>
            {/* {profile?.map((data) => ( */}
              <form onSubmit={handleSubmit}>
                <Avatar
                  src={currentUser?.profilepicture} // Display user's avatar
                  alt="Profile Picture"
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto 1rem",
                  }}
                />
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  id='bio'
                  // defaultValue={data.bio}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  id="username"
                  // defaultValue={data.username}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  // defaultValue={data.website}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Contact"
                  name="contact"
                  // defaultValue={data.contact}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  type="file"
                  
                  // defaultValue={data.contact}
                  variant="outlined"
                  onChange={(e)=>setData(e.target.files[0])}
                  sx={{ mb: 2 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "9px",
                  }}

                  sx={{ mt: 3, mb: 2 }}
                >
                  Save
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    background: "red",
                    color: "white",
                    borderRadius: "9px",
                  }}
                  sx={{ mt: 3, mb: 2 }}
                  onClick={navigateToProfile}
                >
                  Cancel
                </Button>


                {/* Example of an edit icon */}
                {/* <IconButton color="primary" >
                  <EditIcon />
                </IconButton> */}
              </form>
            {/* ))} */}
          </Box>
        </Grid>
      </Grid>
    </Container>
    </div>
    </div>
  );
};


export default page;
