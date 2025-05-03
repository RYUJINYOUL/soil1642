"use client"
import React from 'react'
import Image from "next/image";
import Map from "@/components/map"
import { useRouter } from 'next/navigation'
import Gallery2 from '@/components/Gallery2'
import Footer from '@/components/Footer'
import Mapping from '@/components/Mapping';
import useUIState from "@/hooks/useUIState";



const Page = () => {
  const { push } = useRouter();
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
  let slides : string[] = [
    '/Image/mosa0Dia0d.jpeg'
     ,
    "/Image/mosajs9fUJ.jpeg"
     ,
    "/Image/mosaiMoiDM.jpeg"
   ]

   let slides2 : string[] = [
    "/Image/mosa2F3PhW.jpeg"
     ,
    "/Image/mosaz29qx6.jpeg"
     ,
    "/Image/mosaaMweum.jpeg"
     ,
     "/Image/mosaWg7hN6.jpeg"
     ,
    "/Image/mosaCtbuCS.jpeg"
     ,
    "/Image/mosauoNYRF.jpeg"
   ]


   const onClickCategory = (item:any ,src:any) => {
    if (homeCategory === item) {
      setHeaderImageSrc("");
      setHomeCategory(item);
    } else {
      setHeaderImageSrc(src);
      setHomeCategory(item);
      push(src)
    }
  };


  return (
    
    <div>
  
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    

      <div className='md:mb-18 mb-4'></div>

      <section className='flex flex-col justify-center items-center'>
    
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>소개</div>
          <hr className="mt-1 h-0.5 md:block hidden border-t-0 bg-neutral-700 opacity-100 w-[40px] dark:opacity-50"/>
       </div>
          <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("소개" ,"/so")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1060px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7' />
       <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-start items-start gap-10'>
        <div className='relative md:w-[530px] w-full h-[353px]'>
       <Image
          alt="mediaItem"
          className="object-cover rounded-md"
          // width={530}
          // height={353}
          fill
          src={"/Image/mosaz29qx6.jpeg"}
        />  
        </div>
        <div className='flex flex-col md:w-[530px] w-full'>
          <div className='md:text-[20px] font-semibold text-[18px] text-start'>흙광고기획</div>
          <div className='md:mt-10 mt-3' />
          <div className='text-[15px] md:block hidden text-start'>저희 흙광고기획은 창사 30년을 바탕으로 옥외광고 선두주자로 자리매김하여 도시경관을 선도하는 기업으로 도시미관을 책임하고 있습니다. 한가지 한가지 소비자믿음으로 성실제작하여 착한가게로 성장하고있습니다.믿고 맡겨주시면 최선을 다해 보답하겟습니다 감사합니다</div>
          <div className='text-[15px] md:hidden block truncate text-start'>저희 흙광고기획은 창사 30년을 바탕으로 옥외광고 선두주자로 자리매김하여 도시경관을 선도하는 기업으로 도시미관을 책임하고 있습니다. 한가지 한가지 소비자믿음으로 성실제작하여 착한가게로 성장하고있습니다.믿고 맡겨주시면 최선을 다해 보답하겟습니다 감사합니다</div>
          <div className='md:mt-10 mt-3' />
          <div className='md:text-[20px] font-semibold md:block hidden text-[18px] text-start'>2017경기도모범옥외광고업체, 국가옥외광고사2급보유</div>
          <div className='md:text-[20px] font-semibold md:hidden block text-[18px] truncate text-start'>2017경기도모범옥외광고업체, 국가옥외광고사2급보유</div>
          <div className='md:mt-10 mt-8' />
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("소개" ,"/so")}}>더보기 &nbsp;&gt;</div>
       </div>
        </div>  
        </div>
       </section>

      <section className='md:hidden block'>
       <div className='md:mb-18 mb-4'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>

       <div className='md:mb-18 mb-4'></div>

    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>대표 상품 소개</div>
          <hr className="mt-1 h-0.5  border-t-0 md:bg-neutral-700 bg-white opacity-100 w-[120px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("대표 상품 소개" ,"/dae")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[980px]"/>
       </div>
       </div>
       </div>
      
       
       <div className='md:mt-7' />

       <div className='md:hidden w-full px-3 py-1 justify-start items-start rounded-md'>
       <Gallery2 images={slides} />
       </div>

      <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-start items-start gap-7 rounded-md'>

       <Image
          alt="mediaItem"
          className="w-[350px] h-[350px] hidden md:block rounded-md"
          width={350}
          height={350}
          src={"/Image/mosa0Dia0d.jpeg"}
        />
   

        <Image
          alt="mediaItem"
          className="w-[350px] h-[350px] hidden md:block rounded-md"
          width={350}
          height={350}
          src={"/Image/mosajs9fUJ.jpeg"}
        />  

        <Image
          alt="mediaItem"
          className="w-[350px] h-[350px] hidden md:block rounded-md"
          width={350}
          height={350}
          src={"/Image/mosaiMoiDM.jpeg"}
        />   
      </div>

      <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
        <div className='md:mt-10 mt-5' />
        <div className='md:text-[20px] font-semibold text-[18px] text-start'>LED채널</div>
          <div className='md:mt-5 mt-1' />
          <div className='text-[15px] md:block hidden text-start'>일반적으로 많이사용되는간판입니다 기존 네온으로제작설치하여 가게홍보하였는데 요주음대세는 LED 채널사인으로 전부 이용하는 추세입니다 전기료 또한 10/1 밖에 안나오고 상호교체도 용이하므로 소비자가 많이 찾은 제품이기도 합니다.</div>
          <div className='text-[15px] md:hidden block truncate text-start'>일반적으로 많이사용되는간판입니다 기존 네온으로제작설치하여 가게홍보하였는데 요주음대세는 LED 채널사인으로 전부 이용하는 추세입니다 전기료 또한 10/1 밖에 안나오고 상호교체도 용이하므로 소비자가 많이 찾은 제품이기도 합니다.</div>
          <div className='md:mt-10 mt-3' />
          <div className='md:text-[20px] font-semibold text-[18px] text-start'>LED채널</div>
          <div className='md:mt-5 mt-1' />
          <div className='text-[15px] md:block hidden text-start'>조립또한 쉽게 조립할수 있고 영업품목 및 상호선전도 용이하여 점주 분들이 많이 찾는 제품입니다. 요즈음 트랜드죠 앞으로도 면발광이다던지 전기료절약등등 더욱 신장해나아가는 제품이기도 합니다.</div>
          <div className='text-[15px] md:hidden block truncate text-start'>조립또한 쉽게 조립할수 있고 영업품목 및 상호선전도 용이하여 점주 분들이 많이 찾는 제품입니다. 요즈음 트랜드죠 앞으로도 면발광이다던지 전기료절약등등 더욱 신장해나아가는 제품이기도 합니다.</div>
          <div className='md:mt-10 mt-8' />
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("대표 상품 소개" ,"/dae")}}>더보기 &nbsp;&gt;</div>
          </div>
        </div>  
       </section>

       <section className='md:hidden block'>
       <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
 
       </section>


       <div className='md:mb-18 mb-4'></div>
    
       <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>내부시설</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("내부시설" ,"/si")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7' />
    
       <div className='md:hidden w-full py-1 px-3 justify-start items-start'>
       <Gallery2 images={slides2} />
       </div>
        
       <div className='w-[1100px] flex flex-row justify-start items-start gap-7'>

       <Image
          alt="mediaItem"
            className="w-[350px] h-[350px] hidden md:block"
            width={350}
            height={350}
          src={"/Image/mosa2F3PhW.jpeg"}
        />

        <Image
          alt="mediaItem"
          className="w-[350px] h-[350px] hidden md:block"
          width={350}
          height={350}
          src={"/Image/mosaz29qx6.jpeg"}
        />  

        <Image
          alt="mediaItem"
            className="w-[350px] h-[350px] hidden md:block"
            width={350}
            height={350}
          src={"/Image/mosaaMweum.jpeg"}
        />   
        </div>

        <div className='mt-7.5'/>
        <div className='w-[1100px] flex flex-row justify-start items-start gap-7.5'>
        
       <Image
          alt="mediaItem"
      className="w-[350px] h-[350px] hidden md:block"
      width={350}
          height={350}
          src={"/Image/mosaWg7hN6.jpeg"}
        />

        <Image
          alt="mediaItem"
           className="w-[350px] h-[350px] hidden md:block"
           width={350}
           height={350}
          src={"/Image/mosaCtbuCS.jpeg"}
        />  

        <Image
          alt="mediaItem"
          className="w-[350px] h-[350px] hidden md:block"
          width={350}
          height={350}
          src={"/Image/mosauoNYRF.jpeg"}
        />   
        
        </div>
        <div className='flex flex-col md:w-[530px] w-full px-3'>
          <div className='md:mt-10 mt-8' />
          <div className='md:hidden block flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("내부시설" ,"/si")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>
        </section>

        <section className='md:hidden block'>
        <div className='md:mb-18 mb-4'></div>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    


         <Mapping/>
               <Footer />
   </div>
  
  )
}

export default Page

