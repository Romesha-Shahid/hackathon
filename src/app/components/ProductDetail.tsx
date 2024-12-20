 
 import Image from 'next/image'
 import { CiShoppingCart } from "react-icons/ci";
 import Link from 'next/link';

 export default function ProductDetail ()  {
   return (
     <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image  src={"/image9.png"} alt="shoes" width={400} height={200}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        Nike Air Force 1 
        PLT.AF.ORM
        </h1>
        <p className="leading-relaxed">
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-slate-500 rounded-full space-x-2">
          <CiShoppingCart className='text-xl' /> Add to Card
          <Link href={"<Product/>"}></Link>
          </button>
         
        </div>
      </div>
    </div>
  </div>
</section>

     </div>
   )
 }
 
