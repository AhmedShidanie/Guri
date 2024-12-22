import React, { useState } from 'react';
import { PropertyMedia } from '../models/property.model';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

interface PropertyMediaViewerProps {
  media: PropertyMedia[];
}

export default function PropertyMediaViewer({ media }: PropertyMediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentMedia = media[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-full">
      {currentMedia.type === 'video' ? (
        <div className="relative w-full h-full">
          <video
            src={currentMedia.url}
            className="w-full h-full object-cover"
            poster={currentMedia.thumbnail}
            controls={isPlaying}
            onClick={() => setIsPlaying(!isPlaying)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                className="p-6 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                onClick={() => setIsPlaying(true)}
              >
                <FaPlay className="w-8 h-8 text-white" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <img
          src={currentMedia.url}
          alt="Property"
          className="w-full h-full object-cover"
        />
      )}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={goToPrevious}
      >
        <FaChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        onClick={goToNext}
      >
        <FaChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Media indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {media.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}