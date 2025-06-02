import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Video {
  id: string;
  title: string;
}

interface UploadedVideo {
  id: string;
  title: string;
  url: string;
}

interface VideoContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  uploadedVideos: UploadedVideo[];
  addUploadedVideo: (file: File, url: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [uploadedVideos, setUploadedVideos] = useState<UploadedVideo[]>([]);

  const addUploadedVideo = (file: File, url: string) => {
    const newVideo: UploadedVideo = {
      id: `local-${Date.now()}`,
      title: file.name,
      url
    };
    
    setUploadedVideos([...uploadedVideos, newVideo]);
  };

  return (
    <VideoContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        uploadedVideos, 
        addUploadedVideo 
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};