"use client"
import React, { useEffect, useState, useRef } from 'react'
import Logo from './elements/Logo'
import Menu from '@/components/Menu'
import Navigator from './elements/Navigator'
import PagePadding from './PagePadding'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";





const HeaderDrawer = ({ children }) => {
  return (<Drawer direction='left'>
  <DrawerTrigger>{children}</DrawerTrigger>
  <DrawerContent className='w-[250px] h-full'>
  <nav className='w-[250px] h-full border-r-[1px] border-neutral-600 '>
        <div className='p-[24px]'><Logo total={true}/></div>
        <div className='bg-black h-full'><Navigator /></div>
      </nav>
  </DrawerContent>
</Drawer>
  );
}



const Header2 = ({children}) => {
   const [isScrolled, setIsScrolled] = useState(false);
   const headRef = useRef();

   useEffect(() => {
      const handleScroll = () => {
        const scrollValue = headRef?.current?.scrollTop;
        // console.log("-->scrollValue", scrollValue);
        setIsScrolled(scrollValue !== 0);
      };
  
      headRef?.current?.addEventListener("scroll", handleScroll);
      return () => {
        headRef?.current?.removeEventListener("scroll", handleScroll);
      }
    }, []);




  return (
    <header ref={headRef} className="overflow-y-auto w-full h-full">
    <section className="relative top-0 w-full">
 </section>

   <section className={cn('absolute w-full top-0 left-0 lg:h-[100px] sm:h-[80px] z-10 flex flex-row items-center lg:justify-center sm:justify-between', isScrolled&&"bg-white")}>
   <PagePadding>
   <div className='flex flex-col'>
   <div className='md:absolute sm:absolute lg:relative lg:w-[1100px] w-full top-0 left-0 lg:h-[100px] sm:h-[80px] z-10 flex flex-row items-center lg:justify-between sm:justify-between'>
    
     {/* <div className='w-[300px]'>
       <Logo total={true}/>
       </div> */}

       

      <section className='flex items-center'>
           <HeaderDrawer>
            <article className='lg:hidden ml-2 sm:pr-10'>
           <GiHamburgerMenu className={"text-black"} size={30} />
             </article>
             </HeaderDrawer>

         {/* <article className='hidden lg:block'> */}
         <article>
          <Menu total={true} />
          </article>
     
           {/* <HeaderDrawer>
            <article className='lg:hidden sm:pr-10'>
           <GiHamburgerMenu className={"text-black"} size={30} />
             </article>
             </HeaderDrawer> */}
            </section>

   </div>    
   <hr className="h-0.5 border-t-0 hidden lg:block bg-neutral-100 opacity-100 dark:opacity-50"/>
   <div className='mt-1' />
   </div>
   </PagePadding>
   </section>
  
 <section className='relative top-20'>{children}</section>

</header>
  )
}

export default Header2
