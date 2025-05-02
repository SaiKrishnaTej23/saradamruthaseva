import Image from 'next/image';
import { aboutPage } from '../constants/content';
import { images } from '../constants/images';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-amber-900">
        <div className="absolute inset-0">
          <Image 
            src={images.about}
            alt="About Us Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {aboutPage.hero.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">{aboutPage.story.title}</h2>
            {aboutPage.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[400px]">
            <Image
              src={images.temple.exterior}
              alt="About Saradamrutha Seva Trust"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{aboutPage.missionVision.mission.title}</h3>
            <p className="text-gray-700">
              {aboutPage.missionVision.mission.description}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{aboutPage.missionVision.vision.title}</h3>
            <p className="text-gray-700">
              {aboutPage.missionVision.vision.description}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">{aboutPage.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPage.values.items.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 