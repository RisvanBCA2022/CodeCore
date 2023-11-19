// "use client"
import { Home } from '@/components'
import Image from 'next/image'
// import Login from './log-in'
// import { useEffect } from 'react'

import Navbar from '@/components/Navbar/Navbar'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import middleware from './middleware'
// import { useSelector } from 'react-redux'

const page = () => {

//  const path=usePathname()
//  console.log('http://localhost:3000'+path);
  // const dispatch=useDispatch()

  // useEffect(()=>{
  //   dispatch(getQuestions())
  //   dispatch(getanswers())
  // },[dispatch])


  // const username =useSelector((state)=>state.authReducer.value.username)
  // middleware()

  return (
    
    <main className='overflow-hidden'>
    <div className='home-container-1'>
    <AdminLeftbar />
    </div>
  
    
        </main>
  )
}

export default page