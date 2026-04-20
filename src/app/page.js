"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Home() {
  const [num,setnum]=useState(0)
  const [seg,setseg]=useState(null)
  const [pause,setpause]=useState(false)

  const slides=[
    {image:"mall-dine1.mp4",title:"Dining",desc:"A destination for every palate.",link: "/Dining"},
    {image:"mall-entertain1.mp4",title:"Entertainment",desc:"Experiences that bring people back.",link: "/Entertainment"},
    {image:"mall-event1.mp4",title:"Events",desc:"Where moments become global.",link: "/Events"},
    {image:"mal-luxury1.mp4",title:"Luxury",desc:"Prestige. Elevated.", link: "/Luxury"},
    {image:"mall-video5.mp4",title:"Retail",desc:"520+ world class stores", link: "/Retail"}
  ]

  useEffect(()=>{
    if (pause) return;
    const interval=setInterval(()=>{
      setnum(prev=>(prev+1)%slides.length)
    },3000)

    return ()=>clearInterval(interval)
  },[pause,slides.length])

  return (
    <div className="flex flex-col relative flex-1 bg-[#0a0a0a]    min-h-screen  overflow-hidden     font-sans">
      <Header/>
      <div className="z-50 flex  flex-col gap-5 bg-gradient-to-r from-black/70 via-black/45 to-black/20 items-center justify-center h-[90vh] w-full  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl">North America’s retail capital
</p>
<p className="text-8xl text-[#c9a26b] max-[1025px]:text-6xl  text-center font-extrabold">Mall of <span className="text-white">America</span></p>
<p className="text-2xl text-gray-400 max-[1025px]:text-xl">The nation's largest retail & entertainment destination.
5.6 million square feet of opportunity.</p>
<div className="flex flex-row gap-5 z-50 transition-all duration-500 max-md:flex-col">
  <Link href="/Contact" className="bg-[#c9a26b] text-xl max-md:w-full max-[1025px]:text-base text-white rounded-lg w-72 text-center  p-4 max-[1025px]:p-2 hover:bg-yellow-400 cursor-pointer">Partner with us</Link>
<Link href="/why-moa" className="text-xl border border-white p-4 w-72 cursor-pointer text-center max-[1025px]:text-base max-[1025px]:p-2  hover:text-yellow-600  hover:border-yellow-600">Explore the opportunity</Link>
</div>

      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/gerfug.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 gap-y-8 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-30 p-10">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">42M+</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Annual Visitors</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl text-gra max-[1025px]:text-4xl">520+
</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Stores & Attractions</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">5.6M</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Square Feet</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl items-center">$2B+</p>
            <p className="text-xl text-gray-600 max-[1025px]:text-base">Economic Impact</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center mt-60">
          <p style={{ wordSpacing: "5px" }} className="text-6xl max-[1025px]:text-4xl w-[70vw]  word-spacing text-center">More than a mall.
A commercial <span className="text-[#c9a26b]">platform</span><br></br>
    for the world's best brands.</p>
    <p className="text-xl w-[50vw] max-[1025px]:text-lg text-center text-gray-600">42 million visitors walk through these doors every year. The question isn't whether you should be here — it's how soon you can start.</p>
        </div>
        

<div className="flex flex-col gap-6 mt-60">
  <p className="text-center text-5xl">Discover</p>

  <div className="overflow-hidden cursor-pointer" onMouseEnter={() => setpause(true)}
  onMouseLeave={() => setpause(false)}>
    <div
      className="flex transition-transform duration-700"
      style={{ transform: `translateX(-${num * 22}%)` }}
    >
      {slides.map((item, index) => (
        <Link
        href={item.link} 
          key={index}
          className="min-w-[37%] p-3"
        >
          <div  className="h-[350px] rounded-xl overflow-hidden relative border border-white/20">
            
            
            <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src={item.image} type="video/mp4"></source>
      </video>

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>

          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
<div className="w-full h-[90vh] mt-40 flex bg-black/50 flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full bg-black/50 object-cover">
        <source src="legerd.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">5.6M</p>
      <p className="">
Square Feet of Opportunity</p>
</div>
</div>

<div className="flex max-md:flex-col gap-20 p-10 items-center mt-40 bg-black/50 text-white">
  <img src="/mall-luxury.jpeg" className="w-[55vw] max-md:w-full h-auto max-md:order-2 bg-black/50"/>
  <div className="flex flex-col max-md:w-full gap-7 max-md:order-1">
    <p className="text-gray-500">Luxury Collection</p>
    <p className="text-5xl w-[30vw] max-md:w-full max-[1025px]:text-4xl">Where <span className="text-[#c9a26b]">Prestige</span><br></br>
Meets Performance</p>
<p className="w-[30vw] text-gray-500 max-md:w-full text-xl max-[1025px]:text-lg">A dedicated luxury wing with marble finishes, VIP shopping suites, and 38% year-over-year sales growth among the world's most prestigious brands.</p>
<Link href="/Luxury" className="flex gap-2 items-center cursor-pointer">
    <p className="text-gray-500">Discover</p>
    <div className="w-16 transition-all duration-500 h-0.5 bg-gray-600 hover:bg-yellow-500 hover:w-20"></div>
  </Link>

  

  
  </div>


  

  


  
  
</div>


<div className="flex max-md:flex-col gap-20 items-center max-md:items-start p-10 mt-40 text-white">
  <div className="flex flex-col gap-7">
    <p className="text-gray-500 max-md:w-full">Dining & Lifestyle</p>
    <p className="text-5xl max-md:w-full w-[30vw] max-[1025px]:text-4xl">A Culinary{" "}
<span className="text-[#c9a26b]">Destination</span></p>
<p className="w-[30vw] text-gray-500 max-md:w-full text-xl max-[1025px]:text-lg">60+ dining concepts from celebrity chef restaurants to curated food halls. 85% of visitors dine during their visit. Food isn't an afterthought — it's a primary reason to come.</p>
<Link href="/Dining" className="flex gap-2 items-center cursor-pointer">
    <p className="text-gray-500">Discover</p>
    <div className="w-16 transition-all duration-500 h-0.5 bg-gray-600 hover:bg-yellow-500 hover:w-20"></div>
  </Link>

  

  
  
  </div>
  <img src="/mall-dinining.jpeg" className="w-[55vw] max-md:w-full h-auto bg-black/50 "/>


  

  


  
  
</div>
<div className="flex flex-col gap-10 items-center p-10 mt-40 justify-center w-full text-center">
  <p className="text-6xl max-[1025px]:text-4xl max-md:w-full w-[40vw]">Ready to be part of
something <span className="text-[#c9a26b]">bigger?</span></p>
<p className="w-[30vw] text-center text-xl text-gray-500 max-md:w-full max-[1025px]:text-lg">Whether you're looking to lease space, sponsor experiences, or book our world-class venues.</p>
<div className="flex flex-row gap-4 max-md:flex-col items-center justify-center p-10">
  <Link href="/Contact" className="bg-[#c9a26b] max-md:max-w-xl  font-medium w-2xs text-black p-3  hover:bg-yellow-400">START THE CONVERSATION</Link>
   <Link href="/why-moa" className=" font-medium  text-white max-md:max-w-xl border w-2xs border-gray-400 p-3 hover:text-yellow-600  hover:border-yellow-600">SEE THE DATA</Link>
</div>
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
