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
  const {data, loading} = useGetVideosQuery();
  const videos = data?.getVideos;
  console.log(videos);
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

        <div className="flex gap-6 p-5 overflow-x-auto shrink-0">
          {videos?.map((v)=> {
            const videoId = getYoutubeId(v.youtubeUrl);
            if(!videoId) return null;
            return(
                <Link href={`/course/${v._id}`} key={v._id} className="border rounded-md p-5 shadow-sm shadow-gray/50">
                  {loading && (<div className="skeleton w-72 h-10"/>)}
                  <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      key={v._id}
                      width="460"
                      height="400"
                      allowFullScreen
                      frameBorder="0"/>
                  <h5 className="text-lg font-semibold">{v.title}</h5>
                </Link>
            )})}
        </div>
      </main>
    </div>
  );
}

function getYoutubeId(url: string): string | null {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}
