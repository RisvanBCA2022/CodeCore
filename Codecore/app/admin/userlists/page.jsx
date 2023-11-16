'use client'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import { blockUser, fetchAllUser, getUsersInAdmin } from '@/redux/axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './userlists.css'
import Pagination from './Pagination'
import Userscollection from './Userscollection'

const page = () => {
  const users = useSelector((state) => state.userslice.usersdata);

  // const [user,setUsers]=useState(users) 

  const [currentPage,setCurrentPage]=useState(1)
  const [userperpage]=useState(10)


    const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getUsersInAdmin())
},[])

    
    // console.log(users);

   

    const indexOfLastuser = currentPage * userperpage
    const indexOfFirstUser=indexOfLastuser - userperpage
    const currentuser = users.slice(indexOfFirstUser,indexOfLastuser)

    const paginate=pageNumber =>setCurrentPage(pageNumber)

  return (
    <div>
     <div className='home-container-1'>
    <AdminLeftbar />

    <div className="main-bar">
    <h1>All Users</h1>

      <div className="main-bar-header">
      
       <Userscollection currentuser={currentuser} />
      </div>
      <Pagination userperpage={userperpage} totalUsers={users.length} paginate={paginate} />


    </div>
 
    </div>

    
    </div>
  )
}

export default page