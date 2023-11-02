import Link from 'next/link'
import React, { useEffect } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import moment from 'moment'
import { deleteanswer, getQuestions } from '@/redux/axios'
import { useDispatch, useSelector } from 'react-redux'

const DisplayAnswer = ({question}) => {
    const dispatch=useDispatch()
    const userdetails=useSelector(state => state.questionslice.userdetails)

    // console.log(question);
    console.log(userdetails);
    const user=JSON.parse(localStorage.getItem('user'))

    
    useEffect(()=>{
        dispatch(getQuestions())
      },[dispatch])

      const deleteAnswer=(answerId,userId)=>{
        // console.log(answerId,question._id);
        // console.log(userId);
        const currentuserId=user.data.ID
        const Id=answerId
        const questionId=question._id
        const data={userId,Id,questionId}
        if(currentuserId===userId){
            dispatch(deleteanswer(data))
            dispatch(getQuestions())
            dispatch(getQuestions())
        }else{
            alert('access denied')

        }
        

      }
    
  return (
    <>
    {
        question.answer.map((ans,i)=>(
            <div className='display-ans' key={i}> 
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
                <div>
                    <button type='button'>Shares</button>
                    <button type='button' onClick={()=>deleteAnswer(ans._id,ans.userId)}>Delete</button>

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