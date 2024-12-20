import React from 'react'
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = () => {
  return (
    <div className='  w-[1100px] h-[832.89px] '>
        <div>
            <nav>
               <h1> Free Delivery</h1>
               <p>Applies to orders of ₹ 14 000.00 or more.</p>
               <p className='underline-offset-1'>View details</p>
            </nav>
            <h1 className='font-bold text-3xl'>Bags</h1>

        </div>
        
<div className='flex'>
        <Image src={"/Frame (5).png"} alt='shirt' width={150} height={150}/>        
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          Nike Dri-FIT ADV TechKnit Ultra
          </h2>
          <p>MRP: ₹ 3 895.00</p>
          <p className="leading-relaxed">
          Men's Short-Sleeve Running TopAshen Slate/Cobalt Bliss
          </p>
          <p>Size L ,Quality 1 </p>
        <div className="flex items-center space-x-2">
          <FaRegHeart />
          <RiDeleteBin6Line />
          </div>          
  
        </div>
        <div className="md:flex-grow">
             <Image src={"/image11.png"} alt='shirt' width={150} height={150}/>

          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          Nike Dri-FIT ADV TechKnit Ultra
          </h2>
          <p>MRP: ₹ 3 895.00</p>
          <p className="leading-relaxed">
          Men's Short-Sleeve Running TopAshen Slate/Cobalt Bliss
          </p>
          <p>Size L ,Quality 1 </p>
        <div className="flex items-center space-x-2">
          <FaRegHeart />
          <RiDeleteBin6Line />
          </div>        
          </div>
    
    <div className=' flex justify-between   '>

<div className='flex-row justify-end'>
    <h1 className='font-medium text-2xl'>Summary</h1>

    <p>Subtotal   ₹ 20 890.00</p>

    <p>Estimated Delivery & Handling    Free</p>
    
    <hr />
    <p>Total    ₹ 20 890.00</p>
    <hr />
    <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 pt-2 rounded-full space-x-2">
    Member Checkout
          </button>
    
    </div>
    </div>
    
    </div>
    
  )
}

export default Card