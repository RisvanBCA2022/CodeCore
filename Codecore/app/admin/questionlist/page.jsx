'use client'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import { getQuestions } from '@/redux/axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminQuestionlist from './AdminQuestionList'

const AdminQuestionList = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getQuestions())

    },[dispatch])
    const questionList = useSelector((state) => state.questionslice.allQuestions);
    // console.log(questionList);
    


  return (
    <div>

     <div className='home-container-1'>
    <AdminLeftbar />
    <div className="main-bar">
      <div className="main-bar-header">
      <AdminQuestionlist questionList={questionList}/>
        
      </div>
      </div>
    </div>

    </div>
  )
}

export default AdminQuestionList