'use client'
import { fetchByTag } from '@/redux/axios'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const {tag}=useParams()
    const [questionbytag,setQuestionbytag]=useState(null)
    const dispatch=useDispatch()
    const questionByTag=useSelector((state)=>state.userslice.questionByTag)
    useEffect(()=>{
        dispatch(fetchByTag(tag))
    },[tag])


  return (
    <div className='home-container-2'>
    {questionByTag.length!=0?<div style={styles.container}>
          <h2>Question List</h2>
          <ul style={styles.questionList}>
            {questionByTag.map((question) => (
              <li key={question._id} style={styles.questionItem}>
                <h3>{question.questionTitle}</h3>
                <p>{question.questionBody}</p>
              </li>
            ))}
          </ul>
        </div>:
        <div className='home-container-2'>
        <h1>No Related Questions</h1></div>}

        </div>
      );
    };
    
    const styles = {
      container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      },
      questionList: {
        listStyleType: 'none',
        padding: 0,
      },
      questionItem: {
        marginBottom: '20px',
        border: '1px solid #e5e5e5',
        padding: '20px',
      },
    };



export default page