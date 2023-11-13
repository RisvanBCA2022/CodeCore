// 'use client'
// import React, { useRef, useState } from 'react'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import { toast } from 'react-toastify'

// const Page = () => {
// 	const router=useRouter()
	
// 	const Handleclick=async (event)=>{
		
// try {
	
// 		event.preventDefault()
// 		const email=event.target.email.value
// 		const username=event.target.username.value
// 		const password=event.target.password.value
// 		const response =	await axios
// 	.post('http://127.0.0.1:4001/users/register',{
// 		"username":username,
// 		"email":email,
// 		"password":password
// 	})
// 	if(response.data.status=="success"){
// 		router.push('/login')
// 		toast.success('Successfully register')
// 	}else{
// 		toast.warning(response.data.message)
// 	}
	
// } catch (error) {
// 	alert(error.message)
// }}

	
	
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
// 	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
// 		<div
// 			className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
// 		</div>
// 		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
// 			<div className="max-w-md mx-auto">
// 				<div>
// 					<h1 className="text-2xl font-semibold">Register</h1>
// 				</div>
// 				<div className="divide-y divide-gray-200">
// 					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
// 					<form action="" onSubmit={Handleclick}>

// 						<div className="relative">
// 							<input  id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
// 							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
// 						</div>
// 						<div className="relative">
// 							<input id="username" name="username" type="username" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />
// 							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
// 						</div>
//                         <div className="relative">
// 							<input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
// 							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
// 						</div>
// 						<div className="relative">
// 							<button className="bg-green-500 text-white rounded-md px-2 py-1">Submit</button>
// 						</div>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
//   )
// }

// export default Page