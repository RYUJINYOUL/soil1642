"use client"
import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import IconButton from './IconButton'
import { cn } from "@/lib/utils";

function Logo(props) {
    const { push } = useRouter();
    let total = props
    const onClickLogo = () =>{

        push("/");
    }
    const onClickMenu = () =>{

        push("/");
    }

    console.log(total.total)
  return (
    <section className='items-center'>
        {/* <div className="lg:hidden">
        <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
        />
        </div> */}
        <div className='cursor-pointer flex flex-row items-center' onClick={onClickLogo} >
            <Image className='rounded-4xl mr-5' alt='logo' width={60} height={60} src={"/Image/logo.jpg"} />
            <div className={cn('text-[22px] text-white cursor-pointer', total.total&&"text-black")} onClick={onClickLogo}>흙광고기획</div>
        </div>
       
    </section>
  )
}

export default Logo
