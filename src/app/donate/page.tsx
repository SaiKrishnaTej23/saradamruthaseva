'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { donatePage } from '../constants/content';
import { images } from '../constants/images';
import { GiftIcon, CalendarDaysIcon, UserIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

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

const optionIcons = [
  <GiftIcon className="w-10 h-10" />,
  <CalendarDaysIcon className="w-10 h-10" />,
  <UserIcon className="w-10 h-10" />
];

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={images.hero}
            alt="Donation Hero"
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
            {donatePage.hero.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-amber-900 mb-4">
              {donatePage.intro.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {donatePage.intro.description}
            </p>
          </motion.div>

          {/* Donation Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
            {donatePage.options.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
              >
                <div className="text-amber-600 mb-5">{optionIcons[index]}</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-4xl font-extrabold text-amber-800 mb-4">
                  {option.amount}
                </p>
                <p className="text-gray-600 mb-6 flex-grow">
                  {option.description}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full mt-auto bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl font-extrabold text-amber-900 mb-6">
                {donatePage.otherWays.title}
              </h3>
              <ul className="space-y-5">
                {donatePage.otherWays.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images.donation}
                alt="Impact of Donations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-4 rounded-lg shadow-2xl max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-3 -right-3 text-white bg-amber-600 rounded-full p-1.5 z-10"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="relative w-full aspect-square">
                <Image
                  src={images.donation}
                  alt="Support Our Mission"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}