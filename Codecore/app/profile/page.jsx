'use client'
import React, { useState } from "react";
import moment from "moment";


import LeftSidebar from '../../components/Home/LeftsideBar/LeftSideBar'
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./userprofile.css";
import { useSelector } from "react-redux";
import RightSideBar from "@/components/Home/RightSideBar/RightSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  
  const userdetails=useSelector(state => state.questionslice.userdetails)


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
                {userdetails?.data?.username.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{userdetails?.data?.username}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(userdetails.data?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            
          </div>
          <>
           
          </>
        </div>
      </div>
      {/* <RightSideBar /> */}
    </div>
  );
};

export default page;