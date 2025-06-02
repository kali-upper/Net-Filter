import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import CommentBox from "../components/CommentBox";

interface Video {
  id: string;
  title: string;
}

const EducationPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "G1Ke-H8I1uk",
      title: "How Does LIGHT Carry Data? - Fiber Optics Explained",
    },
    {
      id: "zAVsTubdd_Q",
      title: "How Fiber Optics Works animation only",
    },
    {
      id: "d86ws7mQYIg",
      title: "How does Computer Hardware Work? 💻🛠🔬 [3D Animated Teardown]",
    },
    {
      id: "59HBoIXzX_c",
      title: "How Electric Motors Work - 3 phase AC induction motors ac motor",
    },
    {
      id: "GQatiB-JHdI",
      title: "How does an Electric Motor work? DC Motor explained",
    },
    {
      id: "CWulQ1ZSE3c",
      title: "How does an Electric Motor work? (DC Motor) Simplified",
    },
    {
      id: "64WEeDVOCUM",
      title: "How To jailbreak ChatGPT",
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
      <div className="container" id="education-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>

      <CommentBox title="سيتم إضافة المزيد من الفيديوهات قريباً" />
    </div>
  );
};

export default EducationPage;
