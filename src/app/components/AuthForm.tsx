'use client'
import React from 'react'
import {useState} from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import Home from '../page';
const AuthForm: React.FC<{onClose: () => void}> = ({onClose}) => {
    const [loginForm, setLoginForm] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handlesubmit = (e: React.FormEvent) => {
        if (loginForm) {
            console.log('Logging in as:', 'Username:', username, 'Password:', password)
        } else {
            console.log('Signing up as:',  'Username:', username, 'Email:', email, 'Password:', password )
        }
    }

  return (
   <div className="fixed inset-0 flex bg-black bg-opacity-50 justify-center items-center">
    <div className="border border-8 border-[#D1EFB5] w-96 h p-6 rounded-lg relative bg-white">
        <button onClick={onClose} className="absolute top-4 right-4 text-color-black hover:scale-110 text-3xl text-[#f58789] transition-all">
            <IoMdCloseCircle />
        </button>
        <h2 className="h-2 text-center p-4 font-bold text-2xl mb-6 text-[#D1EFB5]">
            {loginForm ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handlesubmit}>
            {/* If we are signing up */}
            {!loginForm && (
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <input type="text" id="username" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#D1EFB5] border-2" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
            )}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" id="email" className="w-full px-2 py-3 border rounded-md focus:outline-none focus:border-[#D1EFB5] border-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-6">
                <label className="block mb-1 font-medium">Password</label>
                <input type="password" id="password" className="w-full px-2 py-3 border rounded-md focus:outline-none focus:border-[#D1EFB5] border-2" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div >
            {!loginForm && (
                <div className="mb-6">
                <label className="block mb-1 font-medium">Confirm Password</label>
                <input type="password" id="password" className="w-full px-2 py-3 border rounded-md focus:outline-none focus:border-[#D1EFB5] border-2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
            )}
            <button className="w-full bg-[#D1EFB5] py-2 rounded-md hover:scale-105 transition-all">
                {loginForm ? "Login" : "Signup"}
            </button>
        </form>
        <p className="mt-4 text-center">
            {loginForm ? "Don't have an account?" : "Have an account?"}
            <button  className="ml-1 font-medium text-[#D1EFB5]"onClick={() => setLoginForm(!loginForm)}>{loginForm ? "Signup" : "Login"}</button>
        </p>
    </div>
   </div>
  )
}
export default AuthForm