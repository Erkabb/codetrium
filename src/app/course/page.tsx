import { useGetVideosQuery } from "@/gql/video/get-videos.generated";

export default function Content() {
  const { data, loading, error } = useGetVideosQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos.</div>;

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {data?.getVideos.map((video) => (
          <li key={video._id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}