"use client"
import { Home } from '@/components'
import Image from 'next/image'
// import Login from './log-in'
import { useEffect } from 'react'
import { fetchAllUser, getQuestions, getanswers } from '@/redux/axios'
import { useDispatch } from 'react-redux'
import { usePathname } from 'next/navigation'
// import { useSelector } from 'react-redux'

const page = () => {
 const path=usePathname()
//  console.log('http://localhost:3000'+path);
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getQuestions())
    dispatch(getanswers())
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