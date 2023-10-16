'use client'
import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Authprofilemenu = () => {
    const isAuth=false;
    if(isAuth)
    return(
<p>
    <button>logout</button>
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