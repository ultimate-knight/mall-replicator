"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Entertainment() {
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
      <Header/>

      <div className="z-50 flex bg-gradient-to-r from-black/70 via-black/45 to-black/20 flex-col gap-5 items-start justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl max-[1025px]:text-lg">Entertainment & Attractions
</p>
<p className="text-8xl max-[1025px]:text-6xl text-white font-extrabold">Beyond <span className="text-[#c9a26b]">Retail</span> </p>
<p className="text-2xl max-[1025px]:text-lg w-[40vw] text-gray-400 max-md:w-full">World-class attractions that generate footfall no standalone retailer could dream of.</p>


      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/mall-entertain1.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 gap-y-7 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-30 p-50 max-[1025px]:p-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">7</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Major Attractions</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">7 Acres
</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Indoor Theme Park</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">30+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Rides & Experiences</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">12M+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Entertainment Visits</p>
          </div>
        </div>

       

        <div className="flex flex-col gap-7 p-10 max-md:p-5 w-full">
  <p className="text-gray-500">Anchor Attractions</p>
  <p className="text-6xl max-[1025px]:text-4xl">
    Experiences That{" "}
    <span className="text-[#c9a26b]">Drive Traffic</span>
  </p>

<div className="grid grid-cols-3 max-[1025px]:grid-cols-2 max-md:place-items-center max-md:grid-cols-1 w-full">
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center  mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">7 Acres</p>
    </div>

    <p className="text-gray-500">8M+ visits/year</p>
  </div>
  <p className="text-xl">Nickelodeon Universe</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">Largest indoor theme park in the Western Hemisphere. 7 acres of rides and entertainment.

</p>
</div>
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">10,000+ Creatures
</p>
    </div>

    <p className="text-gray-500">1.2M visits/year</p>
  </div>
  <p className="text-xl">SEA LIFE Aquarium</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">300-foot ocean tunnel, touch pools, and 10,000+ sea creatures.

</p>
</div>
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">Immersive Flight</p>
    </div>

    <p className="text-gray-500">800K visits/year</p>
  </div>
  <p className="text-xl">FlyOver America</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">Immersive flight simulation across America's most iconic landscapes.

</p>
</div>


       {/* </div> */}
       {/* <div className="flex justify-between w-full"> */}
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">60,000 Sq Ft</p>
    </div>

    <p className="text-gray-500">600K visits/year</p>
  </div>
  <p className="text-xl">Crayola Experience</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">60,000 sq ft creative playground with 25+ hands-on attractions.

</p>
</div>
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">Luxury Cinema
</p>
    </div>

    <p className="text-gray-500">500K visits/year</p>
  </div>
  <p className="text-xl">CMX Cinemas</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">Luxury dine-in cinema with reclining leather seats and premium bar.

</p>
</div>
<div className="flex flex-col gap-6 w-full">
  <div className="flex justify-between items-center mt-20 w-[70%] max-[1025px]:w-[80%]">
    <div className="p-1 border border-[#c9a26b] text-center">
      <p className="text-gray-500">18 Holes</p>
    </div>

    <p className="text-gray-500">400K visits/year</p>
  </div>
  <p className="text-xl">Moose Mountain Golf</p>
  <p className="w-[25vw] text-gray-500 max-md:w-full">18-hole indoor miniature golf with waterfalls and animatronics.

</p>
</div>


       </div>

       
       </div>

       
<div className="w-full h-[90vh] mt-40 flex flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src="mall-entertain2.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-medium text-white">2.4×</p>
      <p className="">
Higher spend from entertainment visitors</p>
</div>
</div>

<div className="flex flex-col items-center gap-6 p-10 justify-center w-full mt-30">
            <p className="text-gray-500">The Entertainment Effect</p>
            <p className="text-6xl max-[1025px]:text-4xl text-center">Attractions Are the <span className="text-[#c9a26b]">Engine</span></p>
            <p className="text-xl max-[1025px]:text-lg w-[50vw] max-md:w-full text-center text-gray-500">Visitors who engage with at least one attraction spend 2.4x more on retail and dining. Entertainment isn't a complement — it's the catalyst.</p>
            <div className="flex max-md:flex-col gap-8  justify-between items-center  w-full mt-20">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <p className="text-2xl">67%</p>
                <p className="text-gray-500 w-[40%] text-center">first-time visitors come for attractions</p>
              </div>
               <div className="flex flex-col gap-3 items-center justify-center w-full">
                <p className="text-2xl">3.8hr</p>
                <p className="text-gray-500 text-center">avg dwell time with entertainment
</p>
              </div>
               <div className="flex flex-col gap-3 items-center justify-center w-full">
                <p className="text-2xl">89%</p>
                <p className="text-gray-500 text-center">visitor satisfaction score</p>
              </div>
            </div>
</div>


<div className="mt-60 flex flex-col gap-10 items-center p-10 justify-center">
        <p className="text-gray-500">sponsorship & Activations</p>
        <p className="text-6xl w-[50vw] max-md:w-full text-center max-[1025px]:text-4xl">Power the Next   <span className="text-[#c9a26b]">Experience</span></p>
        <p className="text-gray-500 max-md:w-full w-[30vw] text-center max-[1025px]:text-lg  text-xl">Naming rights, branded zones, and co-developed attractions. Activate inside the engine that drives 42 million annual visits.

</p>
        <div className="flex flex-row max-md:flex-col gap-4 items-center justify-center">
  <Link href="/Contact" className="bg-[#c9a26b] font-medium w-2xs text-black text-center p-3 uppercase hover:bg-yellow-400 cursor-pointer">discuss sponsorship </Link>
   <Link href="/Events" className="bg-BLACK font-medium text-white border w-2xs text-center border-gray-400 p-3 uppercase hover:text-yellow-600 cursor-pointer  hover:border-yellow-600">see event venues</Link>
</div>
<p className="text-gray-500">partnerships@mallofamerica.com</p>
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
