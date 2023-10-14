'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import icon from '../../public/Logo.png'
import './login.css'
import AboutAuth from './aboutAuth'

const Page = () => {
	const [isSignup,setIsSignup]=useState(false)


	const router=useRouter()

	const handleSwitch = ()=>{
		setIsSignup(!isSignup)
	}
	
	const Handleclick=async (event)=>{
try {
	
		event.preventDefault()
		const username=event.target.username.value
		const password=event.target.password.value
		const response =	await axios
	.post('http://127.0.0.1:4001/users/login',{
		"username":username,
		"password":password
	})
	if(response.data.status=="success"){
		router.push('/')
		alert('Successfully logined')
	}else{
		alert(response.data.message)
	}
	
} catch (error) {
	alert(error.message)
}}

  return (
	<section className='auth-section'>
		{isSignup && <AboutAuth />}
		<div className='auth-container-2'>
			{!isSignup && <Image src={icon} alt='codecore' className='login-logo' />}
			<form action="" onSubmit={Handleclick}>
				{
					isSignup && (
						 <label htmlFor="name">
							<h4>Display Name</h4>
							<input type='text' id='name' name='name' />
						 </label>
					)
				}
				<label htmlFor="email">
					<h4>Email</h4>
					<input type="email" id="email" name='email' />
				</label>
				<label htmlFor="password">
					<div style={{display:'flex',justifyContent:'space-between'}}>
					<h4>Password</h4>
					{!isSignup &&<p style={{color:"#007ac6",fontSize:'13px'}}>forgot password</p> }	
					</div>
					<input type="password" id="password" name='password' />
					{isSignup && <p style={{color:"#666767",fontSize:"13px"}}> Passwords must contain at least eight<br></br> characters,including at least 1 letter and 1 number</p>}
				</label>
				{
					isSignup&&(
						<label htmlFor="check">
							<input type="checkbox" id='check' />
							<p style={{fontSize:"13px"}}>Opt-in to receive occasional<br></br> product updates, user research invitations, company announcements, and digests.</p>
						</label>
					)
				}
				<button type='submit' className='auth-btn'>{isSignup?'Sign up':'Log in'}</button>
				{isSignup && (
					<p style={{color:"#666767",fontSize:"13px"}}>
						By clicking “Sign up”, you agree to our <span style={{color:"#007"}}>terms of service</span > and acknowledge that you have read and understand our <span style={{color:"#007"}}>privacy policy</span> and <span style={{color:"#007"}}>code of conduct.</span>
					</p>
				)}
			</form>
			<p>
				{isSignup? 'already have an account?':"Don't have an account?"}
				<a type='button' className='handle-switch' onClick={handleSwitch}>{isSignup?'Log in':'signup'}</a>
			</p>
		</div>
	</section>
  )
}

export default Page