'use client'
import React from 'react'
import { useParams } from 'next/navigation';
import upVote from '../../../public/upvote.svg'
import downVote from '../../../public/downvote.svg'
import Image from 'next/image';
import './Questions.css'
import Link from 'next/link';
import Avatar from '@/components/Avatar/Avatar';
import DisplayAnswer from './DiplayAnswers';

const QuestionDetails = () => {
    const {id} = useParams()
    
    

    const questionList=[
        {
            _id: 1,
            upVotes: 10,
            downVotes:4,
            numberOfAnswers: 3,
            questionTitle: "How to efficiently sort a large array?",
            questionBody: "I have a large array and I need to sort it efficiently. What is the best approach for this?",
            questionTags: ["sorting", "arrays", "efficiency"],
            userPosted: "JohnDoe",
            askedOn: "2023-10-15T14:30:00",
            answer:[{
                answerBody:"Answer",
                userAnswered:"Ramesh",
                answeredOn:"jan 5",
                userId:2,
            }],
            userId:5,
        },
        {
            _id: 2,
            upVotes: 10,
            downVotes:4,
            numberOfAnswers: 5,
            questionTitle: "Best practices for securing a web application?",
            questionBody: "I'm developing a web application and I want to ensure it's secure. What are the best practices for web application security?",
            questionTags: ["security", "web-development", "best-practices"],
            userPosted: "JaneSmith",
            askedOn: "2023-10-14T09:45:00",
            answer:[{
                answerBody:"Answer",
                userAnswered:"Ramesh",
                answeredOn:"jan 5",
                userId:2,
            }],
            userId:5,
        },
        {
            _id: 3,
            upVotes: 10,
            downVotes:4,
            numberOfAnswers: 2,
            questionTitle: "Implementing authentication in a Node.js application",
            questionBody: "I need to add authentication to my Node.js application. What are the recommended authentication methods for Node.js?",
            questionTags: ["Node.js", "authentication", "web-security"],
            userPosted: "MaxWilliams",
            askedOn: "2023-10-13T18:20:00",
            answer:[{
                answerBody:"Answer",
                userAnswered:"Ramesh",
                answeredOn:"jan 5",
                userId:2,
            }],
            userId:5,
        },
        {
            _id: 4,
            upVotes: 10,
            downVotes:4,
            numberOfAnswers: 1,
            questionTitle: "Troubleshooting performance issues in a React application",
            questionBody: "My React application is experiencing performance issues. How can I identify and resolve these problems?",
            questionTags: ["React", "performance", "debugging"],
            userPosted: "EmilyJohnson",
            askedOn: "2023-10-12T11:10:00",
            answer:[{
                answerBody:"Answer",
                userAnswered:"Ramesh",
                answeredOn:"jan 5",
                userId:2,
            }],
            userId:5,
        },
        {
            _id: 5,
            upVotes: 10,
            downVotes:4,
            numberOfAnswers: 7,
            questionTitle: "Optimizing SQL queries for better performance",
            questionBody: "I have some SQL queries that are running slow. What are some strategies to optimize these queries for better performance?",
            questionTags: ["SQL", "database", "performance-tuning"],
            userPosted: "MichaelBrown",
            askedOn: "2023-10-11T15:55:00",
            answer:[{
                answerBody:"Answer",
                userAnswered:"Ramesh",
                answeredOn:"jan 5",
                userId:2,
            }],
            userId:5,
        }
    ];  
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
                      <p>{question.upVotes - question.downVotes}</p>
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
                              {question.userPosted.charAt(0).toUpperCase()}
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
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
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