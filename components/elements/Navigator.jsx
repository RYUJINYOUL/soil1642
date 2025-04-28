"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { FaHeart } from "react-icons/fa";
import { AiTwotoneNotification } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";

function Navigator() {
    const pathname = usePathname()
    const routes = useMemo(()=>{
        return [
            { 
                icon: "", 
                label: "소개", 
                isActive: pathname === "/so", 
                href: "/so" 
            },
            { 
                icon: "", 
                label: "대표 상품 소개", 
                isActive: pathname === "/dae", 
                href: "/dae" 
            },
            { 
                icon: "", 
                label: "내부시설", 
                isActive: pathname === "/si", 
                href: "/si" 
            },
            { 
                icon: "", 
                label: "오시는 길", 
                isActive: pathname === "/map", 
                href: "/map" 
            }
        ]
    },[pathname])
  return (
    <div>
      <section className='flex flex-row pl-7 pt-4 pb-4 gap-5'>
        <div className='text-[14px] text-[#9d9d9c] items-center hover:text-[#f9f9f8]'>로그인</div>
        <div className='text-[14px] text-[#9d9d9c] items-center'>|</div>
        <div className='text-[14px] text-[#9d9d9c] items-center hover:text-[#f9f9f8]'>회원가입</div>
      </section>
      <section className='flex flex-col gap-2 p-4'>
        {routes.map((route) => {
            return (
            <Link key={route.label} href={route.href}>
            <div className='text-[14px] text-[#feeabb] items-center p-3 hover:text-[#f9f9f8]'>{route.label}</div>
            <section className='px-3'>
                <div className='w-full h-[0.05px] bg-[#fcf0d6]'></div>
            </section>
            </Link>
            );
        })}
      </section>
      <div className='flex flex-row justify-between pl-2 pr-8'>
      <div className='flex flex-col justify-center items-center pl-7 pt-4'>
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
      </div>
    </div>
    </div>
  )
}

export default Navigator
