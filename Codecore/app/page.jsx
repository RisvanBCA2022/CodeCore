"use client"
import { Home } from '@/components'
import Image from 'next/image'
import Login from './log-in'
// import { useSelector } from 'react-redux'

const page = () => {

  // const username =useSelector((state)=>state.authReducer.value.username)
  return (
    <main className='overflow-hidden'>
    <Home />
    {/* <Login /> */}
    
        </main>
  )
}

export default page