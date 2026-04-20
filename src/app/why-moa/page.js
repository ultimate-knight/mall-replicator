"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Home() {
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
    <div className="flex flex-col relative flex-1 bg-[#0a0a0a]    min-h-screen  overflow-hidden     font-sans">
      <Header/>
      <div className="z-50 flex  flex-col gap-5 bg-gradient-to-r from-black/70 via-black/45 to-black/20 items-start justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl">THE OPPORTUNITY
</p>
<p className="text-8xl max-[1025px]:text-6xl max-[1025px]:w-full text-white font-extrabold w-[40vw]">Why Mall of  <span className="text-[#c9a26b]">America</span></p>
<p className="text-2xl text-gray-400 max-md:w-full w-[40vw]">A commercial platform reaching 42 million visitors annually across the heart of America.</p>

      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/legerd.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 max-md:grid-cols-2 gap-y-10 max-sm:grid-cols-1 w-full mt-30 p-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">42M+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Annual Visitors</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl text-gra max-[1025px]:text-4xl">5.6M
</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Stores & Attractions</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">5.6M</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Square Feet</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">$2B+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Economic Impact</p>
          </div>
        </div>
        <div className="flex gap-96 max-[1025px]:flex-col max-[1025px]:items-start items-center p-10 mt-60" >
                  <div className="flex flex-col max-[1025px]:w-full max-[1025px]:items-start max-[1025px]:justify-start  gap-6 items-center justify-center">
          <p style={{ wordSpacing: "5px" }} className="text-xl w-[36vw] max-[1025px]:w-full  word-spacing text-center max-[1025px]:text-left text-gray-500">Strategic Location</p>
    <p className=" w-[40vw] max-[1025px]:w-full text-center max-[1025px]:text-left text-white text-6xl max-[1025px]:text-4xl">The Crossroads of <span className="text-[#c9a26b]">America</span></p>
    <p className="w-[30vw] max-[1025px]:w-full text-gray-500">Located in Bloomington, Minnesota, Mall of America sits at the intersection of two major interstates and is directly connected to Minneapolis–Saint Paul International Airport via light rail. Within a 150-mile radius, over 8 million people can reach MOA in under 3 hours.</p>
    <p className="w-[30vw] text-gray-500 max-[1025px]:w-full">As a top-3 tourist destination, MOA draws visitors from all 50 states and over 100 countries annually.</p>
    <div className="flex flex-col gap-6 justify-between items-center max-[1025px]:items-start w-full">
    <div className="flex max-md:flex-col max-md:gap-4 gap-13   mt-20">
      <div className="flex gap-3 text-gray-500  text-sm">
        <img src="/flight.png" className="text-white w-5 h-auto"/>
        <p>Direct light rail to MSP Airport</p>
      </div>
       <div className="flex gap-3 text-gray-500 text-sm">
        <img src="/intersection.png" className="text-white w-5 h-auto"/>
        <p>
I-494 & I-77 intersection</p>
      </div>
      
    </div>
     <div className="flex max-md:flex-col max-md:mt-0   gap-5 mt-5">
      <div className="flex gap-3 text-gray-500 text-sm ">
        <img src="/hotel.png" className="text-white w-5 h-auto"/>
        <p >7 connected hotels, 3,000+ rooms</p>
      </div>
       <div className="flex gap-3 text-gray-500 text-sm ">
        <img src="/earth.png" className="text-white w-5 h-auto"/>
        <p>
Visitors from 100+ countries</p>
      </div>
      </div>
    </div>
    <div className="flex gap-3 items-center"></div>
        </div>
        <div className="flex flex-col gap-5 max-[1025px]:justify-center max-[1025px]:w-full justify-start ">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-white">3.9M</p>
            <p className="text-gray-500">Metro Area</p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-white">8M+</p>
            <p className="text-gray-500">Drive Market</p>
          </div>
         <div className="flex flex-col gap-2 text-center">
            <p className="text-white">42M+</p>
            <p className="text-gray-500">Annual Visitors</p>
          </div>
         <div className="flex flex-col gap-2 text-center justify-center items-center">
            <p className="bg-[#c9a26b] rounded-full aspect-square w-3 h-auto"></p>
            <p className="text-gray-500">MOA</p>
          </div>
        </div>
        </div>

        <div className="mt-40 flex gap-80 max-[1025px]:flex-col max-[1025px]:w-full p-20 max-[1025px]:p-10">
          <div className="flex flex-col gap-8 ">
            <p>Visitor demographics</p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p> Average Household Income</p>
               <div className="w-96 max-[1025px]:w-[72vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>$92,000</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>Ages 25-54</p>
               <div className="w-80 max-[1025px]:w-[62vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>62%</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>Out-of-State Visitors</p>
               <div className="w-44 max-[1025px]:w-[42vw]  h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>40%</p>
            </div>
           <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>International Visitors</p>
               <div className="w-14 max-[1025px]:w-[14vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>8%</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>Repeat Visitor Rate</p>
               <div className="w-96 max-[1025px]:w-[72vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>72%</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>Average Dwell Time</p>
               <div className="w-72 max-[1025px]:w-[62vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>3.1 Hours</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
               <p>Social Media Shares / Year</p>
               <div className="w-96 max-[1025px]:w-[72vw] h-0.5 bg-[#c9a26b]"></div>
                </div>
              <p>2.4M</p>
            </div>
            
            
          </div>
          <div className="flex flex-col gap-9">
            <p>Audience Profile</p>
            <p className="text-5xl max-[1025px]:text-4xl">Know Your <span className="text-[#c9a26b]">Customer</span></p>
            <p className="w-[40vw] text-xl max-[1025px]:text-lg max-[1025px]:w-full text-gray-500">Mall of America attracts a uniquely valuable consumer profile: high household income, diverse age demographics, and extraordinary dwell times. 40% of visitors travel from outside Minnesota.</p>
            <div className="flex flex-col gap-2">
              <p className="text-xl">Tourism Engine</p>
              <p className="text-gray-500">Top-3 U.S. tourist destination. Featured in global travel guides.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">Economic Anchor</p>
              <p className="text-gray-500">$2B+ annual economic impact, 14,000+ jobs.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">Tax-Free Shopping</p>
              <p className="text-gray-500">Minnesota has no sales tax on clothing.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[90vh] mt-40 flex flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src="legerd.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">42M+</p>
      <p className="">
Annual Visitors</p>
</div>
</div>
<div className="flex flex-col gap-10 p-10 items-center mt-40 justify-center w-full text-center">
  <p className="text-gray-500">The Opportunity</p>
  <p className="text-6xl w-[40vw] max-md:w-full max-[1025px]:text-4xl">The Numbers Are <span className="text-[#c9a26b]">Yours </span></p>
<p className="w-[30vw] text-center max-md:w-full text-xl text-gray-500 max-[1025px]:text-lg">42M visitors, $2B economic impact, and a captive audience that converts. Pick a path — leasing, sponsorship, or events — and let's talk.</p>
<div className="flex flex-row max-md:flex-col gap-4 items-center justify-center">
  <Link href="/Retail" className="bg-[#c9a26b] font-medium w-2xs text-black p-3 cursor-pointer hover:bg-yellow-400 ">EXPLORE RETAIL</Link>
   <Link href="/Contact" className="bg-BLACK font-medium text-white border w-2xs border-gray-400 p-3 hover:text-yellow-600  hover:border-yellow-600">START THE CONVERSATION</Link>
</div>
<p className="text-gray-500">commercial@mallofamerica.com</p>
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
