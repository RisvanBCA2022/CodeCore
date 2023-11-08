'use client'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import { getQuestions } from '@/redux/axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AdminQuestionList = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getQuestions())

    })
    const users = useSelector((state) => state.questionslice.allQuestions);
    console.log(users);


  return (
    <div>

     <div className='home-container-1'>
    <AdminLeftbar />
    <div className="main-bar">
      <div className="main-bar-header">
        
      </div>
      </div>
    </div>

    </div>
  )
}

export default AdminQuestionList