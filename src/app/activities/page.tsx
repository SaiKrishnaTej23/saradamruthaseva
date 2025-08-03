'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { activitiesPage } from '../constants/content';
import { images } from '../constants/images';
import { ReactNode } from 'react';
import Link from 'next/link';
import { SparklesIcon, AcademicCapIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Section = ({ children, className }: { children: ReactNode, className?: string }) => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.section>
);

const activityIcons = [
  <SparklesIcon className="w-8 h-8 mr-4 text-amber-600" />,
  <AcademicCapIcon className="w-8 h-8 mr-4 text-amber-600" />,
  <UserGroupIcon className="w-8 h-8 mr-4 text-amber-600" />,
  <GlobeAltIcon className="w-8 h-8 mr-4 text-amber-600" />
];

const activityImages = [
  images.activities.spiritual,
  images.activities.education,
  images.activities.community,
  images.activities.environment
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={images.activities.community}
            alt="Activities Hero"
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
            {activitiesPage.hero.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-4">
              {activitiesPage.intro.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {activitiesPage.intro.description}
            </p>
          </motion.div>

          {/* Activities List */}
          <div className="space-y-20">
            {activitiesPage.activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative h-96 rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={activityImages[index]}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    {activityIcons[index]}
                    <h3 className="text-3xl font-bold text-amber-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-amber-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold mb-4">
            {activitiesPage.cta.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            {activitiesPage.cta.description}
          </motion.p>
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-amber-900 hover:bg-amber-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-lg"
            >
              {activitiesPage.cta.button}
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}