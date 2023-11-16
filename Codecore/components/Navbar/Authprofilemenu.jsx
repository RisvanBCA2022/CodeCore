'use client'
import React from 'react'
import Link from 'next/link'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '@/redux/features/auth-slice'
import Avatar from '../Avatar/Avatar'

const Authprofilemenu = () => {
  const auth = useSelector((state)=> state.authReducer.value)
  const dispatch = useDispatch()
 const logout=()=>{
  dispatch(logOut())
  localStorage.removeItem('Profile')
 }
//     if(auth.isAuth==true)
//     return(
// <p>
// <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link href='/user' style={{color:'white',textDecoration:'none'}}>M</Link></Avatar>
//     <button className='nav-item nav-links' onClick={logout} >logout</button>
// </p>)

  return (<>
  
    {/* <Link href='/signup' className='nav-item nav-links' >
      Sign Up
    </Link> 
     */}
  
    
    </>
  )
}

export default Authprofilemenu