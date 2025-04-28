
import React from 'react'
import Map from "@/components/map"


function page() {
     
  return (
    <div className='lg:my-10 p-3.5'>
       <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[20px] w-[1100px]'>오시는 길</div>
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        </div>
        </section>
        <div className='mt-5' />
        
         
          <div className='mt-7'/>

          <section className='flex justify-center items-center'>
          <div className='w-[1100px] h-[700px]'>
            <Map />
          </div>
          </section>


           <div className='mt-7' />
    
      
    
       <div className='h-[150px]'/>
       </div>
   
  );
}

export default page;
