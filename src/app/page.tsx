'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { homePage } from './constants/content';
import { images } from './constants/images';
import { ReactNode } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const features = [
    {
      title: homePage.features.items[0].title,
      description: homePage.features.items[0].description,
      icon: <BookOpenIcon className="w-10 h-10" />
    },
    {
      title: homePage.features.items[1].title,
      description: homePage.features.items[1].description,
      icon: <UserGroupIcon className="w-10 h-10" />
    },
    {
      title: homePage.features.items[2].title,
      description: homePage.features.items[2].description,
      icon: <AcademicCapIcon className="w-10 h-10" />
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Saradamrutha Seva Trust"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center text-white max-w-4xl px-4"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-extrabold mb-6 text-shadow-lg">
              {homePage.hero.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-shadow">
              {homePage.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/donate"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                >
                  {homePage.hero.cta.donate}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
                >
                  {homePage.hero.cta.learnMore}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-4">
              {homePage.features.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {homePage.features.subtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-amber-50 p-8 rounded-xl shadow-lg text-center transition-all duration-300"
              >
                <div className="text-amber-600 mb-5 inline-block p-4 bg-amber-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-amber-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold mb-4">
            {homePage.cta.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            {homePage.cta.description}
          </motion.p>
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/donate"
              className="bg-white text-amber-900 hover:bg-amber-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-lg"
            >
              {homePage.cta.button}
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Latest Updates */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-4">
              {homePage.updates.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {homePage.updates.subtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {images.mediaImages.filter((_, index) => index < 3).map((updateImage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group"
              >
                <div className="relative h-56">
                  <Image
                    src={updateImage}
                    alt={`Latest Update ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Latest Event {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the event and its impact on the community
                  </p>
                  <Link
                    href="/media"
                    className="text-amber-600 hover:text-amber-700 font-semibold group-hover:text-amber-500 transition-colors"
                  >
                    {homePage.updates.readMore}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
