"use client"
import Image from 'next/image';
import { mediaPage } from '../constants/content';
import { images } from '../constants/images';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Media() {
  
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-amber-900">
        <div className="absolute inset-0">
          <Image 
            src={images.about}
            alt="Media Gallery Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {mediaPage.hero.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-full bg-amber-600 text-white">
              {mediaPage.filters.all}
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-amber-900 hover:bg-amber-100">
              {mediaPage.filters.photos}
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-amber-900 hover:bg-amber-100">
              {mediaPage.filters.videos}
            </button>
          </div>
        </div>

        <Carousel responsive={responsive}>
        {images.mediaImages.map((src, idx) => (
          <div key={idx} className="relative h-64 w-full">
            <Image
              src={src}
              alt={`Media ${idx + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            {mediaPage.loadMore}
          </button>
        </div>
      </div>
    </div>
  );
} 