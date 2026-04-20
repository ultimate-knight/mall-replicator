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
      <div className="z-50 flex flex-col gap-5 bg-gradient-to-r from-black/70 via-black/45 to-black/20 items-start justify-center h-[90vh]  flex-wrap p-5">
        <p className="text-[#c9a26b] text-xl">LUXURY
</p>
<p className="text-8xl text-white font-extrabold w-[40vw] max-[1025px]:w-full max-[1025px]:text-6xl">The Luxury <span className="text-[#c9a26b]">Collection</span></p>
<p className="text-2xl w-[40vw] text-gray-400 max-md:w-full">An architecturally distinct wing featuring the world's most prestigious brands.</p>

      </div>
      <video  autoPlay loop muted  playsInline className="absolute bg-black/50 inset-0 w-full h-screen object-cover">
        <source src="/mal-luxury1.mp4" type="video/mp4"></source>
      </video>
      <div className="z-50 bg-gray-950 text-white min-h-[90vh]">
        <div className="z-50 grid grid-cols-4 gap-y-7 max-md:grid-cols-2 max-sm:grid-cols-1 w-full mt-30 p-50 max-[1025px]:p-10">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-7xl max-[1025px]:text-4xl">$145K+</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600 max-[1025px]:text-base">Avg HHI Luxury Shopper</p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-7xl max-[1025px]:text-4xl">4.2hr
</p>
            <p className="text-xl max-[1025px]:text-base  text-gray-600 ">Avg Dwell Time</p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-7xl max-[1025px]:text-4xl">38%</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">YoY Sales Growth</p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-7xl max-[1025px]:text-4xl">92%</p>
            <p className="text-xl max-[1025px]:text-base text-gray-600">Brand Awareness Lift</p>
          </div>
        </div>

        <div className="flex max-[1025px]:flex-col gap-10 p-10 mt-30">
          <img src="/lebergog.jpeg" className="w-7xl max-[1025px]:w-5xl  object-cover h-auto max-[1025px]:order-1"/>
          <div className="flex flex-col gap-6 items-start p-10 max-[1025px]:p-5 justify-center max-[1025px]:justify-start w-full">
                <p className="text-gray-500">Elevated Experience</p>
                <p className="text-6xl w-[30vw] max-[1025px]:text-4xl max-[1025px]:w-full">Where <span className="text-[#c9a26b]">Prestige</span>{" "}
    Meets Performance</p>
    <p className="text-xl max-[1025px]:text-lg w-[25vw] text-gray-500 max-[1025px]:w-full">Marble finishes, private shopping suites, and dedicated valet create an environment that positions brands at the pinnacle. 38% year-over-year growth and 92% brand awareness lift for new tenants.</p>
          </div>
        </div>

        <div className="mt-40 flex flex-col max-sm:p-5  items-center max-md:items-start  p-20  justify-between">
          <p className="text-gray-500">VIP Services</p>
          <p className="text-6xl   max-[1025px]:text-4xl">White-Glove <span className="text-[#c9a26b]">Experience</span></p>
         <div className="flex justify-center max-md:flex-col mt-10 max-md:justify-start max-md:items-start  gap-15 p-10 max-md:p-5  items-center w-full">
          <div className="flex flex-col gap-15">
              <div className="flex flex-col gap-3 group p-3 hover:border hover:border-[#c9a26b] ">
                <p className="text-2xl group-hover:text-[#c9a26b]">Private Shopping Suites</p>
                <p className="text-gray-500">By-appointment suites with dedicated stylists and champagne service.</p>
              </div>
              <div className="flex flex-col gap-3 group p-3 hover:border hover:border-[#c9a26b] ">
                <p className="text-2xl group-hover:text-[#c9a26b]">Personal Stylists</p>
                <p className="text-gray-500">On-call professionals curating cross-brand looks.</p>
              </div>
          </div>
           <div className="flex flex-col gap-15">
              <div className="flex flex-col gap-3 group p-3 hover:border hover:border-[#c9a26b] ">
                <p className="text-2xl group-hover:text-[#c9a26b]">VIP Valet & Concierge</p>
                <p className="text-gray-500">Dedicated valet, personal shopping, and white-glove concierge.</p>
              </div>
              <div className="flex flex-col gap-3 group p-3 hover:border hover:border-[#c9a26b] ">
                <p className="text-2xl group-hover:text-[#c9a26b]">VIP Events & Previews</p>
                <p className="text-gray-500">Early access, exclusive trunk shows, invitation-only events.</p>
              </div>
          </div>
         </div>
        </div>
       
<div className="w-full h-[90vh] mt-40 bg-gradient-to-r from-black/70 via-black/45 to-black/20 flex flex-col items-center justify-center">
  <video  autoPlay loop muted  playsInline className="w-full h-full object-cover">
        <source src="mal-luxury2.mp4" type="video/mp4"></source>
      </video>
      <div className="flex flex-col gap-3 absolute items-center justify-center">
      <p className=" z-50 text-9xl font-extrabold text-white">$145K+</p>
      <p className="">Avg HHI Luxury Shopper</p>
</div>
</div>
<div className="flex flex-col  gap-7 items-center justify-center mt-40 w-full">
  <p className="text-gray-500">Brand Partners</p>
  <p className="text-5xl p-10 text-center">Curated <span className="text-[#c9a26b]">Neighbors</span></p>
  <div className="flex flex-col gap-20 mt-20">
    <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-50 max-[1025px]:gap-20 w-full items-center">
      <div className="flex flex-col gap-2 text-center group p-3 hover:border hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl  group-hover:text-[#c9a26b]">Louis Vuitton</p>
        <p className="text-gray-500">Maison</p>
      </div>
      <div className="flex flex-col gap-2 text-center group p-3 hover:border hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl group-hover:text-[#c9a26b]">Burberry</p>
        <p className="text-gray-500">British Luxury</p>
      </div>
      <div className="flex flex-col gap-2 text-center group p-3 hover:border hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl group-hover:text-[#c9a26b]">Tiffany & Co.</p>
        <p className="text-gray-500">Jewelry</p>
      </div>
      <div className="flex group flex-col gap-3 text-center hover:border p-3 hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl group-hover:text-[#c9a26b]">Gucci</p>
        <p className="text-gray-500 ">Italian Luxury</p>
      </div>
    </div>
     <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-50 max-[1025px]:gap-20   w-full items-center ">
      <div className="flex group flex-col gap-2 text-center hover:border p-3 hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl transition-colors duration-300 group-hover:text-[#c9a26b]">Coach</p>
        <p className="text-gray-500">Leather Goods</p>
      </div>
      <div className="flex flex-col group gap-3 text-center hover:border p-3 hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl transition-colors duration-300 group-hover:text-[#c9a26b]">Michael Kors</p>
        <p className="text-gray-500">Fashion</p>
      </div>
      <div className="flex group flex-col gap-3 text-center hover:border p-3 hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl transition-colors duration-300 group-hover:text-[#c9a26b]">Kate Spade</p>
        <p className="text-gray-500">Accessories</p>
      </div>
      <div className="flex group flex-col gap-3 text-center hover:border p-3 hover:border-[#c9a26b] hover:bg-white/5">
        <p className="text-2xl transition-colors duration-300 group-hover:text-[#c9a26b]">Nordstrom</p>
        <p className="text-gray-500">Department Store</p>
      </div>
    </div>
  </div>
</div>


<div className="mt-40 flex flex-col  gap-10 items-center p-10 justify-center">
        <p className="text-gray-500">Luxury Leasing</p>
        <p className="text-6xl max-[1025px]:text-4xl max-md:w-full w-[50vw] text-center">Take Your Place in the  <span className="text-[#c9a26b]">Collection</span></p>
        <p className="text-gray-500 w-[30vw] max-md:w-full text-center max-[1025px]:text-lg text-xl">A short list of suites is available for select houses. Our luxury leasing team handles every brand introduction personally.</p>
        <div className="flex flex-row gap-4 max-md:flex-col items-center justify-center">
  <Link href="/Contact" className="bg-[#c9a26b] font-medium w-2xs text-black p-3 text-center uppercase hover:bg-yellow-400 cursor-pointer">join the luxury collection</Link>
   <Link href="/Events" className="bg-BLACK font-medium text-white border w-2xs border-gray-400 text-center p-3 uppercase hover:text-yellow-600 cursor-pointer  hover:border-yellow-600">explore brand activations</Link>
</div>
<p className="text-gray-500">luxury@mallofamerica.com · by introduction only</p>
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
