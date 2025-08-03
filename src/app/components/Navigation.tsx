'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from '../constants/content';
import { images } from '../constants/images';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled
    ? 'bg-white/80 backdrop-blur-sm shadow-md'
    : 'bg-transparent';

  const linkColor = isScrolled ? 'text-gray-800' : 'text-white';
  const logoTextColor = isScrolled ? 'text-amber-900' : 'text-white';
  const linkHover = isScrolled ? 'hover:bg-gray-200' : 'hover:bg-black/10';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-amber-500/50">
                <Image
                  src={images.logo}
                  alt="Saradamrutha Seva Trust Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${logoTextColor}`}>
                Saradamrutha Seva Trust
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${linkColor} ${linkHover}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate" className="ml-4">
              <button className="bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
                {navigation.donateButton}
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${linkColor} hover:bg-black/10`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:bg-amber-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate">
              <button className="w-full mt-2 bg-amber-600 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-amber-700 transition-colors">
                {navigation.donateButton}
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}