import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import RightSideBar from '@/components/Home/RightSideBar/RightSideBar'
import React from 'react'
import QuestionDetails from './QuestionDetails'

const QuestionDisplay = () => {
  return (
    <div className='home-container-1'>
        <LeftSideBar />
       
        <div className='home-container-2'>
        <QuestionDetails />

        <RightSideBar />
        </div>
    </div>
  )
}

export default QuestionDisplay