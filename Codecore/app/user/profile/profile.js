import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake,faPen } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import { fetchAllUser } from '@/redux/axios';
import Avatars from '@/components/Avatar/Avatar';
import { Avatar } from '@mui/material';



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
  return (
    <div>
    <div>
    <div className="user-details-container">
        <div className="user-details">
        {currentUser?.profilepicture?
         <><Avatar alt="Remy Sharp" src={currentUser?.profilepicture} style={{width:"125px",height:"125px"}} variant="rounded" /></>:
          <Avatars
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
            >
                {currentUser?.username?.charAt(0).toUpperCase()}
            </Avatars>
            
        }
           
            <div className="user-name">
                <h1>{currentUser?.username}</h1>
                <p>
                    <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                    {moment(currentUser?.joinedOn).fromNow()}
                </p>
            </div>

            {/* Table Status Section */}
          
            
            <button onClick={handleEditprofile}>
                <FontAwesomeIcon icon={faPen} />Edit Profile
            </button>
        </div>
        

        {/* ... existing code for Edit Profile and Profile Bio ... */}
    </div>
    <br></br>
    <div>
    <h2> Status</h2>
    <table className="simple-table">
      <thead>
        <tr>
          <td>reputation</td>
          <td>reached</td>
          <td>answers</td>
          <td>questions</td>
          
        </tr>
        <tr>
          <td>{currentUser?.reputation}</td>
          <td></td>
          <td>{currentUser?.answers.length}</td>
          <td>{currentUser?.questions.length}</td>
          
        </tr>
      </thead>
     
    </table>
    </div>
    
</div>


        </div>
  )
}

export default Profile