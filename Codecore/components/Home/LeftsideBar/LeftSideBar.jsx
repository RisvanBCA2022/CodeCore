'use client'
import React from 'react'
import './Leftsidebar.css'
import Link from 'next/link'
import Image from 'next/image'
import Globe from '../../../public/Glob.svg'
import { usePathname } from 'next/navigation'

const LeftSideBar = () => {
  const currentRoute = usePathname();
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <Link href='/' className='side-nav-links active'>
          <p>Home</p>
        </Link>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p> </div>
            <Link href='/questions' className="side-nav-links"  style={{paddingLeft:"40px"}}>
             <Image src={Globe} alt='Globe' ></Image>
             <p style={{paddingLeft:"10px"}} className={ currentRoute === "/questions" ? "active" : ''} >Questions</p>
            </Link>
            <Link href='/tags' className='side-nav-links'  style={{paddingLeft:"40px"}}>
              <p className={ currentRoute === "/tags" ? "active" : ''} >Tags</p>
            </Link>
            <Link href='/users' className='side-nav-links'  style={{paddingLeft:"40px"}}>
              <p className={ currentRoute === "/users" ? "active" : ''} >Users</p>
            </Link>
         
        </div>
        
      </nav>
    </div>
  )
}

export default LeftSideBar