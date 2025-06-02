import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import CommentBox from "../components/CommentBox";

interface Video {
  id: string;
  title: string;
}

const WorkoutPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "qwx1VV9vV1A",
      title: "Most Effective CHEST Workout at HOME",
    },
    {
      id: "imRJUblCTjw",
      title: "NO GYM FULL BACK WORKOUT AT HOME",
    },
    {
      id: "8PwoytUU06g",
      title: "COMPLETE 20 MIN ABS WORKOUT at Home",
    },
    {
      id: "wwKb-wZCEjs",
      title: "Build Big ARMS in 8 Minutes (AT HOME)",
    },
    {
      id: "841gJUczmzg",
      title: "Killer LEG Workout at Home",
    },
    {
      id: "QWS7mjdbw7k",
      title: "6 Min BIG Shoulders Workout at Home",
    },
    {
      id: "r_sxBBLoLkQ",
      title: "Get BIG and WIDE Shoulders at Home Workout",
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
      <div className="container" id="workout-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>

      <CommentBox title="سيتم إضافة المزيد من الفيديوهات قريباً" />
    </div>
  );
};

export default WorkoutPage;
