"use client"
import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function Menu(props:any) {
  const { push } = useRouter();
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
  const [element, setElement] = useState<HTMLCollection | null>(null);
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

 

  const onClickCategory = (item:any) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory("");
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  useEffect(() => {
    setElement(document.getElementsByTagName('nav'));
}, []);

if (!element) {
  return <></>;
}

console.log(homeCategory)
  
  return (

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
    //     <NavigationMenuItem>
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


 <div className="m-5 flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
      {homeCategoryList.map((item) => {
        return (
          <div
            onClick={() => onClickCategory(item)}
            key={item.label}
            className={cn(
              "h-[38px] text-white min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer", total.total&&"text-black",
              item.label === homeCategory &&
                "bg-white text-black hover:bg-white"
            )}
          >
            <div onClick={() => {push(item.src, {scroll: false}), {scroll: false}}}>{item.label}</div>
          </div>
        );
      })}
    </div>
  )
}


