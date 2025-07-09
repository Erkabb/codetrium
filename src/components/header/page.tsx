'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import {SidebarComponent} from "@/components/sidebar/page";

export function Header() {
  const [ isOpen, setIsOpen ]=useState(false);

  return (
    <div className="bg-blue-900 text-white py-3">
      <div className="container flex justify-between items-center mx-auto px-5">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          {/* Лого зураг — та өөрийн path руу солих хэрэгтэй */}
          <Image
            src="/logo.png" // эсвэл /logo.png
            alt="Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <h4 className="uppercase font-semibold text-white text-lg">
            Simple Code Academy
          </h4>
        </div>

        {/* Navigation */}
        <div className="flex lg:gap-4 gap-2 items-center">
          <Link
            href="/course"
            className="font-semibold text-sm uppercase hidden lg:block"
          >
            Хичээлүүд
          </Link>

          <Button className="btn-sm bg-transparent hover:bg-white hover:text-indigo-600" onClick={() => {
            setIsOpen(true)
            if(isOpen){
              setIsOpen(false);
            }
          }}>
            <AlignJustify className="size-6" />
            {isOpen && <SidebarComponent isOpen={isOpen}/>}
          </Button>
        </div>
      </div>
    </div>
  );
}
