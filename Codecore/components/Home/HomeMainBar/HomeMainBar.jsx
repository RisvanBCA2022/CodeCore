'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import './HomeMainBar.css'
import QuestionList from './QuestionList';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '@/redux/axios';
import { usePathname } from 'next/navigation';

const HomeMainBar = () => {
    const user=1
    const router=useRouter()
    const pathname=usePathname()
    const dispatch=useDispatch()
    const questionList=useSelector(state => state.questionslice.allQuestions)
    const status=useSelector(state=>state.questionslice.status)
    
    const checkAuth=()=>{
        if(user===null){
            alert("login or signup to ask a question")
            router.push('/login')
        }else{
            router.push('/askquestion')
        }
    }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {!questionList? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionsList={questionList} />
          </>
        )}
      </div>
    </div>
  )
        }

export default HomeMainBar