'use client'
import React from 'react'
import Link from 'next/link'


const Authprofilemenu = () => {
    const isAuth=false;
    if(isAuth)
    return(
<p>
    <button>logout</button>
</p>)

  return (<>
    <Link href='/signup'>
    <span className="text-xl font-bold text-white hover:text-green-200 cursor-pointer">
      Sign Up
    </span></Link>
  
    <Link href='/login'>
    <span className="text-xl font-bold text-white hover:text-green-200 cursor-pointer">
      Log In
    </span></Link>
    </>
  )
}

export default Authprofilemenu