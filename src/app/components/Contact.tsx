import React from 'react'
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div >
     { /**Left div */}
        <main className=''>
          <div className=' form text-center my-6'>
         <span className="text-2xl font-semibold my-6 uppercase text-center">Get Help</span>
             </div>
            <div className='flex justify-center'>
            <input 
         type="text"
         id="message"
         placeholder="What can we help you with?"
         className="max-w-72 bg-white rounded border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
       /> </div>

       <div className='height={1254} width=1042} '>
       <span className='text-2xl font-semibold my-6 uppercase text-center'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</span><br />
       <span >We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</span> <br />
       <span>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</span>
       <br />
       <span>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro0</span>
       <br />
       <span>Apple Pay</span>
       <br />
        <span>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</span>     
<br />
<div className='flex items-center'>
<button className="  ml-auto text-white bg-black border-0 py-2 px-6  rounded-full space-x-2">
    JOIN  US
          </button><button className="flex  ml-auto text-white bg-black border-0 py-2 px-6  rounded-full space-x-2">
     SHOP NIKE
          </button>
</div>
<h1 className='text-2xl font-medium'>FAQs</h1>
 <h5>Does my card need international purchases enabled?</h5>
 <p>
Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
Please note, some banks may charge a small transaction fee for international orders.
</p>
<h5 className='text-xs font-semibold'>Can I pay for my order with multiple methods?</h5>
 <p>No, payment for Nike orders can't be split between multiple payment </p>
 <h5>What payment method is accepted for SNKRS orders?</h5>
<p>You can use any accepted credit card to pay for your SNKRS order.</p>
<h5 className='text-xs font-semibold'>Why don't I see Apple Pay as an option?</h5>
<p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
</p>
 <h6 className='text-xs font-semibold'>Was this answer helpful?</h6>
 <p>RELATED </p>

 <p className="stroke-1 hover:stroke-2">
 <IoMdThumbsUp /> <IoMdThumbsDown />
 </p>
<h4 className='text-xs font-semibold'>WHAT ARE NIKE'S DELIVERY OPTIONS?</h4>
 <h4 className='text-xs font-semibold'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h4>
       </div> 
          </main>
          { /**Right  div */}
        <hr />
        <section className='flex-row  columns-1 justify-items-center -left-96 height={313.25} width={1042}'>
          <div className=' whitespace-pre-line  top-0 right-0'>
         <h1> CONTACT US </h1>
         <IoIosPhonePortrait />
 <p className='gap-1'> 000 800 919 0566
      Products & Orders: 24 hours a day, 
              7 days a week
      Company Info & Enquiries: 
      07:30 - 16:30, Monday - Friday</p>
<p>
<BsEnvelopeFill />
24 hours a day
7 days a week
</p>
<p>
<RiMessage2Fill />
We'll reply within
five business days</p>
<p>
STORE LOCATOR
Find Nike retail stores near you</p>
          </div>
          

        </section>
        

    </div>
    
  )
}

export default Contact