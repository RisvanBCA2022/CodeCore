'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import './HomeMainBar.css'
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const HomeMainBar = () => {
    const user=1
    const router=useRouter()
    const questionList=useSelector(state => state.questionslice.allQuestions)
    // console.log(questionList);
    // const questionList=[
    //     {
    //         _id: 1,
    //         upVotes: 10,
    //         downVotes:4,
    //         numberOfAnswers: 3,
    //         questionTitle: "How to efficiently sort a large array?",
    //         questionBody: "I have a large array and I need to sort it efficiently. What is the best approach for this?",
    //         questionTags: ["sorting", "arrays", "efficiency"],
    //         userPosted: "JohnDoe",
    //         askedOn: "2023-10-15T14:30:00",
    //         answer:[{
    //             answerBody:"Answer",
    //             userAnswered:"Ramesh",
    //             answeredOn:"jan 5",
    //             userId:2,
    //         }]
    //     },
    //     {
    //         _id: 2,
    //         upVotes: 10,
    //         downVotes:4,
    //         numberOfAnswers: 5,
    //         questionTitle: "Best practices for securing a web application?",
    //         questionBody: "I'm developing a web application and I want to ensure it's secure. What are the best practices for web application security?",
    //         questionTags: ["security", "web-development", "best-practices"],
    //         userPosted: "JaneSmith",
    //         askedOn: "2023-10-14T09:45:00",
    //         answer:[{
    //             answerBody:"Answer",
    //             userAnswered:"Ramesh",
    //             answeredOn:"jan 5",
    //             userId:2,
    //         }]
    //     },
    //     {
    //         _id: 3,
    //         upVotes: 10,
    //         downVotes:4,
    //         numberOfAnswers: 2,
    //         questionTitle: "Implementing authentication in a Node.js application",
    //         questionBody: "I need to add authentication to my Node.js application. What are the recommended authentication methods for Node.js?",
    //         questionTags: ["Node.js", "authentication", "web-security"],
    //         userPosted: "MaxWilliams",
    //         askedOn: "2023-10-13T18:20:00",
    //         answer:[{
    //             answerBody:"Answer",
    //             userAnswered:"Ramesh",
    //             answeredOn:"jan 5",
    //             userId:2,
    //         }]
    //     },
    //     {
    //         _id: 4,
    //         upVotes: 10,
    //         downVotes:4,
    //         numberOfAnswers: 1,
    //         questionTitle: "Troubleshooting performance issues in a React application",
    //         questionBody: "My React application is experiencing performance issues. How can I identify and resolve these problems?",
    //         questionTags: ["React", "performance", "debugging"],
    //         userPosted: "EmilyJohnson",
    //         askedOn: "2023-10-12T11:10:00",
    //         answer:[{
    //             answerBody:"Answer",
    //             userAnswered:"Ramesh",
    //             answeredOn:"jan 5",
    //             userId:2,
    //         }]
    //     },
    //     {
    //         _id: 5,
    //         upVotes: 10,
    //         downVotes:4,
    //         numberOfAnswers: 7,
    //         questionTitle: "Optimizing SQL queries for better performance",
    //         questionBody: "I have some SQL queries that are running slow. What are some strategies to optimize these queries for better performance?",
    //         questionTags: ["SQL", "database", "performance-tuning"],
    //         userPosted: "MichaelBrown",
    //         askedOn: "2023-10-11T15:55:00",
    //         answer:[{
    //             answerBody:"Answer",
    //             userAnswered:"Ramesh",
    //             answeredOn:"jan 5",
    //             userId:2,
    //         }]
    //     }
    // ];  
    
    const checkAuth=()=>{
        if(user===null){
            alert("login or signup to ask a question")
            router.push('/login')
        }else{
            router.push('/askquestion')
        }
    }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {router.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.length} questions</p>
            <QuestionList questionsList={questionList} />
          </>
        )}
      </div>
    </div>
  )
        }

export default HomeMainBar