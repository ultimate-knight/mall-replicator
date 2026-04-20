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
        <p className="text-[#c9a26b] text-xl max-[1025px]:text-lg">Events & Activations
</p>
<p className="text-8xl text-white font-extrabold max-[1025px]:text-6xl max-md:w-full">A Global <span className="text-[#c9a26b]">Stage</span></p>
<p className="text-2xl w-[40vw] text-gray-400 max-[1025px]:text-lg max-md:w-full">400+ events annually transform Mall of America into a live platform for culture, commerce, and connection.</p>


      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/mall-event1.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 gap-y-7 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-30 p-50 max-[1025px]:p-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">400+</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Annual Events</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">5,000+
</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Max Venue Capacity</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">3B+
</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Media Impressions
</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">200+
</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Brand Activations</p>
          </div>
        </div>


       <div className="flex flex-col items-start gap-5 mt-40 justify-start p-10">
      <p className="text-gray-500">Venue Portfolio</p>
      <p className="text-6xl max-[1025px]:text-4xl">Spaces Built for <span className="text-[#c9a26b]">Impact</span></p>
      <p className="text-gray-500 text-xl">Five distinct venue types for every scale of ambition.</p>
      <div className="grid grid-cols-3 gap-y-20 max-[1025px]:grid-cols-2 max-md:grid-cols-1 items-center mt-20 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Rotunda Stage</p>
            <p className="text-gray-500 text-sm">Central Atrium</p>
            </div>
            <p>5,000+</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">Iconic central rotunda for concerts, celebrity appearances, and cultural events.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">360° visibility</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Professional sound & lighting</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">VIP viewing areas</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Live broadcast capability</p>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Activation Zones</p>
            <p className="text-gray-500 text-sm">Multiple Locations</p>
            </div>
            <p>Varies</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">Experiential marketing zones for pop-ups, sampling, and immersive experiences.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">High-traffic locations</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Power & data hookups
</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Custom build-out</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Digital signage</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Event Center</p>
            <p className="text-gray-500 text-sm">40,000 sq ft</p>
            </div>
            <p>2,500</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">Flexible multipurpose space for galas, conferences, and product launches.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Configurable layouts</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Full A/V infrastructure</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Catering kitchen</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Green rooms</p>
            </div>
          </div>
          
        </div>
      {/* </div> */}

      {/* <div className="flex flex-row justify-between items-center  w-full"> */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Performing Arts Center</p>
            <p className="text-gray-500 text-sm">22,000 sq ft</p>
            </div>
            <p>1,200</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">State-of-the-art venue with concert-grade acoustics and full production.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Concert-grade acoustics</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Full fly system</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Orchestra pit</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Premium boxes</p>
            </div>
          </div>
          
        </div>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Exposition Hall</p>
            <p className="text-gray-500 text-sm">55,000 sq ft</p>
            </div>
            <p>3,000+</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">Convention-grade exhibition space for trade shows and large-scale experiences.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Column-free floor</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Loading docks
</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Exhibitor grid</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Registration lobby</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col gap-6 w-full display-none">
          <div className="flex justify-between w-[80%]">
            <div className="flex flex-col gap-1">
            <p className="font-bold">Brand Activation Zones</p>
            <p className="text-gray-500 text-sm">40,000 sq ft</p>
            </div>
            <p>400+</p>
          </div>
          <p className="w-[28vw] text-gray-500 max-md:w-full">Strategic high-visibility zones across the property designed for experiential marketing, pop-ups, and immersive brand campaigns.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">High-traffic placement</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Custom installations</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Data & power access</p>
            </div>
             <div className="flex gap-2 items-center">
              <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
              <p className="text-gray-500 text-sm">Digital integration</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full mt-20">
      <Link href="/Contact" className="uppercase hover:bg-yellow-400 font-medium text-center p-4 w-48 cursor-pointer font-medium bg-[#c9a26b]">book a venue</Link>
      </div>
</div>

        

<div className="w-full h-[90vh] mt-40 flex flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src="mall-event2.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">3B+</p>
      <p className="">
Annual Media Impressions</p>
</div>
</div>

<div className="flex flex-row gap-20 max-[1025px]:flex-col   max-[1025px]:gap-1 items-start justify-between w-full p-10 mt-40">
      <div className="flex flex-col gap-6">
        <p className="text-gray-500">Track Record</p>
        <p className="text-6xl max-[1025px]:text-4xl w-[40vw] max-[1025px]:w-full">Events That Make <span className="text-[#c9a26b]">Headlines</span></p>
        <p className="w-[46vw] max-[1025px]:text-lg max-[1025px]:w-full text-gray-500 text-xl">From live network broadcasts to major brand launches. Every event benefits from built-in foot traffic and national media attention.</p>
      </div>
      <div className="flex max-[1025px]:flex max-[1025px]:gap-40 gap-40 max-[1025px]:mt-30">
      <div className="flex flex-col gap-12 text-gray-500 text-md">
        <p>The Today Show Live</p>
        <p>Target Launch</p>
        <p>Comic Con Pop-Up</p>
        <p>MLB All-Star Fan Fest</p>
        <p>Red Bull Activation</p>
        <p>Disney+ Premiere</p>
      </div>
       <div className="flex flex-col gap-12 text-gray-500 text-md">
        <p>NFL Draft Watch Party</p>
        <p>Minnesota Fashion Week</p>
        <p>New Year's Eve</p>
        <p>Celebrity Chef Series</p>
        <p>Samsung Galaxy Launch</p>
        <p>Victoria's Secret</p>
      </div>
      </div>
</div>

<div className="flex flex-col items-center gap-8 p-10 justify-center mt-40 w-full">
    <p className="text-gray-500">Sponsorship</p>
    <p className="text-6xl max-[1025px]:text-4xl">Become a <span className="text-[#c9a26b]">Partner</span></p>
    <p className="w-[40vw] text-center text-xl text-gray-500 max-md:w-full">Put your brand in front of 42 million visitors through naming rights, activations, and co-branded programming.</p>
    <div className="flex max-md:flex-col max-md:gap-10 max-md:p-10 justify-between w-full p-30">
      <div className="flex flex-col gap-6 ">
        <p className="text-2xl w-[15vw] max-md:w-full">Custom
Presenting Partner</p>
<p className="text-md w-[23vw] text-gray-500 max-md:w-full">Title sponsorship, premium brand integration, year-round visibility.</p>
<div className="flex flex-col gap-2">
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Naming rights</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">360° integration</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Year-round</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Dedicated team</p>
</div>
</div>
      </div>
      <div className="flex flex-col gap-6 ">
        <p className="text-2xl w-[15vw] max-md:w-full">From $250K
Experience Partner</p>
<p className="text-md w-[23vw] text-gray-500 max-md:w-full">Branded zones, digital signage, co-marketing, and exclusive access.</p>
<div className="flex flex-col gap-2">
<div className="flex gap-2 items-center">
  
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Activation zones</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Digital signage</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Co-marketing
</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">VIP access</p>
</div>
</div>

      </div>
      <div className="flex flex-col gap-6 ">
        <p className="text-2xl w-[15vw] max-md:w-full">From $50K
Community Partner</p>
<p className="text-md w-[23vw] text-gray-500 max-md:w-full">Event sponsorship, sampling, audience engagement, social amplification.</p>
<div className="flex flex-col gap-2">
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Event branding</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Sampling rights</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Social</p>
</div>
<div className="flex gap-2 items-center">
  <div className="bg-[#c9a26b] rounded-full aspect-square w-1.5 h-1.5"></div>
  <p className="text-sm text-gray-500">Analytics</p>
</div>
</div>
      </div>
    </div>
    <Link href="/Contact" className="uppercase text-center p-4 w-48 bg-[#c9a26b] hover:bg-yellow-400 font-medium">discuss sponsorship</Link>
</div>


<div className="mt-60 flex flex-col gap-10 items-center p-10 justify-center">
        <p className="text-gray-500">Book Your Event</p>
        <p className="text-6xl max-[1025px]:text-4xl max-md:w-full w-[50vw] text-center">Your Audience Is <span className="text-[#c9a26b]">Already Here</span></p>
        <p className="text-gray-500 max-[1025px]:text-lg w-[30vw] max-md:w-full text-center text-xl">Concert, launch, convention, or activation — bring it to a venue with built-in 42M-visitor foot traffic and national media reach.

</p>
        <div className="flex flex-row gap-4 max-md:flex-col items-center justify-center">
  <Link href="/Contact" className="bg-[#c9a26b] text-center font-medium w-2xs text-black p-3 uppercase hover:bg-yellow-400 cursor-pointer">book a venue</Link>
   <Link href="/Contact" className="bg-BLACK font-medium text-center text-white border w-2xs border-gray-400 p-3 uppercase hover:text-yellow-600 cursor-pointer  hover:border-yellow-600">sponsorship tiers</Link>
</div>
<p className="text-gray-500">events@mallofamerica.com · 7-day response</p>
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
