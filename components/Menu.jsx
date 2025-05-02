"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"


export default function Menu(props) {
  const { push } = useRouter();
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
  let total = props
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
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
    slideRight()
}, []);





const slideRight = () => {
  var slider = document.getElementById('nav');
  if (headerImageSrc === "/si") {
    slider.scroll(100, 200)
  }
  if (headerImageSrc === "/map") {
    slider.scroll(100, 200)
  }
};
  
  return (
    <nav id="nav" className="md:m-0 ml-5 w-full flex gap-4 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[38px] text-white min-w-fit px-2 flex justify-center items-center border border-transparent rounded-lg hover:bg-gray-200",
            total.total&&"text-black",
            item.label === homeCategory &&
              "underline underline-offset-8"
          )}
        >
            {item.label}
        </div>
      );
    })}
  </nav>


    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black", )}>
    //       <Link href="/so"  passHref>소개</Link>
    //       </NavigationMenuTrigger>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //     <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
    //       <Link href="/dae"  passHref>대표 상품 소개</Link></NavigationMenuTrigger>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //     <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
    //       <Link href="/si"  passHref>내부시설</Link></NavigationMenuTrigger>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //     <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
    //       <Link href="/map"  passHref>오시는 길</Link></NavigationMenuTrigger>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>



    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem className="m-5 w-full flex overflow-x-auto">
    //     {homeCategoryList.map((item, i) => {
    //     return (
    //       <NavigationMenuTrigger key={i} 
    //       onClick={() => onClickCategory(item)}
    //       className={cn("text-[18px]", total.total&&"text-black",
    //           // item.label === homeCategory &&
    //           //   "underline underline-offset-8"

    //        )}>
    //       <div onClick={() => {push(item.src, {scroll: false}), {scroll: false}}}>{item.label}</div>
    //       </NavigationMenuTrigger>
    //     );
    //   })}
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
  )
}


