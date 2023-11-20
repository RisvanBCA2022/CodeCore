'use client'
import React, { useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import detectLanguage from 'lang-detector'; 
import { useParams } from 'next/navigation';
import upVote from '../../../../public/upvote.svg'
import downVote from '../../../../public/downvote.svg'
import Image from 'next/image';
import './Questions.css'
import Link from 'next/link';
import Avatar from '@/components/Avatar/Avatar';
import DisplayAnswer from './DiplayAnswers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, getQuestions, getUser, getanswers, postAnswer, vote } from '@/redux/axios';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import copy from 'copy-to-clipboard';
import { getCookie } from 'cookies-next';
import { deletequestion } from '@/redux/axios';
import axios from 'axios';
import { toast } from 'react-toastify';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const QuestionDetails = () => {

  const { id } = useParams()
  const router = useRouter()
  // const user=JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuestions())
    dispatch(getanswers())
    dispatch(getUser())
    dispatch(fetchAllUser())    
  }, [dispatch])

  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user);

  const questionList = useSelector((state) => state?.questionslice.allQuestions)
  const allAnswers = useSelector((state) => state.questionslice.allAnswers)
  const userdetails = useSelector((state) => state.questionslice.userdetails)
  const users = useSelector((state) => state.userslice.usersdata);


  // console.log(allAnswers)
  const auth = useSelector((state) => state?.authReducer.value)
  const token = getCookie('jwt')
  const add = async(e, noOfAnswers, questionId) => {
    // console.log(questionId);
    e.preventDefault()
  if(!user){
    toast.warning('Please Login')
    router.push('/user/login/#success')
  }else{
    const answerBody = e.target.useranswer.value
    const userId = userdetails._id
    const userAnswered = user.data.username
    if (answerBody == '') {
      alert('Enter an answer before submitting')
    } else {
      await dispatch(postAnswer({ questionId, id, noOfAnswers, answerBody, userId, userAnswered }))
       await dispatch(getanswers())
      
    }
  }
    e.target.reset()

  }
  const filtered = questionList.filter(question => question._id == id)
  // console.log(filtered);
  const filteredAnswer = allAnswers.filter(answer => answer.questionId == id)
  // console.log(filteredAnswer);

  const questionpostedUser=users.filter((user)=>user._id==filtered[0]?.userId)

  const handleshare = () => {
    const userId = user.data.ID


    copy(url)
  }
 

  const deleteQuestionhandler = async(id,userId) => {
    // console.log(id);
    const data={id,userId}
    await dispatch(deletequestion(data))

    router.push('/')
  }

  const upvotehandler = async (e, questionId) => {
    if(!user){
      toast.warning('Please Login')
      router.push('/user/login/#success')
    }else{
      await dispatch(vote({ questionId: questionId, userId: user.data.ID, voteType: 'upvote' }))
      await dispatch(getQuestions())
    }
  

  }

  const downvotehandler = async (e, questionId) => {
    if(!user){
      toast.warning('Please Login')
      router.push('/user/login/#success')
    }else{
      await dispatch(vote({ questionId: questionId, userId: user.data.ID, voteType: 'downvote' }))
    await dispatch(getQuestions())
    
    }
    
  
  }
  const handleEdit=(e,questionId)=>{
    if(!user){
      toast.warning('Please Login')
      router.push('/user/login/#success')
    }else{
      router.push(`/user/editquestion/${questionId}`)

    }
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
                        onClick={(e) => upvotehandler(e, question._id)} />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <Image
                        src={downVote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={(e) => downvotehandler(e, question._id)}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">
                      <SyntaxHighlighter language={detectLanguage(question.questionBody)} style={atomOneLight} customStyle={{ maxWidth:'600px' }}>
                      {question.questionBody}
                      </SyntaxHighlighter>
                      </p>
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
                          <button type="button" onClick={(e) => handleEdit(e, question._id) }>
                            Edit
                          </button>
                          {question?.userId===userdetails._id ? (
                            <button type="button" onClick={() => deleteQuestionhandler(question._id,question.userId)}>
                              Delete
                            </button>
                          ) : (
                            <></>
                          )}



                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            href={`/user/userprofiles/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                            onClick={() => { dispatch(getanswers()) }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {auth.currenUser?.username.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{questionpostedUser[0]?.username}</div>
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
                      href="/user/askquestion"
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