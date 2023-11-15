'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import './HomeMainBar.css'
import QuestionList from './QuestionList';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, getUser, getanswers } from '@/redux/axios';
import { usePathname } from 'next/navigation';
// ... other imports

const HomeMainBar = () => {
  const user=JSON.parse(localStorage.getItem('user'))
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.questionslice.allQuestions);
  const status = useSelector((state) => state.questionslice.status);

  console.log(questionList);

  const checkAuth = () => {
      if (user === null) {
          alert("login or signup to ask a question");
          router.push('/user/login');
      } else {
          router.push('/user/askquestion');
      }
  };

  useEffect(() => {
      dispatch(getQuestions());
      dispatch(getanswers());
      dispatch(getUser());
  }, [dispatch]);

  return (
      <div className="main-bar">
          <div className="main-bar-header">
              {pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
              <button onClick={checkAuth} className="ask-btn">
                  Ask Question
              </button>
          </div>
          <div>
              {questionList.message=='failure' ? (
                  <h1>Loading...</h1>
              ) :(
                  <>
                      <p>{questionList.length} questions</p>
                      <QuestionList questionsList={questionList} />
                  </>
              )
               }
          </div>
      </div>
  );
};

export default HomeMainBar;
