'use client'
import LeftSideBar from '@/components/Home/LeftsideBar/LeftSideBar'
import { useRouter } from 'next/navigation'
import React from 'react'


const page = () => {

  const router=useRouter()
  const navigate=()=>{
    router.push('/user/profile')
  }
  return (
    <div className='home-container-1'>
    <LeftSideBar />
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public information</h2>
      <form className="edit-profile-form">
        <label htmlFor="name">
          <h3>Display name</h3>
          <input type="text" />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea id="about" cols="30" rows="10"></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input type="text" id="tags" />
        </label>
        <br />
        <input type="submit" value="Save profile" className="user-submit-btn" />
        <button type="button" className="user-cancel-btn" onClick={navigate}>
          Cancel
        </button>
      </form>
    </div>

    </div>
  )
}

export default page