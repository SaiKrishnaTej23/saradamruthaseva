'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { contactPage } from '../constants/content';
import { images } from '../constants/images';
import { ReactNode } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

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

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number;
}

const InputField = ({ id, name, label, type = 'text', required = true, rows = 4 }: InputFieldProps) => (
  <motion.div variants={fadeInUp} className="relative">
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      placeholder=" "
      className="block w-full px-4 py-3 bg-white/5 border border-amber-500/30 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-amber-500 peer"
      {...(type === 'textarea' ? { rows } : {})}
    />
    <label
      htmlFor={id}
      className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-amber-50 px-2 peer-focus:px-2 peer-focus:text-amber-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    >
      {label}
    </label>
  </motion.div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image 
            src={images.temple.exterior}
            alt="Contact Hero"
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
            {contactPage.hero.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl font-extrabold text-amber-900 mb-6">
                {contactPage.form.title}
              </h2>
              <form className="space-y-6">
                <InputField id="name" name="name" label={contactPage.form.fields.name} />
                <InputField id="email" name="email" type="email" label={contactPage.form.fields.email} />
                <InputField id="subject" name="subject" label={contactPage.form.fields.subject} />
                <InputField id="message" name="message" type="textarea" label={contactPage.form.fields.message} />
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
                >
                  {contactPage.form.button}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-extrabold text-amber-900 mb-6">
                {contactPage.info.title}
              </h2>
              <div className="flex items-start">
                <MapPinIcon className="h-8 w-8 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{contactPage.info.address.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    {contactPage.info.address.lines.join(', ')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-8 w-8 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{contactPage.info.phone.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    {contactPage.info.phone.numbers.join(' / ')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-8 w-8 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{contactPage.info.email.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                     {contactPage.info.email.addresses.join(' / ')}
                  </p>
                </div>
              </div>
               <div className="mt-8 pt-8 border-t border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{contactPage.social.title}</h3>
                 <div className="flex space-x-6">
                   {contactPage.social.platforms.map((platform, index) => (
                     <a key={index} href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                       <span className="sr-only">{platform}</span>
                       {/* You would typically use a library like react-icons here */}
                       <div className="h-8 w-8 border border-gray-400 rounded-full flex items-center justify-center">
                         {platform.substring(0,1)}
                       </div>
                     </a>
                   ))}
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}