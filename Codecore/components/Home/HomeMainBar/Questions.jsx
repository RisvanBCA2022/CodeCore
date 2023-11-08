'use client'
import React from "react";
import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "@/redux/axios";

const Questions = ({ question }) => {

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
      <Link href={`/user/questions/${question._id}`} className="question-title-link">{question.questionTitle}</Link>
      <div className="display-tags-time">
        <div className="display-tags">
        {question.questionTags.map((tag)=>{
          <p key={tag}>{tag}</p>
        })}
        </div>
        <p className="display-time">
        asked {question.askedOn} {question.userPosted}
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default Questions;