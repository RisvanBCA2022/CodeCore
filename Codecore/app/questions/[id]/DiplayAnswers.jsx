import Link from 'next/link'
import React from 'react'
import Avatar from '@/components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
    
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
                    <p>answer {ans.answeredOn}</p>
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