'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import LeftSideBar from './LeftsideBar/LeftSideBar'
import './App.css'
import RightSideBar from './RightSideBar/RightSideBar'
import HomeMainBar from './HomeMainBar/HomeMainBar'

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