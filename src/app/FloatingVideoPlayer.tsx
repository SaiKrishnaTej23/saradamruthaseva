'use client'
import { useState } from 'react';

export default function FloatingVideoPlayer({ videoId }: { videoId: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative sm:fixed sm:bottom-4 sm:right-4 z-50 rounded-lg shadow-lg flex flex-col items-end w-[90vw] max-w-[300px] sm:w-[60vw] sm:max-w-[340px] md:max-w-[360px] bg-white p-2">
      <button
        className="text-gray-500 hover:text-gray-700 mb-1"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        &#10005;
      </button>
      <div className="w-full aspect-[9/16]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
          title="YouTube Shorts video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded w-full h-full"
        />
      </div>
    </div>
  );
}