import React from 'react'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import Map from "@/components/map"

const Mapping = () => {
  return (
    <div className='lg:my-10 p-3.5'>
    <section className='flex flex-col justify-center items-center'>
    <div className='lg:mt-13' />
      <div className='flex flex-col'>
        <div className='lg:text-start font-semibold text-center text-[20px] lg:w-[1100px] w-screen'>오시는 길</div>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>
      <div className='mt-5' />
      

        <section className='flex justify-center items-center'>
        <div className='md:w-[1100px] md:h-[500px] w-[640px] h-[500px]'>
          <Map />
        </div>
        </section>


        <div className='mt-8' />
    
    <div className='md:block hidden'>
    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[15px]'>흙광고기획</div>
          <div className='mt-1' />
          <div className='lg:text-start text-center text-[26px]'>안산시 단원구 선부로 102-1</div>
          <div className='mt-8' />
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-black text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14116044.71633684,4486792.988002319,%ED%9D%99%EA%B4%91%EA%B3%A0%EA%B8%B0%ED%9A%8D,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-black text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p?title=%ED%9D%99%EA%B4%91%EA%B3%A0%EA%B8%B0%ED%9A%8D&lng=126.8065872&lat=37.3413429&zoom=13&type=0&c=13.00,0,0,0,dh")}}>지도에서 보기</div>
          </div>
        </div>  
      </div>
    </section>

    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiMiniMapPin className='text-[20px] text-gray-400'/>
          <div className=''>오시는길</div>
          </div>
          <div className='lg:text-start text-center text-[15px]'>주차정보&nbsp; | &nbsp;삼화 주차장 등 주변 모든 주차장에 주차 가능</div>
        </div>  
        
      </div>
      </section>

      <div className='mt-7' />
    
      <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiPhone className='text-[20px] text-gray-400'/>
          <div className=''>전화번호</div>
          </div>
          <div className='lg:text-start text-center text-[15px]'>
          010-9936-1642</div>
        </div>  
        <div className='mt-7' />
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
      </section>
      </div>

    <section className='md:hidden block'>
    <div className='flex flex-row gap-2'>
          <div className='flex rounded-md flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-black text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14116044.71633684,4486792.988002319,%ED%9D%99%EA%B4%91%EA%B3%A0%EA%B8%B0%ED%9A%8D,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 rounded-md lg:text-start text-center text-[15px] p-2 bg-black text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p?title=%ED%9D%99%EA%B4%91%EA%B3%A0%EA%B8%B0%ED%9A%8D&lng=126.8065872&lat=37.3413429&zoom=13&type=0&c=13.00,0,0,0,dh")}}>지도에서 보기</div>
          </div>
        </div>  
    </section>

    <section className='md:hidden block flex justify-center items-center'>
    <div className='flex md:p-0 p-3 flex-col w-full'>
      <div className='md:mt-10 mt-5' />
      <div className='md:text-[20px] font-bold text-[18px] text-start'>흙광고기획</div>
        <div className='mt-1' />
        <div className='text-[15px] truncate text-start'>안산시 단원구 선부로 102-1</div>
        <div className='mt-5' />
        <div className='md:text-[20px] font-bold text-[18px] text-start'>전화번호</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>010-9936-1642</div>
        <div className='mt-5' />
        <div className='md:text-[20px] font-bold text-[18px] text-start'>주차정보</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>삼화 주차장 등 주변 모든 주차장에 주차 가능</div>
        <div className='mt-5' />
        <div className='flex flex-col h-[40px] justify-end'>

        <div className='mt-3' />
        </div>
      </div>  
     </section>  
     </div>
  )
}

export default Mapping
