import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  
  return (
   <main>
    <div className="w-[1344px] h-[977px] "> 

    <h1 className="flex justify-center font-semibold">Hello Nike APP</h1>
        <p className="flex justify-center">Download the app to access everything Nike. Get Your Great</p>
       <div className="pl-14 pr-14">
        <Image src={"/Image (3).png"} alt="shoes" width={1344} height={700}/>
           </div> 
           <div >
            <h6 className="flex justify-center font-medium">First Look</h6>
            <h1 className="flex justify-center font-extrabold">NIKE AIR MAX PUKSE</h1>
            <p className="flex justify-center leading-relaxed">Extreme comfort. Hyper durable. Max volume. 
              Introducing the Air Max Pulse —
              designed to push you past your limits and 
              help you go to the max.</p>
           </div>
           <div className="flex justify-center space-x-2">
           <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded-lg text-base mt-4 md:mt-0">
               Notify Me
       </button>
       <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded-lg text-base mt-4 md:mt-0">
               Shop Air Max
       </button>
       </div>
    </div>
    {/*second div */}
      <div className="flex justify-between w-[1440px] h-[603.36px]  space-x-4  ">
        <div>
        <h1 className="flex justify-start">Best of Air Max</h1>
        </div>
      <FaRegArrowAltCircleLeft />
    
      <div className="">
      <Image src={"/image7.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Womens Shoes</p>
</div>
       <div className="">
      <Image src={"/image8.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Womens Shoes</p>
      <p className="text-right">$16.5</p>
      </div>
      <div className="">
      <Image src={"/image9.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Men Shoes</p>
      </div>
      <div>
      <Image src={"/image3.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Womens Shoes</p>
      </div> 
      <div>
      <Image src={"/image2.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Womens Shoes</p>
      </div>
      <div>
      <Image src={"/image4.png"} alt="shoes" width={400} height={200}/>
      <h5>Nike Air Max Pules</h5>
      <p className="text-slate-400">Men Shoes</p>
      </div>
      <FaRegArrowAltCircleRight />
      </div>

       {/*third  div */}
<div className="w-[1344px] h-[977px]  ">

 <h1>
Air Max
 </h1>
      <div>

      
      </div>
      <Image src={"/Image (3).png"} alt="shoes" width={1344} height={700}/>
      <div>
        <h6 className="font-serif flex justify-center">STEP INTO WHAT FEELS GOOD</h6>
        <p className=" flex justify-center ">Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className="flex justify-center space-x-2">
<button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded-lg text-base mt-4 md:mt-0">
               Find Your Shoe
       </button>
</div>
</div>
</div>

{/*third  div */}
<div className="w-[1344px] h-[561px] flex justify-between">
<div>
      <Image src={"/Image (8).png"} alt="shoes" width={300} height={300}/>
      <h5>Nike Dri-FIT ADV TechKnit Ultra</h5>
      <p className="text-slate-400">Men's Short-Sleeve</p>
      <p>Running Top</p>
      </div>
      <div>
      <Image src={"/Image (9).png"} alt="shoes" width={300} height={300}/>
      <h5>Nike Dri-FIT Challenger</h5>
      <p className="text-slate-400">Men's 18cm (approx.)</p>
      <p className="text-slate-400">2-in-1 Versatile Shorts</p>
      </div>
      <div>
      <Image src={"/Image (10).png"} alt="shoes" width={300} height={300}/>
      <h5>Nike Dri-FIT ADV Run Division</h5>
      <p className="text-slate-400">Women's Long-Sleeve</p>
      <p className="text-slate-400">Running Top</p>
      </div>
      <div>
      <Image src={"/Image (11).png"} alt="shoes" width={300} height={300}/>
      <h5>Nike Fast</h5>
      <p className="text-slate-400">Women's Mid-Rise 7/8</p>
      <p className="text-slate-400"> Running Leggings with Pockets</p>
      </div>
</div>
{/*four  div */}
<div className="w-[1344px] h-[977px] " >

<Image src={"/Image (12).png"} alt="shoes" width={1344} height={977}/>
<div>
  <h5 className="flex justify-center font-semibold">FLIGHT ESSENTIALS</h5>
  <p className="flex justify-center leading-relaxed" >Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
  <div className="flex justify-center">
  <button className="inline-flex items-center text-white bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded-lg text-base mt-4 md:mt-0">
               Shop
       </button>
       </div>
</div>
</div>
 
 {/*Five  div */}
 <div  className="w-[1344px] h-[592px] ">
  <h1>The Essentials</h1>
  <div className="flex justify-center space-x-2">
<Image src={"/Frame (2).png"} alt="shoes" width={440} height={540}/>
<Image src={"/Frame (3).png"} alt="shoes" width={440} height={540}/>
<Image src={"/Frame (4).png"} alt="shoes" width={440} height={540}/>
  </div>
 </div>
{/*six  div */}
<div className="flex justify-items-cente">
<div className="  container mx-auto grid grid-cols-2 md:grid-cols-4 gap-9">
<div className='text-black'>
            <h1 className='font-extrabold'>Icons</h1>
            <ul>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
        </div>

        <div className='text-black'>
            <h1 className='font-extrabold'>Shoes</h1>
            <ul>
              <li>All Shoes</li>
              <li>Jordan Shoes</li>
              <li>Membership</li>
              <li>Running Shoes</li>
            </ul>
        </div>

        <div className='text-black'>
            <h1 className='font-extrabold'>Clothing</h1>
            <ul>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies Pullover</li>
              <li>Top Shirts</li>
            </ul>
        </div>

        <div className='text-black'>
            <h1 className='font-extrabold'>kids
            </h1>
            <ul>
              <li>Infant Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
              
            </ul>
        </div>    
        </div>
</div>
   </main>

  );
}