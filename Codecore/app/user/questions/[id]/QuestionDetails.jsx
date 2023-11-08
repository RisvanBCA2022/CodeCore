'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import upVote from '../../../../public/upvote.svg'
import downVote from '../../../../public/downvote.svg'
import Image from 'next/image';
import './Questions.css'
import Link from 'next/link';
import Avatar from '@/components/Avatar/Avatar';
import DisplayAnswer from './DiplayAnswers';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, getanswers, postAnswer, vote } from '@/redux/axios';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import copy from 'copy-to-clipboard';
import { getCookie } from 'cookies-next';
import { deletequestion } from '@/redux/axios';
import axios from 'axios';

const QuestionDetails = () => {

  const { id } = useParams()
  const router = useRouter()
  // const user=JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuestions())
    dispatch(getanswers())

  }, [dispatch])

  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user);

  const questionList = useSelector((state) => state?.questionslice.allQuestions)
  const allAnswers = useSelector((state) => state.questionslice.allAnswers)
  console.log(allAnswers)
  const auth = useSelector((state) => state?.authReducer.value)
  const token = getCookie('jwt')
  const add = (e, noOfAnswers, questionId) => {
    // console.log(questionId);
    e.preventDefault()
    const answerBody = e.target.useranswer.value
    const userId = user.data.ID
    const userAnswered = user.data.username
    if (answerBody == '') {
      alert('Enter an answer before submitting')
    } else {
      dispatch(postAnswer({ questionId, id, noOfAnswers, answerBody, userId, userAnswered }))
      dispatch(getanswers())    
    }
    e.target.reset()

  }
  const filtered = questionList.filter(question => question._id == id)
  console.log(filtered);
  const filteredAnswer = allAnswers.filter(answer => answer.questionId == id)
  console.log(filteredAnswer);

  const handleshare = () => {
    const userId = user.data.ID


    copy(url)
  }
  //   const pathname = router.pathname;
  // const query = router.query;
  // const asPath = router.asPath;
  // console.log(pathname,query,asPath);

  const deleteQuestionhandler = (id) => {
    // console.log(id);
    dispatch(deletequestion(id))

    router.push('/')
  }

  const upvotehandler = async (e,questionId)=>{
    console.log(questionId);
    dispatch(vote({questionId:questionId,userId:user.data.ID,voteType:'upvote'}))
  }

  const downvotehandler = async (e,questionId)=>{
    dispatch(vote({questionId:questionId,userId:user.data.ID,voteType:'downvote'}))  
  }
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
                        onClick={(e) => upvotehandler(e, question._id)}                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <Image
                        src={downVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={(e)=>downvotehandler(e,question._id)}
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
                          <button type="button" onClick={handleshare}>
                            Share
                          </button>

                          <button type="button" onClick={() => deleteQuestionhandler(question._id)}>
                            Delete
                          </button>

                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            href={`/users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                            onClick={()=>{dispatch(getanswers())}}
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
                {filteredAnswer.length !== 0 && (
                  <div>
                    <h3>{question.answer.length} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      filteredAnswer={filteredAnswer}
                    />
                  </div>
                )}
                <div className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => { add(e, question.answer.length, question._id) }}
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