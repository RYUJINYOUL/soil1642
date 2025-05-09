"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { FaHeart } from "react-icons/fa";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils"
import { AiTwotoneNotification } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";

function Navigator() {
    const { push } = useRouter();
    const pathname = usePathname()
    const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
    const homeCategoryList = [
      {
        label: "홈",
        src: "/",
      },
      {
        label: "소개",
        src: "/so",
      },
      {
        label: "대표 상품 소개",
        src: "/dae",
      },
      {
        label: "내부시설",
        src: "/si",
      },
      {
        label: "오시는 길",
        src: "/map",
      },
    ];
    const onClickCategory = (item) => {
      if (homeCategory === item.label) {
        setHeaderImageSrc("");
        setHomeCategory(item.label);
      } else {
        setHeaderImageSrc(item.src);
        setHomeCategory(item.label);
        console.log(item.label)
      }
    };
  

  return (
    <div>
      {/* <section className='flex flex-row pl-7 pt-4 pb-4 gap-5'>
        <div className='text-[14px] text-[#9d9d9c] items-center hover:text-[#f9f9f8]'>로그인</div>
        <div className='text-[14px] text-[#9d9d9c] items-center'>|</div>
        <div className='text-[14px] text-[#9d9d9c] items-center hover:text-[#f9f9f8]'>회원가입</div>
      </section> */}
      <section className='flex flex-col gap-2 p-4'>
        {homeCategoryList.map((item) => {
             return (
               <div
                 onClick={() => onClickCategory(item)}
                 key={item.label}
                 className={cn(
                   "h-[38px] text-white min-w-fit px-2 flex justify-start items-center border border-transparent rounded-lg hover:bg-gray-200",
                   item.label === homeCategory &&
                     "underline underline-offset-8"
                 )}
               >
                 <div onClick={() => {push(item.src, {scroll: false})}}>{item.label}</div>
               </div>
             );
           })}
      </section>
      <div className='flex flex-row justify-between pl-2 pr-8'>
      {/* <div className='flex flex-col justify-center items-center pl-7 pt-4'>
        <div style={{color:'#9d9d9c'}}><BsChatText className='size-[30px]'/></div>
        <div className='text-[14px] text-[#9d9d9c] hover:text-[#f9f9f8] mt-2'>온라인상담</div>
        </div>

        <div className='flex flex-col justify-center items-center pl-7 pt-4'>
        <div style={{color:'#9d9d9c'}}><AiTwotoneNotification className='size-[30px]'/></div>
        <div className='text-[14px] text-[#9d9d9c] hover:text-[#f9f9f8] mt-2'>중앙소식</div>
        </div>


        <div className='flex flex-col justify-center items-center pl-7 pt-4'>
        <div style={{color:'#fc5d5d'}}><FaHeart className='size-[30px]'/></div>
        <div className='text-[14px] text-[#9d9d9c] hover:text-[#f9f9f8] mt-2'>해피기부</div>
      </div> */}
    </div>
    </div>
  )
}

export default Navigator
