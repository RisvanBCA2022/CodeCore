'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
	const user = useSelector((state)=> state.authReducer.value)
  return (
    <div>
    <h1>Profile</h1>
    <h1>{user.currentuser?.username}</h1>

    </div>
  )
}

export default page