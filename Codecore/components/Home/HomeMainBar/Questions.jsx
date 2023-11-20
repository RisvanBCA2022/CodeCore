'use client'
import React from "react";
import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser, getQuestions, getanswers } from "@/redux/axios";

const Questions = ({ question }) => {

  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUser())
  },[dispatch])

  const users = useSelector((state) => state.userslice.usersdata);
  const questionpostedUser=users.filter((user)=>user._id==question.userId)





  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.answer.length}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
      <Link href={`/user/questions/${question._id}`} className="question-title-link">{question.questionTitle} </Link>
      <div className="display-tags-time">
        <div className="display-tags">
        {question.questionTags.map((tag)=>{
          <p key={tag}>{tag}</p>
        })}
        </div>
        <p className="display-time">
        asked On {moment(question.postedOn).fromNow()} By {questionpostedUser[0]?.username}
        </p>
        
      </div>
      </div>
     
    </div>
  );
};

export default Questions;