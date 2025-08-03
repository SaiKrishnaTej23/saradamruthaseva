'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutPage } from '../constants/content';
import { images } from '../constants/images';
import { ReactNode } from 'react';
import { HeartIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Section = ({ children, className }: { children: ReactNode, className?: string }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

const valueIcons = [
  <HeartIcon className="w-10 h-10" />,
  <SparklesIcon className="w-10 h-10" />,
  <ScaleIcon className="w-10 h-10" />
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={images.about}
            alt="About Us Hero"
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
            {aboutPage.hero.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-extrabold text-amber-900 mb-6">{aboutPage.story.title}</h2>
              {aboutPage.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images.temple.exterior}
                alt="About Saradamrutha Seva Trust"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">{aboutPage.missionVision.mission.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutPage.missionVision.mission.description}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">{aboutPage.missionVision.vision.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutPage.missionVision.vision.description}
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-amber-900 mb-16 text-center">{aboutPage.values.title}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {aboutPage.values.items.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-amber-50 p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-amber-600 mb-5 inline-block p-4 bg-amber-100 rounded-full">
                  {valueIcons[index]}
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}