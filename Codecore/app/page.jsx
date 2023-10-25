"use client"
import { Home } from '@/components'
import Image from 'next/image'
import Login from './log-in'
import { useEffect } from 'react'
import { getQuestions } from '@/redux/axios'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'

const page = () => {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getQuestions())
  },[dispatch])
  

  // const username =useSelector((state)=>state.authReducer.value.username)
  return (
    <main className='overflow-hidden'>
    <Home />
    {/* <Login /> */}
    
        </main>
  )
}

export default page