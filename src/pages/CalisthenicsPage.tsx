import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import CommentBox from "../components/CommentBox";

interface Video {
  id: string;
  title: string;
}

const CalisthenicsPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "fWptOzJI3Wc",
      title: "30 Min FULL BODY CALISTHENICS WORKOUT at Home | Follow Along",
    },
    {
      id: "RoxKbyst0To",
      title:
        "10 Best Exercises To Start Calisthenics | + Beginner Workout Routine",
    },
  ]);

  const [filteredVideos, setFilteredVideos] = useState<Video[]>(videos);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search events from the header
  useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSearchQuery(customEvent.detail);
    };

    window.addEventListener("search", handleSearch);
    return () => {
      window.removeEventListener("search", handleSearch);
    };
  }, []);

  // Filter videos when search query changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = videos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVideos(filtered);
    } else {
      setFilteredVideos(videos);
    }
  }, [searchQuery, videos]);

  return (
    <div>
      <div className="container" id="calisthenics-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>

      <CommentBox title="سيتم إضافة المزيد من الفيديوهات قريباً" />
    </div>
  );
};

export default CalisthenicsPage;
