import Link from 'next/link'
import React, { useEffect } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import moment from 'moment'
import { getQuestions } from '@/redux/axios'
import { useDispatch } from 'react-redux'

const DisplayAnswer = ({question}) => {
    const dispatch=useDispatch()
    console.log(question);
    
    useEffect(()=>{
        dispatch(getQuestions())
      },[dispatch])
    
  return (
    <>
    {
        question.answer.map((ans,i)=>(
            <div className='display-ans' key={i}> 
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
                <div>
                    <button type='button'>Shares</button>
                    <button type='button'>Delete</button>

                </div>
                <div>
                    <p>answer {moment(ans.answeredOn).fromNow()}</p>
                    <Link href={`/user/${question.userId}`} className='user-link' style={{color:'#006d8'}} >
                                    <Avatar backgroundColor="green" px='8' py='5px'>{ans.userAnswered?.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                    </Link>
                </div>
            </div>
            </div>
        ))

    }
    </>
  )
}

export default DisplayAnswer