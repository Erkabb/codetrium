'use client';

import {SearchIcon} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useGetVideosQuery} from "@/gql/video/get-videos.generated";
import Link from "next/link";

export default function Home() {

  return (
    <div className="font-sans">
      {/* Main Content */}
      <main className="py-8 container mx-auto px-5">

        {/* Search, Filter, Sort */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Хичээл хайх..."
              className="border p-1.5 rounded-lg w-full pl-10"
            />
            <SearchIcon className="size-5 absolute top-2 left-2 text-gray-500 "/>
          </div>
          <div className="hidden lg:block">
            <Select>
              <SelectTrigger className="w-[180px] h-10 ">
                <SelectValue placeholder="Шүүх" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flutter">Flutter</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

      </main>
    </div>
  );
}
