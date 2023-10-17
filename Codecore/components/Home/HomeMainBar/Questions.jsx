'use client'
import React from "react";
import Link from "next/link";
import moment from "moment";

const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{question.votes}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.numberOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
      <Link href={`/questions/${question.id}`} className="question-title-link">{question.questionTitle}</Link>
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