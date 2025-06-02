import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import UploadSection from '../components/UploadSection';
import CommentBox from '../components/CommentBox';

interface UploadedVideo {
  id: string;
  title: string;
  url: string;
}

const HomePage: React.FC = () => {
  const [uploadedVideos, setUploadedVideos] = useState<UploadedVideo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search events from the header
  React.useEffect(() => {
    const handleSearch = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSearchQuery(customEvent.detail);
    };

    window.addEventListener('search', handleSearch);
    return () => {
      window.removeEventListener('search', handleSearch);
    };
  }, []);

  const handleVideoUpload = (file: File, url: string) => {
    const newVideo: UploadedVideo = {
      id: `local-${Date.now()}`,
      title: file.name,
      url
    };
    
    setUploadedVideos([...uploadedVideos, newVideo]);
  };

  // Filter videos based on search query
  const filteredVideos = uploadedVideos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <UploadSection onVideoUpload={handleVideoUpload} />
      
      <div className="container" id="uploaded-videos-container">
        {filteredVideos.map(video => (
          <VideoCard 
            key={video.id}
            title={video.title}
            isLocalVideo={true}
            videoUrl={video.url}
          />
        ))}
      </div>
      
      <CommentBox 
        title="مرحبًا بك"
        message="لذلك هذا الموقع هو عبارة عن مكتبة أولية لتصفية محتوى اليوتيوب من كل ما يخالف ديننا وأخلاقنا"
        isHomePage={true}
      />
    </div>
  );
};

export default HomePage;