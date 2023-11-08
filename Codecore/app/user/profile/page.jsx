'use client'
import React, { useEffect, useState } from "react";
import moment from "moment";


import LeftSidebar from '../../../components/Home/LeftsideBar/LeftSideBar'
import Avatar from "../../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./userprofile.css";
import { useDispatch, useSelector } from "react-redux";
import RightSideBar from "@/components/Home/RightSideBar/RightSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
import { fetchAllUser, getUser } from "@/redux/axios";
import { useRouter } from "next/navigation";
const page = () => {
  const dispatch=useDispatch()
  const [switchEdit,setSwitchEdit]=useState(false)
  const router=useRouter()


  useEffect(()=>{
    dispatch(fetchAllUser())
  },[])
  
  const userdetails=JSON.parse(localStorage.getItem('user'))
  const users=useSelector((state)=>state.userslice.usersdata)
  const currentUser=users.find((user)=>user._id===userdetails.data.ID)

  const handleEditprofile = ()=>{
    setSwitchEdit(true)
    router.push('/user/profile/editprofile')
  }

  const handleCancelEdit = () => {
    setSwitchEdit(false);
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <div>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {userdetails?.data.username?.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{userdetails?.data.username}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(userdetails.data?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            
          </div>
          
          <button onClick={handleEditprofile}>
            <FontAwesomeIcon icon={faPen} />Edit Profile
          </button>
          {/* <>
           {switchEdit ? (
              <EditProfileForm
                userdetails={userdetails}
                onCancel={handleCancelEdit}
              />
             ) : (
              <ProfileBio currentUser={currentUser} />
            )} 

           
          </> */}
        </div>
      </div>
      {/* <RightSideBar /> */}
    </div>
  );
};

export default page;