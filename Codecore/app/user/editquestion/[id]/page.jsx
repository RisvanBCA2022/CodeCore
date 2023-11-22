'use client'
import { getQuestionById } from '@/redux/axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './editQuestions.css';
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axiosInstance from '@/redux/axiosInstance';


const page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router=useRouter()

  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [id]);

  const question = useSelector((state) => state?.userslice.currentQuestion?.data);

  const [questionTitle, setQuestionTitle] = React.useState(question?.questionTitle || '');
  const [questionBody, setQuestionBody] = React.useState(question?.questionBody || '');
  const [questionTags, setQuestionTags] = React.useState(question?.questionTags || '');

  React.useEffect(() => {
    setQuestionTitle(question?.questionTitle || '');
    setQuestionBody(question?.questionBody || '');
    setQuestionTags(question?.questionTags || '');
  }, [question]);

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const questionTitle=e.target.askquestitle?.value
    const questionBody=e.target.askquesbody?.value
    const questionTags=[...e.target.askquestags?.value.split(' ')]
    
    
  
    await axiosInstance.patch(`questions/${id}/editquestion`,{
      questionTitle:questionTitle,
      questionBody:questionBody,
      questionTags:questionTags,
    }
    )
    toast.success('Successfully Edited')
    router.push('/')
     
    // const postQuestionData={questionTitle,questionBody,questionTags}
    // axios.post('localhost:4001/questions/ask')
    // console.log({questionTitle,questionBody,questionTags})
  }

  return (
    <div className="ask-questions">
      <div className="ask-ques-container">
        <h1>Ask a Public Question</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="ask-form-container">
            <label htmlFor="askquestitle">
              <h4>Title</h4>
              <p>Be specific and imagine you’re asking a question to another person.</p>
              <input
                type="text"
                name="questionTitle"
                id="askquestitle"
                placeholder="e.g Is there an R function for finding the index of an element in a vector"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                required
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>What are the details of your problem?</h4>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <textarea
                name="questionBody"
                id="askquesbody"
                cols="30"
                rows="10"
                value={questionBody}
                onChange={(e) => setQuestionBody(e.target.value)}
                required
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
              <input
                type="text"
                name="questionTags"
                id="askquestags"
                value={questionTags}
                onChange={(e) => setQuestionTags(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="Review your question" className="question-add-button" required />
        </form>
      </div>
    </div>
  );
};

export default page;
