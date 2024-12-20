
"use client"
import { RiMenuFold2Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md : hidden">
            <Button>
            <RiMenuFold2Fill  className="text-xl"/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="justify-center">Nike Shop</SheetTitle>
            </SheetHeader>
            <ul className="">
       <li className="grid grid-cols-1 gap-y-6">
        <Link href={"/New & Featured"}>New & Featured</Link>
        <Link href={"/Men"}>Men</Link>
        <Link href={"/Women"}>Women</Link> 
        <Link href={"/Kid"}>Kid</Link>
        <Link href={"/Sale"}>Sale</Link>
        <Link href={"/SNKRS"}>SNKRS</Link>
        
       </li>
      </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}





