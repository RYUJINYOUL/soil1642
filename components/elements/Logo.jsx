"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";

function Logo(props) {
    const { push } = useRouter();
    let total = props
    const onClickLogo = () =>{

        push("/");
    }


  return (
    <section className='items-center'>
        {/* <div className="lg:hidden">
        <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
        />
        </div> */}
        <div className='cursor-pointer flex flex-row items-center' onClick={onClickLogo} >
            <Image className='rounded-4xl mr-3 lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]' alt='logo' width={60} height={60} src={"/Image/logo.jpg"} />
            <div className={cn('md:text-[22px] text-[18px] text-white cursor-pointer', total.total&&"text-black")} onClick={onClickLogo}>흙광고기획</div>
        </div>
       
    </section>
  )
}

export default Logo
