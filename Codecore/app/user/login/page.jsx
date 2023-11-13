'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import icon from '../../../public/Logo.png'
import './login.css'
import AboutAuth from './aboutAuth'
import { useDispatch } from 'react-redux'
import {logIn,logOut} from "@/redux/features/auth-slice"
import { useSelector } from 'react-redux'
import { setCookie } from 'cookies-next'
import { getUser } from '@/redux/axios'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify';



const Page = () => {
	const [isSignup,setIsSignup]=useState(false)
	const [username, setUserName]=useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
	// const auth = useSelector((state)=> state.authReducer.value)
	// // console.log(auth);
	// const loggeduser=useSelector((state)=>state.authReducer.value.userdetails)
	// console.log(loggeduser);
	
	const dispatch=useDispatch()


	const router=useRouter()

	const handleSwitch = ()=>{
		setIsSignup(!isSignup)
		// console.log(isSignup);

	}
	

const HandleSubmit= async (e)=>{
	e.preventDefault()
		const password=e.target.password.value
		const email=e.target.email.value
		
		// console.log(password);
	
	
	if(isSignup == true){
		if(!username){
			alert("Enter a name to continue")
		}
		try {
			const response = await axios
		.post('http://127.0.0.1:4001/users/register',{
			"username":username,
			"email":email,
			"password":password
		})
		

		if(response.data.status=="success"){
			// dispatch(logIn(response.data))
			toast.success('Successfully login')
			router.push('/user/login')
		}else{
			alert(response.data.message)
		}		
		
	} catch (error) {
		alert(error.message)
	}
	setIsSignup(!isSignup)

	}else {
		try {	
			const response = await axios
		.post('http://127.0.0.1:4001/users/login',{
			"email":email,
			"password":password
		})
		console.log(response.data.data.blocked);
	if(response.data.data.blocked === true){
		alert('You Have been banned  by Admin')
	}else{
		if(response.data.status=="success"){
			dispatch(logIn(response.data))
			setCookie('jwt',response.data.token)
			
			toast.success('Successfully login')

			if(response.data.message=="admin"){
				router.push('/admin')
				localStorage.setItem('admin',JSON.stringify(response.data))
				toast.success('Admin Login Successfull')
				

			}else{
				router.push('/')
				toast.error(response.data.message)
			localStorage.setItem('user',JSON.stringify(response.data))

			}
			
		}else{
			// console.log(response.data);
			toast.warning(response.data.message)
			
		}
	}

	} catch (error) {
		toast.error(error.message)
	}}
	}
	



  return (
	<section className='auth-section'>
		{isSignup && <AboutAuth />}
		<div className='auth-container-2'>
			{!isSignup && <Image src={icon} alt='codecore' className='login-logo' />}
			<form action="" onSubmit={HandleSubmit}>
				{
					isSignup && (
						 <label htmlFor="name">
							<h4>Display Name</h4>
							<input type='text' id='name' name='name'  onChange={(e)=>{setUserName(e.target.value)}} />
						 </label>
					)
				}
				<label htmlFor="email">
					<h4>Email</h4>
					<input type="email" id="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} />
				</label>
				<label htmlFor="password">
					<div style={{display:'flex',justifyContent:'space-between'}}>
					<h4>Password</h4>
					{!isSignup &&<p style={{color:"#007ac6",fontSize:'13px'}}>forgot password</p> }	
					</div>
					<input type="password" id="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} />
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
						By clicking “Sign up”, you agree to our <span style={{color:"#007"}}>terms of service</span> and acknowledge that you have read and understand our <span style={{color:"#007"}}>privacy policy</span> and <span style={{color:"#007"}}>code of conduct.</span>
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