'use client'
import React from 'react';
import './Leftsidebar.css';
import Link from 'next/link';
import Image from 'next/image';
import Globe from '../../../public/Glob.svg';
import { usePathname } from 'next/navigation';

const LeftSideBar = () => {
  const currentRoute = usePathname();

  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <Link href='/' className={currentRoute === '/' ? 'active side-nav-links' : 'side-nav-links'}>
          <p>Home</p>
        </Link>
        <div className='side-nav-div'>
          <div>
            <p>PUBLIC</p>
          </div>
          <Link
            href='/user/questionss'
            className={currentRoute === '/questions' ? 'active side-nav-links' : 'side-nav-links'}
            style={{ paddingLeft: '40px' }}
          >
            <Image src={Globe} alt='Globe' />
            <p style={{ paddingLeft: '10px' }}>Questions</p>
          </Link>
          <Link href='/user/tags' className='side-nav-links' style={{ paddingLeft: '40px' }}>
            <p className={currentRoute === '/user/tags' ? 'active' : ''}>Tags</p>
          </Link>
          <Link href='/user/users' className='side-nav-links' style={{ paddingLeft: '40px' }}>
            <p className={currentRoute === '/user/users' ? 'active' : ''}>Users</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;