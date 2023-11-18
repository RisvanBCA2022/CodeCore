'use client'
import React from 'react'
import './adminleftbar.css'
import Link from 'next/link'
import Image from 'next/image'
// import Globe from '../../../public/Glob.svg'
import { usePathname } from 'next/navigation'

const AdminLeftbar = () => {
  const currentRoute = usePathname();
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <Link href='/admin' className={currentRoute === '/'?'active side-nav-links':'side-nav-links'}>
          <p>Home</p>
        </Link>
        <div className='side-nav-div'>     
            <Link href='/admin/userlists' className='side-nav-links'  style={{paddingLeft:"40px"}}>
              <p className={ currentRoute === "/admin/user" ? "active" : ''} >Users</p>
            </Link>
            <Link href='/admin/questionlist' className='side-nav-links'  style={{paddingLeft:"40px"}}>
              <p className={ currentRoute === "/admin/question" ? "active" : ''} >Question</p>
            </Link>
            {/* <Link href='/answers/users' className='side-nav-links'  style={{paddingLeft:"40px"}}>
              <p className={ currentRoute === "/admin/answer" ? "active" : ''} >Answers</p>
            </Link> */}
         
        </div>
        
      </nav>
    </div>
  )
}

export default AdminLeftbar