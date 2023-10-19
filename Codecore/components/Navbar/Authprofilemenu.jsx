'use client'
import React from 'react'
import Link from 'next/link'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/redux/features/auth-slice'

const Authprofilemenu = () => {
  const auth = useSelector((state)=> state.authReducer.value)
  const dispatch = useDispatch()
  console.log(auth);

    if(auth.isAuth==true)
    return(
<p>
    <button className='nav-item nav-links' onClick={()=>dispatch(logOut())} >logout</button>
</p>)

  return (<>
  
    {/* <Link href='/signup' className='nav-item nav-links' >
      Sign Up
    </Link> 
     */}
  
    <Link href='/login' className='nav-item nav-links'>
      Log In
    </Link>
    </>
  )
}

export default Authprofilemenu