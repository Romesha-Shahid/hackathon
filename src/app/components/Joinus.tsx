import React from 'react'
import { SiNike } from "react-icons/si";
import Link from 'next/link';

const Joinus = () => {
  return (
    <div className='flex flex-col justify-center bg-slate-500 w-full   h-[1200px] '>
<div className=' lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6   flex-col justify-center'>
<SiNike className=" text-4xl " /> 
<span className="text-gray-900 text-3xl title-font font-medium mb-1 justify-center">
BECOME A NIKE MEMBER
        </span>
        <br />
        <span className="justify-center   leading-relaxed">
        Create your Nike Member profile and get 
        First access to the very best of
         Nike products, inspiration and community.
        </span>
        </div>
        <div  className='w-[275px] h-[900px] flex flex-col justify-center'>
        <section>
        <div className="  relative mb-4">
       
        <input
          type="text"
          id="name"
          placeholder="name"
          className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        /> </div>
 <div className="relative mb-4">
       
       <input
         type="text"
         id="Email"
         placeholder="Email address"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>
        <div className="relative mb-4">
       
       <input
         type="text"
         id="number"
         placeholder="Password"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>
        <div className="relative mb-4">
       
       <input
         type="text"
         id="name"
         placeholder="First Name"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>
        <div className="relative mb-4">
       
       <input
         type="text"
         id="name"
         placeholder="Last Name"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>

<div className="relative mb-4">
       
       <input
         type="text"
         id="number"
         placeholder="Date of Birth"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>

       <p>Get a Nike Member Reward every year on your Birthday.</p>
       <div className="relative mb-4">
       
       <input
         type="text"
         id="name"
         placeholder="pakistan"
         className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>
       





       <div className="relative mb-2">
       
      <input type="text" placeholder='male' className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required/>
        </div> 
       
       


      <div className='relative mb-4'>
        <p className='leading-relaxed'>
        By creating an account, you agree to Nike's 
         </p>
         <p className='underline md:underline-offset-4'>Privacy Policy and Terms of Use.</p>
      </div>
    
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
        Join Us
        <Link
         target='_blank' 
         href={"hptts/UCZtzdzAG41ZwFia8jWuk9WA"}>

         </Link>

      </button>
      <p>Already a Member? Sign In.</p>
        
           
            </section>
        </div>
    </div>
  )
}

export default Joinus