import Image from 'next/image';
import { mediaPage } from '../constants/content';
import { images } from '../constants/images';

export default function Media() {
  const mediaItems = [
    {
      ...mediaPage.items[0],
      image: images.media.retreat
    },
    {
      ...mediaPage.items[1],
      image: images.media.service
    },
    {
      ...mediaPage.items[2],
      image: images.media.workshop
    },
    {
      ...mediaPage.items[3],
      image: images.media.discourse
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-amber-900">
        <div className="absolute inset-0">
          <Image 
            src={images.about}
            alt="Media Gallery Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {mediaPage.hero.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-full bg-amber-600 text-white">
              {mediaPage.filters.all}
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-amber-900 hover:bg-amber-100">
              {mediaPage.filters.photos}
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-amber-900 hover:bg-amber-100">
              {mediaPage.filters.videos}
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-amber-900">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            {mediaPage.loadMore}
          </button>
        </div>
      </div>
    </div>
  );
} 