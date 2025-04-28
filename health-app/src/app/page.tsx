'use client';

import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter(); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); };

    const handleLogin = () => {
      
      router.push("/homepage"); };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
      <div className="bg-gray-100 p-4 flex items-center justify-center">
        
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>


      <form>
        <div className = "mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className= "flex items-center border border-gray-300 rounded-md">
          <img src="/Images/user-solid.svg" alt="user icon" className="w-5 h-5 ml-4  flex items-center justify-center" />
          <input type="email" id="email" name="email" className="w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        </div>
        <div className = "mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className= "flex items-center border border-gray-300 rounded-md">
        <img src="/Images/lock-solid.svg" alt="password icon" className="w-5 h-5 ml-4  flex items-center justify-center" />
        <input type="password" id="password" name="password" className="w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1" placeholder="Enter your password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                </div>
        </div>
        <div className ="mb-6 w-80% mx-auto" >
           <button className="border border-black w-full mx-auto flex gap-2" onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}>
                  <img src="/Images/Google.png" alt="Google" className="w-5 h-5 ml-4" />
              <div className= "ml-10">
            Sign in with Google
            </div>
           </button>
           <div className= "mt-6">
           <Link href="/homepage">
           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  w-full"
            onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}>
            Login
            </button>
            </Link>
           </div>
        </div>
      </form>
      </div>
      </div>




      <div className="bg-gray-100 p-4">
      <div className = "h-screen">
      <img src="/Images/login-image.jpg" alt="paperwork" className="w-full h-full object-center" />

      </div>
      </div>
    </div>
  )
}
