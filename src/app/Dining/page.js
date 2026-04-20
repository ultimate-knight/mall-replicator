"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Dining() {
  const [num,setnum]=useState(0)
  const [seg,setseg]=useState(null)

  const slides=[
    {image:"mall-video4.mp4",title:"Dining",desc:"A destination for every palate."},
    {image:"mall-video3.mp4",title:"Entertainment",desc:"Experiences that bring people back."},
    {image:"mall-video1.mp4",title:"Events",desc:"Where moments become global."},
    {image:"malle-video2.mp4",title:"Luxury",desc:"Prestige. Elevated."},
    {image:"mall-video5.mp4",title:"Retail",desc:"520+ world class stores"}
  ]

  useEffect(()=>{
    const interval=setInterval(()=>{
      setnum(prev=>(prev+1)%slides.length)
    },3000)

    return ()=>clearInterval(interval)
  },[slides.length])

  return (
    <div className="flex flex-col relative flex-1 bg-[#0a0a0a]   min-h-screen  overflow-hidden     font-sans">
      {/* <div className="flex flex-row justify-between bg-gradient-to-r from-black/70 via-black/45 to-black/20   z-50  h-full w-full">
        <div className="flex flex-col  h-full w-full gap-1 p-5">
          <p className="text-3xl text-[#c9a26b] font-bold">Mall of America</p>
          <p className="text-white">Interactive sales experience</p>
        </div>
        <div className="flex flex-row gap-5 items-center transition-all duration-700 text-lg w-full p-5">
        <Link href="/" onMouseOver={()=>setseg(1)} onMouseLeave={()=>setseg(0)} className="relative text-[#c9a26b] cursor-pointer hover:text-white">overview  {seg===1 && (
          <>
          <div className="absolute top-8 bg-yellow-600 w-20 h-0.5"></div>
          </>
        )}</Link>
       
        <p onMouseOver={()=>setseg(2)}  onMouseLeave={()=>setseg(0)} className="relative w-full whitespace-nowrap cursor-pointer">
          why moa
          {seg===2 && (
          <>
          <div className="absolute top-8 bg-yellow-600 w-20 h-0.5"></div>
          </>
        )}

        </p>
        <p onMouseOver={()=>setseg(3)} onMouseLeave={()=>setseg(0)} className="cursor-pointer">
          Retail

           {seg===3 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-14 h-0.5"></div>
          </>
        )}

          </p>
        <p onMouseOver={()=>setseg(4)} onMouseLeave={()=>setseg(0)} className="cursor-pointer"> Luxury
           {seg===4 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-14 h-0.5"></div>
          </>
        )}
        </p>
        <p onMouseOver={()=>setseg(5)} onMouseLeave={()=>setseg(0)} className="cursor-pointer">Dining
           {seg===5 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-14 h-0.5"></div>
          </>
        )}
        </p>
        <Link href="" onMouseOver={()=>setseg(6)} onMouseLeave={()=>setseg(0)}  className="cursor-pointer">Entertainment
           {seg===6 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-32 h-0.5"></div>
          </>
        )}
        </Link>
        <p onMouseOver={()=>setseg(7)} onMouseLeave={()=>setseg(0)}  className="cursor-pointer">Events
            {seg===7 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-14 h-0.5"></div>
          </>
        )}
        </p>
        <button className="bg-yellow-700 rounded-lg p-2 w-fit whitespace-nowrap border border-black hover:bg-yellow-400 cursor-pointer">Partner with us</button>
        </div>
      </div> */}
      <Header/>
      <div className="z-50 flex bg-gradient-to-r from-black/70 via-black/45 to-black/20 flex-col gap-5 items-start justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl max-[1025px]:text-lg">Dining & Lifestyle
</p>
<p className="text-8xl max-[1025px]:text-6xl max-[1025px]:w-full text-white font-extrabold w-[40vw]">A Culinary <span className="text-[#c9a26b]">Destination</span> </p>
<p className="text-2xl max-[1025px]:text-lg w-[40vw] text-gray-400">60+ dining experiences that transform dining into a primary reason to visit.</p>


      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/mall-dine1.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 gap-y-7 max-md:grid-cols-2 max-sm:grid-cols-1  w-full mt-30 p-50 max-[1025px]:p-10">
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-7xl max-[1025px]:text-4xl">60+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Dining Concepts</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-7xl max-[1025px]:text-4xl">$38
</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Avg Ticket Size</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-7xl max-[1025px]:text-4xl">85%</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Of Visitors Dine</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-7xl max-[1025px]:text-4xl">18%</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Revenue from F&B</p>
          </div>
        </div>

        <div className="flex flex-col items-start  justify-start gap-7 p-20 max-md:p-5 mt-20">
          <p className="text-gray-500">Categories</p>
          <p className="text-6xl max-[1025px]:text-4xl">Every Palate, <span className="text-[#c9a26b]">Every Occasion</span></p>
          <div className="flex max-md:flex-col max-md:items-start justify-between   w-full items-center mt-20">
            <div className="flex flex-col gap-6 group p-3  hover:border hover:border-[#c9a26b] ">
              <div className="flex justify-between w-[35vw] max-md:w-[90vw]">
                    <div className="flex flex-col gap-1 ">
                      <p className="text-2xl group-hover:text-[#c9a26b]">Fine Dining</p>
                      <p className="text-gray-500">12+ concepts</p>
                    </div>
                    <div className="border h-8 p-1 border-[#c9a26b]">
                      <p>$65 avg</p>
                    </div>
              </div>
              <p className="text-gray-500">Full-service upscale restaurants with curated wine programs.</p>
            </div>
            <div className="flex flex-col gap-6 group p-3  hover:border hover:border-[#c9a26b]">
              <div className="flex justify-between w-[40vw] max-md:w-[90vw]">
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl group-hover:text-[#c9a26b]">Casual Dining</p>
                      <p className="text-gray-500">25+ concepts</p>
                    </div>
                    <div className="border h-8 p-1 border-[#c9a26b]">
                      <p>$32 avg</p>
                    </div>
              </div>
              <p className="text-gray-500">Global cuisines from American classics to Asian fusion.</p>
            </div>
          </div>
          <div className="flex max-md:flex-col max-md:items-start justify-between  w-full items-center">
            <div className="flex flex-col gap-6 group p-3  hover:border hover:border-[#c9a26b]">
              <div className="flex justify-between  w-[35vw] max-md:w-[90vw]">
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl group-hover:text-[#c9a26b]">Fast Casual & QSR</p>
                      <p className="text-gray-500">20+ concepts</p>
                    </div>
                    <div className="border h-8 p-1 whitespace-nowrap border-[#c9a26b]">
                      <p>$18 avg</p>
                    </div>
              </div>
              <p className="text-gray-500">Premium quick-serve for quality and speed.</p>
            </div>
            <div className="flex flex-col gap-6 group p-3  hover:border hover:border-[#c9a26b]">
              <div className="flex justify-between w-[40vw] max-md:w-[90vw]">
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl max-md:w-full group-hover:text-[#c9a26b]">Bars & Lounges</p>
                      <p className="text-gray-500">8+ concepts</p>
                    </div>
                    <div className="border h-8 p-1 whitespace-nowrap border-[#c9a26b]">
                      <p>$28 avg</p>
                    </div>
              </div>
              <p className="text-gray-500">Craft cocktails, wine lounges, and entertainment concepts.</p>
            </div>
          </div>
        </div>
        

<div className="w-full h-[90vh] mt-40 flex flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src="mall-dine2.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">85%</p>
      <p className="">Of Visitors Dine</p>
</div>
</div>

<div className="flex gap-30 max-[1025px]:flex-col max-[1025px]:items-start items-center mt-40 p-20">
        <div className="flex flex-col gap-10 items-start">
         <p className="text-gray-500">F&B Leasing</p>
         <p className="text-6xl max-[1025px]:text-4xl">Feed the <span className="text-[#c9a26b]">42 Million</span></p>
         <p className="text-xl text-gray-500 w-[40vw] max-[1025px]:text-lg max-[1025px]:w-full">Purpose-built for high-volume, high-margin F&B concepts. Dedicated food hall wings, anchor pads, and seasonal pop-up kitchens.</p>
         <Link href="/Contact" className="bg-[#c9a26b] hover:bg-yellow-400 cursor-pointer font-medium text-black uppercase p-3">explore f$b opportunities</Link>
        </div>
        <div className="flex flex-col gap-15 text-gray-500">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>85% of visitors dine during their visit</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>Average check size of $38 across all concepts</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>F&B accounts for 18% of total property revenue</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>Dining drives 22% longer dwell times</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>
Celebrity chef partnerships and pop-up kitchens</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full aspect-square bg-[#c9a26b]"></div>
          <p>
Dedicated food hall wings with 20+ stalls</p>
          </div>
        </div>
</div>


<div className="mt-40 flex flex-col gap-10 items-center p-10 justify-center">
        <p className="text-gray-500">F&B Leasing</p>
        <p className="text-6xl w-[50vw] text-center max-[1025px]:w-full max-[1025px]:text-4xl">Build Your Concept <span className="text-[#c9a26b]">Here</span></p>
        <p className="text-gray-500 max-[1025px]:text-lg w-[30vw] max-md:w-full text-center text-xl">From celebrity-chef destinations to fast-casual flagships — anchor pads, food-hall stalls, and seasonal pop-up kitchens available.

</p>
        <div className="flex flex-row max-md:flex-col gap-4 items-center justify-center">
  <Link href="/Contact" className="bg-[#c9a26b] font-medium w-2xs text-black text-center p-3 uppercase hover:bg-yellow-400 cursor-pointer">inquire about F&B </Link>
   <Link href="/why-moa" className="bg-BLACK font-medium text-white text-center border w-2xs border-gray-400 p-3 uppercase hover:text-yellow-600 cursor-pointer  hover:border-yellow-600">tour the property</Link>
</div>
<p className="text-gray-500">dining@mallofamerica.com</p>
       </div>

<Footer/>
<div className="flex justify-between">
<p className="p-10 text-gray-500">© 2026 Mall of America</p>
<p className=" p-10  text-gray-500">Interactive Sales Experience</p>
</div>
      </div>

         </div>
  );
}
