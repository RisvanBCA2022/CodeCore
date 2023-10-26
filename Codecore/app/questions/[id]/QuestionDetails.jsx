'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import upVote from '../../../public/upvote.svg'
import downVote from '../../../public/downvote.svg'
import Image from 'next/image';
import './Questions.css'
import Link from 'next/link';
import Avatar from '@/components/Avatar/Avatar';
import DisplayAnswer from './DiplayAnswers';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, postAnswer } from '@/redux/axios';
import { useRouter } from 'next/navigation';

const QuestionDetails = () => {
    const {id} = useParams()
    const router=useRouter()
    
    const dispatch=useDispatch()
    const questionList=useSelector((state)=>state?.questionslice.allQuestions)
    const auth = useSelector((state)=> state?.authReducer.value)
    // console.log(questionList);

    // const submit=(e)=>{
    //   e.preventDefault()

    // }
    const add=(e,answerlength)=>{
      e.preventDefault()
      const useranswer=e.target.useranswer.value

      if(useranswer==''){
        alert('Enter an answer before submitting')
      }else{
        dispatch(postAnswer({id,answerlength}))
      }

    }
    

  
    const filtered=questionList.filter(question=>question._id == id)
    // console.log(filtered);

  return (
    
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {filtered
            .map((question) => (
              <div key={question._id}>
                <div className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <Image
                        src={upVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <Image
                        src={downVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" >
                            Share
                          </button>
                       
                            <button type="button" >
                              Delete
                            </button>
            
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            href={`/users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {auth.currenUser?.username.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {question.noOfAnswers !== 0 && (
                  <div>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                    />
                  </div>
                )}
                <div className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e)=>{add(e,question.answer.length)}}
                  >
                    <textarea
                      name=""
                      id="useranswer"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                      // onClick={()=>submit()}
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link href="/tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      href="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>

  )
}

export default QuestionDetails