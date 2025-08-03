'use client';
import { useState } from 'react';
import Image from 'next/image';
import { donatePage } from '../constants/content';
import { images } from '../constants/images';

export default function Donate() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-amber-900">
        <div className="absolute inset-0">
          <Image 
            src={images.hero}
            alt="Donation Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {donatePage.hero.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            {donatePage.intro.title}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {donatePage.intro.description}
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donatePage.options.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                {option.title}
              </h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">
                {option.amount}
              </div>
              <p className="text-gray-700 mb-6">
                {option.description}
              </p>
              <ul className="space-y-2 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                onClick={() => setOpen(true)}
              >
                {donatePage.hero.title}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              {donatePage.otherWays.title}
            </h3>
            <ul className="space-y-4">
              {donatePage.otherWays.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={images.donation}
              alt="Impact of Donations"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            &#10005;
          </button>
          <div className="relative w-full h-full">
            <Image
              src={images.donation}
              alt="Support Our Mission"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}