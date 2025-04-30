"use client"
import React from 'react'
import Map from "@/components/map"
import Footer from '@/components/Footer'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import Mapping from '@/components/Mapping';


function page() {

  
  return (
    <div>
       <Mapping />
       <div className='h-[80px]'/>
       <div className="m-5 flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
  <div className="w-56 flex-shrink-0 rounded bg-slate-300 p-2">Lorem ipsum dolorn</div>
</div>
       <Footer />
       </div>
   
  );
}

export default page;
