"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react'


import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function Menu(props:any) {
  const [element, setElement] = useState<HTMLCollection | null>(null);
  let total = props

  useEffect(() => {
    setElement(document.getElementsByTagName('nav'));
}, []);

if (!element) {
  return <></>;
}

  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
          <Link href="/so" legacyBehavior passHref>소개</Link>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
          <Link href="/dae" legacyBehavior passHref>대표 상품 소개</Link></NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
          <Link href="/si" legacyBehavior passHref>내부시설</Link></NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger className={cn("text-[18px]", total.total&&"text-black")}>
          <Link href="/map" legacyBehavior passHref>오시는 길</Link></NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
