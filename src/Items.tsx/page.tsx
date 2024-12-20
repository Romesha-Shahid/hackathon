import Image from "next/image"

interface Items{
    title:string,
    price:string,
    text:string,
    colour:number
    id:number
    rating?:string,
    old_price?:number
    img_url:string

}

let items: Items[] = [
    {title:"Nike Air Max",
     text:"heiio",
     colour:1,
     id: 1,
     price:"$21",
     img_url:"/image1.png"

    },
    {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$26",
        img_url:"/image2.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$34",
        img_url:"/image3.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$37",
        img_url:"/image4.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$19",
        img_url:"/image5.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$33",
        img_url:"/image6.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$15",
        img_url:"/image7.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$29",
        img_url:"/image8.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$43",
        img_url:"/image9.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"34",
        img_url:"/image10.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$31",
        img_url:"/image11.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$43",
        img_url:"/image12.png"
   
       },
       {title:"Nike Dir Fit Division",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$38",
        img_url:"/Frame (5).png"
   
       },
       {title:"Nike Jordan",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$35",
        img_url:"/Image (11).png"
   
       },
       {title:"Nike Air SocK",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$36",
        img_url:"/everyday.png"
   
       },
       {title:"Nike Dir fit",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$36",
        img_url:"/Image (9).png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$37",
        img_url:"/motive1.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$39",
        img_url:"/NIKE+.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:1,
        id: 1,
        price:"$28",
        img_url:"/NIKE+STAR.png"
   
       },
       {title:"srt",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$32",
        img_url:"/WMNS+NIKE.png"
   
       },
       {title:"Nike Air Jordan",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$30",
        img_url:"/image1.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$31",
        img_url:"/image6.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$32",
        img_url:"/image8.png"
   
       },
       {title:"Nike Air Max",
        text:"heiio",
        colour:2,
        id: 1,
        price:"$33",
        img_url:"/image2.png"
   
       },

] 
export default function Items (){
    return(
<div>
<h1 className="text-4xl md:text-3xl font-bold text-center">Items</h1>
<div >
{
  items.map((data)=>{
       return(

        <div className="w-full has[700px]"> 
            <Image  src={data.img_url} alt= {data.title} width={100} height={100}></Image>
            <div>
            <p>{data.title}</p>
            <p className=" text-slate-200">{data.text}</p>
            <p className=" text-slate-200">{data.colour}</p>
            <p>{data.price}</p>
            </div>
        </div>
       )
  })
}
</div>

</div>
    )
}