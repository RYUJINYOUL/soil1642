"use client"
import React from 'react'
import Gallery2 from '@/components/Gallery2'
import useWindowSizeCustom from "@/hooks/useWindowSizeCustom"
import Image from "next/image";
import YouTube from 'react-youtube';


const Page = () => {
  let slides : string[] = [
    "1G32tYloRf0"
     ,
    "jjxbNFW57kI"
     ,
    "zaFyc9rR6sE"
   ]

   const windowSize = useWindowSizeCustom();

  return (
    <div className='min-h-[600px]'>
  
      <div className='mb-8'></div>

      <section>
        <div className='flex lg:h-[300px] sm:h-[150px] flex-col justify-center items-center'>
         <div className='flex lg:text-[22px] sm:text-[15px] sm:text-balance'>10년이상 의료봉사자로서, 대정병원의 기부자로서, 부모님의 자식으로서</div>
         <div className='flex lg:text-[44px] sm:text-[25px]'>내 부모님을 모시듯 치료하겠습니다</div>
       </div>
       </section>
      <section className='sm:hidden lg:flex flex-row items-center justify-center gap-8'>
              <Image
                alt="mediaItem"
                className="object-contain"
                width={314}
                height={447}
                src={"/Image/section1.jpg"}
            />
             <Image
              alt="mediaItem"
              className="object-contain"
              width={314}
              height={447}
              src={"/Image/section2.jpg"}
            />
            <Image
              alt="mediaItem"
              className="object-contain"
              width={314}
              height={447}
              src={"/Image/section3.jpg"}
            />
      </section>
      <section className='lg:hidden sm:flex flex-col items-center justify-center gap-y-8 pb-8'>
              <Image
                alt="mediaItem"
                className="object-contain"
                width={640}
                height={362}
                src={"/Image/msection1.jpg"}
            />
             <Image
              alt="mediaItem"
              className="object-contain"
              width={640}
              height={362}
              src={"/Image/msection2.jpg"}
            />
            <Image
              alt="mediaItem"
              className="object-contain"
              width={640}
              height={362}
              src={"/Image/msection3.jpg"}
            />
      </section>
      <section className='w-full lg:h-[700px] sm:h-[600px] bg-[#ededed]'>
          <div className='flex flex-col h-[600px] justify-start items-center mt-8 pt-14'>
            <div className='flex lg:text-[44px] sm:text-[25px]'>자녀들이 말하는 중앙요양병원</div>
            <div className='flex lg:text-[22px] sm:text-[15px] sm:text-balance'>요양병원을 추천하는 이유는 어머니의 웃음입니다</div>
            
            <div className='lg:hidden pt-16 w-full'>
            <Gallery2 images={slides} />
          
          </div>
          <div className='sm:hidden lg:flex flex-row items-center justify-center gap-x-8 mt-8 pt-14'>
          <YouTube
                videoId={"1G32tYloRf0"}
    
                opts={{
                  width: "640",
                  height: "362",
                  playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
              
                onEnd={(e:any)=>{e.target.stopVideo(0);}}      
              />
             <YouTube
                videoId={"jjxbNFW57kI"}
    
                opts={{
                  width: "640",
                  height: "362",
                  playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
              
                onEnd={(e:any)=>{e.target.stopVideo(0);}}      
              />
            <YouTube
                videoId={"zaFyc9rR6sE"}
    
                opts={{
                  width: "640",
                  height: "362",
                  playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
              
                onEnd={(e:any)=>{e.target.stopVideo(0);}}      
              />
      </div>
          </div>
      </section>
     
      <div className='mt-9 h-[500px] bg-[#ededed]'></div>
      <div className='mt-9 h-[500px] bg-slate-500'></div>
      <div className='mt-9 h-[500px] bg-slate-500'></div>
      <div className='mt-9 h-[500px] bg-slate-500'></div>
   </div>
  
  )
}

export default Page

