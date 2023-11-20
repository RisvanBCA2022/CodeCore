'use client'
import React, { useRef, useState } from 'react'
import Link, { usePathname, useRouter } from 'next/navigation'
import './AskQuestion.css'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { fetchUser } from '@/redux/features/question'
import { getCookie } from 'cookies-next'
import { toast } from 'react-toastify'
import axiosInstance from '@/redux/axiosInstance'



const AskQuestion = () => {

  const cookie = getCookie('jwt')
  const dispatch=useDispatch()
  const router=useRouter()

  const user=JSON.parse(localStorage.getItem('user'))
  const userposted=user.data.username
  // console.log(userposted);

const handleSubmit = async(e)=>{
  e.preventDefault()
  const questionTitle=e.target.askquestitle?.value
  const questionBody=e.target.askquesbody?.value
  const questionTags=[...e.target.askquestags?.value.split(' ')]
  
  

  await axiosInstance.post('questions/ask/',{
    questionTitle:questionTitle,
    questionBody:questionBody,
    questionTags:questionTags,
  },{
    headers:{
      Authorization:`Bearer ${cookie}`
    }
  }
  )
  router.push('/')
  toast.success('Question Added Successfully')

  setTimeout(() => {
    toast.dismiss();
  }, 2000);
}
  
  
  return (
    <div className='ask-questions'>
      <div className='ask-ques-container'>
      <h1>Ask a Public Question</h1>
      <form onSubmit={handleSubmit}>
        <div className='ask-form-container'>
        <label htmlFor="askquestitle">
          <h4>Title</h4>
          <p>Be specific and imagine you’re asking a question to another person.
</p>
<input type="text" name='questionTitle' id='askquestitle' placeholder='e.g Is there an R function for finding the index of an element in a vector' required/>
        </label>
        <label htmlFor="ask-ques-body">
          <h4>What are the details of your problem?</h4>
          <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
          <textarea name="questionTitle" id="askquesbody" cols="30" rows="10" required ></textarea>

        </label>
        <label htmlFor="ask-ques-tags">
          <h4>Tags</h4>
          <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
</p>
<input type="text" name='questionTitle' id='askquestags' />

        </label>


        </div>
        <input type="submit" value='Review your question' className='question-add-button' required />
      </form>

      </div>
    </div>


  )
}

export default AskQuestion