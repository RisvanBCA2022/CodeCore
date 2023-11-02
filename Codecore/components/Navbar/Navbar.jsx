'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useReducer } from 'react'
import search from '../../public/search.svg'
import Authprofilemenu from './Authprofilemenu'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import Logo from '../../public/Logo.png'
import Button from '../Button/Button'
import { useDispatch,useSelector } from 'react-redux'
import { logIn, logOut } from '@/redux/features/auth-slice'
import { useRouter } from 'next/navigation'
import { getCookie,deleteCookie } from 'cookies-next'
import jwtDecode from 'jwt-decode'
import { data } from 'autoprefixer'
import { useState } from 'react'
import { getUser } from '@/redux/axios'

const Navbar = () => {
  const dispatch = useDispatch()
  // const [user,setUser]=useState(null)


  // useEffect(() => {
  //   dispatch(getUser())
    const user=JSON.parse(localStorage.getItem('user'))
  //   if(userdata){
  //     setUser(JSON.parse(userdata))
  //   }

  // }, [dispatch]);
  
  const userdetails=useSelector(state => state.questionslice.userdetails)
  // console.log(userdetails);


  const router=useRouter()
  const auth = useSelector((state)=> state.authReducer.value)
  // console.log(auth);
  // const user=null
  //  console.log(user);
  const token = getCookie('jwt')

 const logout=()=>{
  deleteCookie('jwt') 
  dispatch(logOut())
  router.push('/login')
  
 }
 if (typeof window !== 'undefined') {
  const item = localStorage.getItem('user')
}
  return (
   <nav className='main-nav'>
    <div className='navbar'>
      <Link href='/' className='nav-item nav-btn'>
      <Image src={Logo} alt='logo' height='50'/>
      </Link>
      <Link href='/' className='nav-item nav-btn'>About</Link>
      <Link href='/' className='nav-item nav-btn'>Products</Link>
      <Link href='/' className='nav-item nav-btn'>For Teams</Link>
      <form action="">
        <input type="text" placeholder='Search...' />
        <Image src={search} alt="search" width='18' className='search-icon'/>
        </form>
        {user?.auth==true?
          <> <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link href='/profile' style={{color:'white',textDecoration:'none'}}>{user?.data?.username?.charAt(0).toUpperCase()}</Link></Avatar><button className='nav-item nav-links' onClick={logout}>Log out</button></>
          :
          <Authprofilemenu />

        }
      
    </div>
   </nav>
  )
}

export default Navbar