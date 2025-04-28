import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
    <div className='lg:my-10 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[20px] w-[1100px]'>소개</div>
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        </div>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosaz29qx6.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] text-center'>흙광고기획</div>
          <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
          <div className='text-[15px] lg:w-[1100px] text-center'>저희 흙광고기획은 창사 30년을 바탕으로 옥외광고 선두주자로 자리매김하여 도시경관을 선도하는 기업으로 도시미관을 책임하고 있습니다. 한가지 한가지 소비자믿음으로 성실제작하여 착한가게로 성장하고있습니다.믿고 맡겨주시면 최선을 다해 보답하겟습니다 감사합니다</div>
          <div className='mt-10' />
          <div className='text-[20px] text-center'>2017경기도모범옥외광고업체, 국가옥외광고사2급보유</div>
          <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
        </div>

      </section>
       <section className='flex justify-center items-center'>
       <div className='w-[1100px] flex flex-row items-center gap-8'>
       <Image
          alt="mediaItem"
          className="object-contain"
          width={130}
          height={130}
          src={"/Image/mosap8kp6l.jpeg"}
        />  
        <div className='text-[13px]'>흙광고기획입니다.</div>
        </div>
       </section>
       <div className='h-[150px]'/>
         <Footer />
       </div>
       
  )
}

export default page
