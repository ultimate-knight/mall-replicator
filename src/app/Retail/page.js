"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header from "@/Components/Header/page";
import Footer from "@/Components/Footer/page"

export default function Retail() {
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
      {/* <div className="flex flex-row justify-between bg-gradient-to-r from-black/70 via-black/45 to-black/20    z-50  h-full w-full">
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
        <Link href="/Dining" onMouseOver={()=>setseg(5)} onMouseLeave={()=>setseg(0)} className="cursor-pointer">Dining
           {seg===5 && (
          <>
          <div className="absolute top-17 bg-yellow-600 w-14 h-0.5"></div>
          </>
        )}
        </Link>
        <Link href="/Entertainment" onMouseOver={()=>setseg(6)} onMouseLeave={()=>setseg(0)}  className="cursor-pointer">Entertainment
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
      <div className="z-50 flex flex-col bg-gradient-to-r from-black/70 via-black/45 to-black/20 gap-5 items-start justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl">Retail
</p>
<p className="text-8xl max-[1025px]:text-6xl text-white font-extrabold">Retail <span className="text-[#c9a26b]">Reimagined</span></p>
<p className="text-2xl text-gray-400 w-[40vw]">520+ world-class stores generating unprecedented foot traffic and per-visit spend.</p>


      </div>
      <video  autoPlay loop muted  playsInline className="absolute inset-0 w-full h-screen object-cover">
        <source src="/mall-video5.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-7 w-full mt-30 p-50 max-[1025px]:p-10 max-[1025px]:">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">96%</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Occupancy Rate</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">520+
</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Stores & Attractions</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">$850</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Avg Spend Per Visit</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-7xl max-[1025px]:text-4xl">3.1hr</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Average Dwell Time</p>
          </div>
        </div>
       <div className="flex flex-col gap-4 items-start justify-start p-20 max-md:p-5">
        <p className="text-gray-500">Tenant Mix</p>
        <p className="text-6xl max-[1025px]:text-4xl">Curated for <span className="text-[#c9a26b]">Every Audience</span></p>
        <div className="grid grid-cols-3 gap-8 max-[1025px]:grid-cols-2 max-md:grid-cols-1  mt-20 w-full">
          <div className="flex flex-col gap-3 items-start w-[30vw] max-md:w-full max-[1025px]:w-[40vw] p-5 ">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">180+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>+12% YoY</p></div>
                </div>
                <p className="text-[#c9a26b]">Fashion & Apparel</p>
                <p className="text-gray-500">Nordstrom, Zara, H&M, Macy's, Uniqlo</p>
          </div>
          <div className="flex flex-col gap-3 items-start w-[30vw] max-md:w-full max-[1025px]:w-[40vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">120+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>+18% YoY</p></div>
                </div>
                <p className="text-[#c9a26b]">Specialty & Lifestyle</p>
                <p className="text-gray-500">Apple, Lego, Build-A-Bear, Peloton</p>
          </div>
          <div className="flex flex-col gap-3 items-start max-md:w-full w-[30vw] max-[1025px]:w-[40vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">50+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>+22% YoY</p></div>
                </div>
                <p className="text-[#c9a26b]">Beauty & Wellness</p>
                <p className="text-gray-500">Sephora, MAC, Lush, Kiehl's</p>
          </div>
          
          
        {/* </div> */}
        {/* <div className="flex flex-row justify-between"> */}
          <div className="flex flex-col gap-3 items-start max-md:w-full w-[30vw] max-[1025px]:w-[40vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">40+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>+9% YoY</p></div>
                </div>
                <p className="text-[#c9a26b]">Home & Design</p>
                <p className="text-gray-500">Crate & Barrel, West Elm, Pottery Barn</p>
          </div>
          <div className="flex flex-col gap-3 items-start w-[30vw] max-md:w-full max-[1025px]:w-[40vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">35+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>+15% YoY</p></div>
                </div>
                <p className="text-[#c9a26b]">Sports & Outdoor
</p>
                <p className="text-gray-500">Nike, Adidas, The North Face, Lululemon</p>
          </div>
          <div className="flex flex-col gap-3 items-start max-md:w-full w-[30vw] max-[1025px]:w-[40vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">30+</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-white"><p>NEW</p></div>
                </div>
                <p className="text-[#c9a26b]">Pop-Up & Emerging</p>
                <p className="text-gray-500">Rotating seasonal and DTC concepts</p>
          </div>
          
          
        </div>
        
       </div>
<div className="w-full h-[90vh] mt-40 flex flex-col bg-gradient-to-r from-black/70 via-black/45 to-black/20 items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full bg-gradient-to-r from-black/70 via-black/45 to-black/20 object-cover">
        <source src="mal-retail2.mp4" type="video/mp4" className="bg-gradient-to-r from-black/70 via-black/45 to-black/20" ></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">96%</p>
      <p className="font-extrabold">
Occupancy Rate</p>
</div>
</div>
 <div className="flex flex-col gap-5 items-start justify-start mt-30 p-20 max-md:p-5">
        <p className="text-gray-500">Leasing</p>
        <p className="text-6xl">Your Next <span className="text-[#c9a26b]">Flagship</span></p>
        <p className="text-gray-500">Flexible options from 2-week activations to 10-year anchor leases.

</p>
<div className="flex flex-col gap-10">
        <div className="flex flex-row max-md:w-full max-md:flex-col justify-between w-full mt-20">
          <div className="flex flex-col gap-3 items-start w-[40vw] max-md:w-full p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">Flagship</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-gray-500"><p>15,000 – 80,000 sq ft</p></div>
                </div>
                <p className="text-[#c9a26b]">10+ years</p>
                <p className="text-gray-500 w-[90vw] max-md:w-full max-[1025px]:w-[40vw]">Anchor suites with premium visibility, dedicated entrances, and custom build-out.</p>
          </div>
          <div className="flex flex-col gap-3 items-start max-md:w-full w-[50vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">Inline Premium</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-gray-500"><p>1,200 – 15,000 sq ft</p></div>
                </div>
                <p className="text-[#c9a26b]">5 – 10 years</p>
                <p className="text-gray-500">High-traffic inline spaces with flexible layouts.</p>
          </div>
          
          
        </div>
        <div className="flex flex-row max-md:flex-col justify-between w-full">
          <div className="flex flex-col gap-3 items-start max-md:w-full w-[40vw]  p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl">Pop-Up Retail</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-gray-500"><p>200 – 3,000 sq ft</p></div>
                </div>
                <p className="text-[#c9a26b]">2 weeks – 12 months</p>
                <p className="text-gray-500 w-[90vw] max-md:w-full max-[1025px]:w-[40vw]">Short-term concepts, seasonal activations, and DTC launches.</p>
          </div>
          <div className="flex flex-col gap-3 max-md:w-full items-start w-[50vw] p-5">
                <div className="flex justify-between w-full items-center ">
                  <p className="text-3xl max-md:w-full">Kiosk & Common Area</p>
                  <div className="w-fit p-2 border border-[#c9a26b] rounded-lg text-sm  text-gray-500"><p>80 – 400 sq ft</p></div>
                </div>
                <p className="text-[#c9a26b]">Monthly / Seasonal
</p>
                <p className="text-gray-500">High-visibility common area placements in premium zones.</p>
          </div>
          </div>
          
          
        </div>
        
       </div>
       <div className="mt-40 flex flex-col gap-10 items-center p-10 justify-center">
        <p className="text-gray-500">Leasing Inquiry</p>
        <p className="text-6xl max-[1025px]:text-4xl ">Claim Your <span className="text-[#c9a26b]">Address</span></p>
        <p className="text-gray-500 w-[30vw] max-md:w-full text-center max-[1025px]:text-lg text-xl">From a 200 sq ft pop-up to an 80,000 sq ft flagship — our leasing team will tailor the right footprint and terms for your brand.</p>
        <div className="flex flex-row gap-4 items-center justify-center max-md:flex-col">
  <Link href="/Contact" className="bg-[#c9a26b] text-center font-medium hover:bg-yellow-400 w-2xs text-black p-3 uppercase">inquire about leasing</Link>
   <Link href="/why-moa" className="bg-BLACK font-medium text-white text-center border w-2xs border-gray-400 hover:text-yellow-600  hover:border-yellow-600 p-3 uppercase">see the numbers</Link>
</div>
<p className="text-gray-500">leasing@mallofamerica.com   response within 48 hours</p>
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
