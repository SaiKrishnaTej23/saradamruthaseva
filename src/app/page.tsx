'use client';

// import { motion } from 'framer-motion';
// import { HeartIcon, CurrencyRupeeIcon, BuildingOfficeIcon, PhoneIcon, EnvelopeIcon, UserGroupIcon, AcademicCapIcon, GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { homePage } from './constants/content';
import { images } from './constants/images';

export default function Home() {
  const features = [
    {
      title: homePage.features.items[0].title,
      description: homePage.features.items[0].description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: homePage.features.items[1].title,
      description: homePage.features.items[1].description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: homePage.features.items[2].title,
      description: homePage.features.items[2].description,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Saradamrutha Seva Trust"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {homePage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {homePage.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                {homePage.hero.cta.donate}
              </Link>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                {homePage.hero.cta.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {homePage.features.title}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {homePage.features.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-amber-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {homePage.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {homePage.cta.description}
          </p>
          <Link
            href="/donate"
            className="bg-white text-amber-900 hover:bg-amber-50 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {homePage.cta.button}
          </Link>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              {homePage.updates.title}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {homePage.updates.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.updates.map((updateImage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={updateImage}
                    alt={`Latest Update ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Latest Event {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Brief description of the event and its impact on the community
                  </p>
                  <Link
                    href="/media"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    {homePage.updates.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
