'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { mediaPage } from '../constants/content';
import { images } from '../constants/images';
import { ReactNode, useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Section = ({ children, className }: { children: ReactNode, className?: string }) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className={className}
  >
    {children}
  </motion.section>
);

type FilterType = 'All' | 'Photos' | 'Videos';

export default function Media() {
  const [filter, setFilter] = useState<FilterType>('All');

  const mediaItems = images.mediaImages.map((img, i) => ({
    type: i % 4 === 0 ? 'video' : 'image', // Mock data: every 4th item is a video
    src: img,
    title: mediaPage.items[i % mediaPage.items.length].title,
    date: mediaPage.items[i % mediaPage.items.length].date,
  }));

  const filteredMedia = mediaItems.filter(item => {
    if (filter === 'All') return true;
    return item.type === filter.slice(0, -1).toLowerCase();
  });

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={images.media.retreat}
            alt="Media Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-extrabold text-white text-center text-shadow-lg"
          >
            {mediaPage.hero.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-16">
            <div className="flex space-x-2 p-1.5 bg-amber-100 rounded-full">
              {(['All', 'Photos', 'Videos'] as FilterType[]).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    filter === f ? 'bg-amber-600 text-white shadow' : 'text-amber-800 hover:bg-amber-200'
                  }`}
                >
                  {mediaPage.filters[f.toLowerCase() as keyof typeof mediaPage.filters]}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            key={filter} // Re-trigger animation on filter change
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMedia.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="relative h-72">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <VideoCameraIcon className="w-16 h-16 text-white/80" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-amber-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              {mediaPage.loadMore}
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}