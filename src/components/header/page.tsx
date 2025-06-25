import {Button} from "@/components/ui/button";
import Link from "next/link";
import {AlignJustify, CircleUser} from "lucide-react";

export function Header (){
    return(
        <div className="bg-indigo-600 text-white py-3">
            <div className="container flex justify-between items-center mx-auto px-5">
                <h4 className="uppercase font-semibold">Simple code academy</h4>
                <div className="flex lg:gap-4 gap-2 items-center">
                    <Link href="/" className="font-semibold text-sm uppercase hidden lg:block">Хичээлүүд</Link>
                    <Link href="/" className="font-semibold text-sm uppercase lg:hidden ">
                        <AlignJustify className="size-5" />
                    </Link>
                    <Link href="/login">
                        <Button className="lg:border-white lg:border rounded p-2  flex gap-2 bg-transparent">
                            <CircleUser className="size-6"/>
                           <span className="hidden lg:block">Нэвтрэх</span>
                        </Button>
                    </Link>

                </div>
            </div>

        </div>
    )
}