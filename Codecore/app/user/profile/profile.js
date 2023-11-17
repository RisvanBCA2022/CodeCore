import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { fetchAllUser, getQuestionById } from '@/redux/axios';
import Avatars from '@/components/Avatar/Avatar';
import { Avatar } from '@mui/material';
import DeleteProfile from './DeleteProfile';



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
  const userquestions=useSelector((state)=>state.userslice.questionsByuser)
 
  // useEffect(()=>{
  //   dispatch(getQuestionById(currentUser?._id))

  // },[dispatch])

  const handleEditprofile = ()=>{
    setSwitchEdit(true)
    router.push(`/user/editprofile/${currentUser._id}`)
  }

  const handleCancelEdit = () => {
    setSwitchEdit(false);
  };
  return (
    <div>
    <div className="user-details-container">
      <div className="user-details">
        {currentUser?.profilepicture ? (
          <Avatar alt="User Avatar" src={currentUser?.profilepicture} style={{ width: "125px", height: "125px" }} variant="rounded" />
        ) : (
          <Avatars
            backgroundColor="purple"
            color="white"
            fontSize="50px"
            px="40px"
            py="30px"
          >
            {currentUser?.username?.charAt(0).toUpperCase()}
          </Avatars>
        )}

        <div className="user-name">
          <h1>{currentUser?.username}</h1>
          <p>
            <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
            {moment(currentUser?.joinedOn).fromNow()}
          </p>
        </div>

        <button onClick={handleEditprofile}>
          <FontAwesomeIcon icon={faPen} /> Edit Profile
        </button>&nbsp;&nbsp;
        {/* <button style={{ backgroundColor: 'red',gap:'10px' }}>
            Delete Profile
          </button> */}
          <DeleteProfile userId={currentUser?._id} />
      </div>
    </div>
    <br />
    <div>
      <h2>Status</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Reputation</th>
            <th>Reached</th>
            <th>Answers</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentUser?.reputation}</td>
            <td></td>
            <td>{currentUser?.answers.length}</td>
            <td>{currentUser?.questions.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Profile