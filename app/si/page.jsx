import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
    <div className='lg:my-10 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
        <div className='flex flex-col'>
          <div className='lg:text-start font-bold text-center text-[20px] lg:w-[1100px] w-screen'>내부시설</div>
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        </div>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosa2F3PhW.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosacvguBD.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaWg7hN6.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaCtbuCS.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaaMweum.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosauoNYRF.jpeg"}
          />
           <div className='mt-7' />
    
      
       </section>

       <div className='h-[150px]'/>
       <Footer />
       </div>
  )
}

export default page
