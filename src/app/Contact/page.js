"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Contact() {
  const [num,setnum]=useState(0)
  const [seg,setseg]=useState(null)
  const [selector,setselector]=useState(null)

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
     
      <Header/>
      <div className="z-50 flex bg-gradient-to-r from-black/70 via-black/45 to-black/20 flex-col gap-5 items-center justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl max-[1025px]:text-lg">Let's Build Together
</p>
<p className="text-7xl text-white font-extrabold w-[50vw] max-[1025px]:text-5xl text-center max-md:w-full">Partner With  <span className="text-[#c9a26b]">Mall of America</span> </p>
<p className="text-2xl w-[50vw] text-gray-400 max-[1025px]:text-lg text-center max-md:w-full">Whether you're looking to lease space, sponsor experiences, or book venues — the opportunity starts here.</p>


      </div>
      <div className="flex justify-between max-md:flex-col gap-8 p-10">
        <div className="flex flex-col gap-5 items-start justify-start">
            <p className="text-2xl">Retail Leasing</p>
            <p className="w-[26vw] text-gray-500 max-md:w-full">Flagship stores, inline retail, pop-ups, and kiosk opportunities across 5.6M sq ft.</p>
            <button className="bg-[#c9a26b] rounded-lg p-3 w-[90%] font-medium text-lg uppercase">explore leasing</button>
            <div className="flex items-center justify-center w-[90%]">
            <p className="text-gray-500 text-sm">leasing@mallofamerica.com</p>
            </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start">
            <p className="text-2xl">Brand Sponsorship</p>
            <p className="w-[26vw] text-gray-500 max-md:w-full">Title partnerships, experiential activations, and co-branded programming reaching 42M+ visitors.</p>
            <button className="bg-[#c9a26b] rounded-lg p-3 w-[90%] font-medium text-lg uppercase">explore sponsorship</button>
            <div className="flex items-center justify-center w-[90%]">
            <p className="text-gray-500 text-sm">partnerships@mallofamerica.com</p>
            </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start">
            <p className="text-2xl">Event Bookings</p>
            <p className="w-[26vw] text-gray-500 max-md:w-full">Concerts, product launches, corporate events across world-class venues.</p>
            <button className="bg-[#c9a26b] rounded-lg p-3 w-[90%] font-medium text-lg uppercase">explore events</button>
            <div className="flex items-center justify-center w-[90%]">
            <p className="text-gray-500 text-sm">events@mallofamerica.com</p>
            </div>
        </div>
      </div>

      <div className="flex justify-between gap-8 max-md:flex-col p-10 mt-70">
    <div className="flex flex-col items-start gap-10 justify-start w-full">
        <p className="text-gray-500">General Inquiries</p>
        <p className="text-5xl max-[1025px]:text-4xl">Get in <span className="text-[#c9a26b]">Touch</span></p>
        <div className="flex flex-col gap-2 text-gray-500">
            <p className="uppercase">Address</p>
            <p className="text-sm w-[12vw]">60 East Broadway
Bloomington, MN 55425</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
            <p className="uppercase">Phone</p>
            <p className="text-sm w-[12vw]">(952) 883-8800</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
            <p className="uppercase">Commercial Team</p>
            <p className="text-sm w-[12vw]">commercial@mallofamerica.com</p>
        </div>
    </div>
    <div className="flex flex-col items-start gap-10 justify-start w-full">
        <p className="text-gray-500">Quick Connect</p>
        <p className="text-5xl max-[1025px]:text-4xl">Send a <span className="text-[#c9a26b]">Message</span></p>
        <div className="flex gap-5 w-full">
            <input placeholder="Full Name"  className="p-4 rounded-lg  border border-gray-500 w-[50%]"/>
            <input placeholder="Email Address"  className="p-4 rounded-lg  border border-gray-500 w-[50%]"/>
        </div>
        <input placeholder="Company/Brand"  className="p-4 rounded-lg  border border-gray-500 w-full"/>
        <select value={selector}    onChange={(e) => setselector(e.target.value)} className="p-4 rounded-lg  border border-gray-500 text-gray-500 w-full">
            <option value="">Select your interest</option>
            <option value="Retail leasing">Retail leasing</option>
            <option value="Brand sponsorship">Brand sponsorship</option>
            <option value="Event Bookings">Event Bookings</option>
            <option value="Other">Other</option>
        </select>
        <textarea placeholder="Tell us about your vision" className="w-full rounded-lg border border-gray-500 h-auto p-10"></textarea>
        <button className="uppercase p-4 w-full bg-[#c9a26b] text-white text-center font-medium">submit inquiry</button>
    </div>
  </div>
   <Footer/>
<div className="flex justify-between">
<p className="p-10 text-gray-500">© 2026 Mall of America</p>
<p className=" p-10  text-gray-500">Interactive Sales Experience</p>
</div>
      </div>

        //  </div>
  );
}
