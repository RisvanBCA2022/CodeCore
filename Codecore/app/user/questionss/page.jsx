import React from 'react'
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import '../../../components/Home/App.css'
import RightSideBar from '@/components/Home/RightSideBar/RightSideBar'
import HomeMainBar from '@/components/Home/HomeMainBar/HomeMainBar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <HomeMainBar />
      <div className='home-container-2'>
      
      <RightSideBar />
      
      </div>

    </div>
  )
}

export default Home