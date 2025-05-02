'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeartIcon, CurrencyRupeeIcon, BuildingOfficeIcon, PhoneIcon, EnvelopeIcon, UserGroupIcon, BookOpenIcon, AcademicCapIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/trust-placeholder.jpg')] bg-cover bg-center" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Saradamrutha Seva Trust</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering Lives Through Service</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Support Our Cause
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Education', 
                icon: AcademicCapIcon, 
                description: 'Providing quality education and scholarships to underprivileged children, ensuring no child is left behind in their pursuit of knowledge.' 
              },
              { 
                title: 'Healthcare', 
                icon: HeartIcon, 
                description: 'Offering medical assistance, health camps, and awareness programs to improve community health and well-being.' 
              },
              { 
                title: 'Community Development', 
                icon: UserGroupIcon, 
                description: 'Empowering communities through skill development, livelihood programs, and sustainable development initiatives.' 
              },
            ].map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-amber-50 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mission.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Educational Support Program',
                description: 'Scholarships, school supplies, and educational resources for deserving students.',
                impact: '1000+ students supported annually'
              },
              {
                title: 'Health & Wellness Initiative',
                description: 'Regular health camps, medical assistance, and awareness programs.',
                impact: '5000+ beneficiaries served'
              },
              {
                title: 'Community Empowerment',
                description: 'Skill development workshops and livelihood training programs.',
                impact: '200+ families empowered'
              },
              {
                title: 'Women Empowerment',
                description: 'Vocational training and support for women to achieve financial independence.',
                impact: '300+ women trained'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-amber-600 font-semibold">{program.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Support Our Cause</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'One-time Donation', amount: '₹500', icon: GiftIcon, description: 'Support our ongoing initiatives' },
              { title: 'Monthly Support', amount: '₹5,000', icon: CurrencyRupeeIcon, description: 'Become a regular contributor' },
              { title: 'Project Sponsorship', amount: '₹10,000', icon: BuildingOfficeIcon, description: 'Sponsor a specific program' },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-amber-50 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-2xl font-bold text-amber-600 mb-4">{option.amount}</p>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                  Donate
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Trust</h2>
              <p className="text-gray-700 mb-4">
                Saradamrutha Seva Trust is a registered charitable organization dedicated to serving humanity through various social welfare initiatives. 
                Founded with the vision of creating a better society, we focus on education, healthcare, and community development.
              </p>
              <p className="text-gray-700 mb-4">
                Our trust operates with complete transparency and accountability, ensuring that every contribution directly benefits those in need. 
                We believe in sustainable development and work closely with local communities to create lasting impact.
              </p>
              <p className="text-gray-700">
                Your support helps us continue our mission of empowering lives and building a better future for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-gray-200 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Trust Address</h3>
              <p className="text-gray-700 mb-6">
                123 Service Street<br />
                Community City, CC 12345<br />
                India
              </p>
              <div className="flex items-center text-gray-700 mb-4">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center text-gray-700">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <span>contact@saradamruthaseva.org</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Saradamrutha Seva Trust. All rights reserved.</p>
          <p className="text-amber-200">Service to Humanity is Service to God</p>
        </div>
      </footer>
    </div>
  );
}
