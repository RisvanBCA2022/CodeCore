import Avatar from '@/components/Avatar/Avatar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { fetchAllUser } from '@/redux/axios';



const Profile = () => {
    const dispatch=useDispatch()
  const [switchEdit,setSwitchEdit]=useState(false)
  const router=useRouter()


  useEffect(()=>{
    dispatch(fetchAllUser())
  },[dispatch])
  
  const userdetails=JSON.parse(localStorage.getItem('user'))
  const users=useSelector((state)=>state.userslice.usersdata)
  const currentUser=users.find((user)=>user._id===userdetails.data.ID)

  const handleEditprofile = ()=>{
    setSwitchEdit(true)
    router.push(`/user/editprofile/${currentUser._id}`)
  }

  const handleCancelEdit = () => {
    setSwitchEdit(false);
  };
  // console.log(currentUser);
  return (
    <div>
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
                {currentUser?.username?.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentUser?.username}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentUser?.joinedOn).fromNow()}
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
  )
}

export default Profile