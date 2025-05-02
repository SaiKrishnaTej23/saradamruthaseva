import Image from 'next/image';
import { activitiesPage } from '../constants/content';
import { images } from '../constants/images';

export default function Activities() {
  const activities = [
    {
      title: activitiesPage.activities[0].title,
      description: activitiesPage.activities[0].description,
      image: images.activities.spiritual
    },
    {
      title: activitiesPage.activities[1].title,
      description: activitiesPage.activities[1].description,
      image: images.activities.education
    },
    {
      title: activitiesPage.activities[2].title,
      description: activitiesPage.activities[2].description,
      image: images.activities.community
    },
    {
      title: activitiesPage.activities[3].title,
      description: activitiesPage.activities[3].description,
      image: images.activities.environment
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-amber-900">
        <div className="absolute inset-0">
          <Image 
            src={images.about}
            alt="Activities Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {activitiesPage.hero.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            {activitiesPage.intro.title}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {activitiesPage.intro.description}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-700">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            {activitiesPage.cta.title}
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            {activitiesPage.cta.description}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            {activitiesPage.cta.button}
          </button>
        </div>
      </div>
    </div>
  );
} 