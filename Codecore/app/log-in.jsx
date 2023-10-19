"use client"
import React, { useState } from 'react'
import {logIn,logOut} from "@/redux/features/auth-slice"
import {useDispatch} from 'react-redux'

const Login = () => {

  const [username,setUsername]=useState("")

  const dispatch=useDispatch()

  const onClickLogIn = ()=>{
    dispatch(logIn(username))
  }
  const onClickToggle = ()=>{}
  const onClickLogOut = ()=>{}


  return (
    <div>
    <input type='text' onChange={(e)=>setUsername(e.target.value)} />
    <button onClick={onClickLogIn}>Login</button>
    </div>
  )
}

export default Login