import Link from "next/link";
import { SiNike } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SheetSide } from "@/components/sheet";

export default function Navbar() {
  
  return (
     <header>
      <div  className=" w-full h-[60px] bg-orange-100 flex justify-between items-center">
       <SheetSide/>
      <SiNike className="text-3xl animate-bounce" /> 
      <ul className="hidden md:block">
       <li className="space-x-5">
        <Link href={"/New & Featured"}>New & Featured</Link>
        <Link href={"/Men"}>Men</Link>
        <Link href={"/Women"}>Women</Link> 
        <Link href={"/Kid"}>Kid</Link>
        <Link href={"/Sale"}>Sale</Link>
        <Link href={"/SNKRS"}>SNKRS</Link>
        
       </li>
      </ul>
     <div className="hidden md:block">
     <div className="flex justify-start items-center  w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0]   ">
      <CiSearch className="text-xl ml-2" />
        <input  placeholder="Search items" className="w-full  h-full ml-2  outline-none rounded-[62px] bg-[#f0f0f0]"></input>
       
      </div>
     </div>
      <div className="flex items-center space-x-2 ">
      <CiSearch className="text-xl ml-2 md:hidden"/>
      <FaHeart />
      <FaShoppingBag />
      </div>
      </div>
     </header>
  );
}