import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface UploadSectionProps {
  onVideoUpload: (file: File, url: string) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onVideoUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onVideoUpload(file, url);
    }
  };

  return (
    <div className="upload-section">
      <input 
        id="upload-video" 
        type="file" 
        accept="video/*" 
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button 
        id="custom-upload-button"
        onClick={() => document.getElementById('upload-video')?.click()}
      >
        <Upload size={20} /> Upload Files
      </button>
    </div>
  );
};

export default UploadSection;