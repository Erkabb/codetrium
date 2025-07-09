import { useGetVideosQuery } from "@/gql/video/get-videos.generated";

export default function Content() {
  const { data, loading, error } = useGetVideosQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos.</div>;

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {data?.getVideos.map((v) => (
            <a href={`/youtube-upload/${v._id}`} key={v._id} className="border rounded-md p-5 shadow-sm shadow-gray/50">
                {loading && (<div className="skeleton w-72 h-10"/>)}
                <iframe
                    src={`https://www.youtube.com/embed/${v._id}`}
                    key={v._id}
                    width="460"
                    height="400"
                    allowFullScreen
                    frameBorder="0"/>
                <h5 className="text-lg font-semibold">{v.title}</h5>
            </a>
        ))}
      </ul>
    </div>
  );
}