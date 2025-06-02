import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import CommentBox from "../components/CommentBox";

interface Video {
  id: string;
  title: string;
}

const EntertainmentPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "ZBjNAntj8cc",
      title: "من طرائف العرب ونوادرهم",
    },
    {
      id: "rK5E9w4z4nQ",
      title: "ليه الطيارة متقفش في الجو وتستنى الارض تلف تحتها",
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
      <div className="container" id="entertainment-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>

      <CommentBox title="سيتم إضافة المزيد من الفيديوهات قريباً" />
    </div>
  );
};

export default EntertainmentPage;
