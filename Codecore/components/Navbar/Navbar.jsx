'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { use, useEffect, useReducer } from 'react'
import search from '../../public/search.svg'
import Authprofilemenu from './Authprofilemenu'
import { Avatar } from '@mui/material'
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
import { fetchAllUser, fetchuserbyid, getUser } from '@/redux/axios'
import Avatars from '../Avatar/Avatar'

const Navbar = () => {
  const dispatch = useDispatch()
const [state,setState]=useState(true)


    const user=JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
      if(state && user){
        dispatch(fetchuserbyid(user.data.ID))
        setState(false)
      }
      
    })
    useEffect(()=>{
      dispatch(fetchAllUser())
    },[dispatch])
    
    const userdetails=JSON.parse(localStorage?.getItem('user'))
    const users=useSelector((state)=>state.userslice.usersdata)
    const currentUser=users.find((user)=>user?._id===userdetails?.data.ID)
    // console.log(currentUser?.profilepicture);

    // const userdetails=useSelector(state => state.userslice.currentuserdata.data)
    // console.log(userdetails);



  const router=useRouter()


 const logout=()=>{
  localStorage.removeItem("user");
  deleteCookie('jwt')
  router.push('/user/login')
  
 }
 if (typeof window !== 'undefined') {
  const item = localStorage.getItem('user')
}
// console.log(user);
const handlesubmit=(e)=>{
  e.preventDefault()
  const query=e.target.search.value
  router.push(`/user/search?query=${query}`)

}

  return (
   <nav className='main-nav'>
    <div className='navbar'>
      <Link href='/' className=' '>
      <Image src={Logo} alt='logo' height='60'/>
      </Link>
      <Link href='/' className='nav-item nav-btn'>About</Link>
      <Link href='/' className='nav-item nav-btn'>Products</Link>
      <Link href='/' className='nav-item nav-btn'>For Teams</Link>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder='Search...' id='search'  />
        <Image src={search} alt="search" width='18' className='search-icon'/>
        </form>
        {user?
          <> 
          {
            currentUser?.profilepicture?
            <Link href='/user/profile'><Avatar alt="Remy Sharp" src={currentUser?.profilepicture} ></Avatar></Link>:
            <Avatars  backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link href='/user/profile' style={{color:'white',textDecoration:'none'}}>{currentUser?.username.charAt(0).toUpperCase()}</Link></Avatars>
          }
          <button className='nav-item nav-links' onClick={logout}>Log out</button>
            </>
          :
          <Link href='/user/login' className='nav-item nav-links'>
      Log In
    </Link>

        }
      
    </div>
   </nav>
  )
}

export default Navbar