import React from 'react'

const Footer = () => {
  return (
  
    
      <div className=" bg-slate-200 flex justify-items-center w-[1411px] h-[331px] gap-x-3" >
            <footer className=" py-10 px-8 text-blue-600 ">
             <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-9">
           
           <div className='text-black'>
            <h1 className='font-extrabold'>Resources</h1>
            <ul>
              <li>Gift Cards</li>
              <li>Find a Store</li>
              <li>Membership</li>
              <li>Nike Journal</li>
              <li>Site Feedback</li>
            </ul>
        </div>
        <div  className='text-black'>
          <h1 className='font-extrabold'>Get Help</h1>
          <ul>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returne</li>
            <li>OrderCancellation</li>
            <li>Payment Option</li>
            <li>Gitf Card Balance</li>
            <li>Contant Us</li>
          </ul>
        </div>
     <div  className='text-black'>
      <h1 className='font-extrabold'>Company</h1>
      <ul>
        <li>About Us</li>
        <li>News</li>
        <li>Career</li>
        <li>Tnventer</li>
        <li>Porpose</li>
        <li></li>
      </ul>
     </div>
<div className='text-black' >

  <h1 className='font-extrabold'>Promotion and Discount</h1>
  <ul>
    <li>Student</li>
    <li>Military</li>
    <li>Teacher</li>
    <li>First Responders & Medical Professionals</li>
    <li>Birthday</li>
  </ul>
</div>

     </div>
    
     <div className='text-black hover:text-slate-500'>
     <p >
      © 2024  @ romeshashahid
      
    </p>
     </div>
          </footer>
    </div>
  )
}

export default Footer