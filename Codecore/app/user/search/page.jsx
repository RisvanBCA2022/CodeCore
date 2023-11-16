'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '@/redux/axios'
import Link from 'next/link'
import moment from 'moment'

const page = () => {
    const searchParams = useSearchParams()
    const questionList = useSelector((state) => state.questionslice.allQuestions);
    const dispatch=useDispatch()
    console.log(questionList);
    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);
 
  const search = searchParams.get('query')
  
  return (
    <div>
    <div className="home-container-1" style={{marginTop:"50px"}}>
            <LeftSideBar  />
            <div className="home-container-2">
            <h1>Question that related to {search}</h1>
            {questionList.map((question)=>(
                question.questionTitle.toLowerCase().includes(search.toLowerCase())?
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
        asked On {moment(question.askedOn).format("ddd, hA")} By {question.userPosted}
        </p>
        
      </div>
      </div>
     
    </div>:null
            ))}
            </div>

</div>
    </div>
  )
}

export default page