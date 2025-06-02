import React, { useState } from "react";

interface VideoCardProps {
  videoId?: string;
  title: string;
  isLocalVideo?: boolean;
  videoUrl?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoId,
  title,
  isLocalVideo = false,
  videoUrl,
}) => {
  const [theaterMode, setTheaterMode] = useState(false);

  const toggleTheaterMode = () => {
    setTheaterMode(!theaterMode);
  };

  return (
    <div className={`video-card ${theaterMode ? "theater-mode" : ""}`}>
      {isLocalVideo ? (
        <video width="100%\" height="315\" controls>
          <source src={videoUrl} type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      ) : (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?controls=1`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      )}
      <div className="video-content">
        <h2 className="video-title">{title}</h2>
        {!isLocalVideo && (
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            Watch Now
          </a>
        )}
        <button className="theater-mode-btn ml-3" onClick={toggleTheaterMode}>
          Theater Mode
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
