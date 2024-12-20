import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuPage = () => {
  // Sample menu data - replace these with your actual image URLs
  const menus = [
    {
      id: 1,
      title: "Breakfast Menu",
      imageUrl: "/api/placeholder/800/1000", // Replace with your actual image URLs
      alt: "Breakfast Menu"
    },
    {
      id: 2,
      title: "Lunch Menu",
      imageUrl: "/api/placeholder/800/1000",
      alt: "Lunch Menu"
    },
    {
      id: 3,
      title: "Dinner Menu",
      imageUrl: "/api/placeholder/800/1000",
      alt: "Dinner Menu"
    },
    {
      id: 4,
      title: "Drinks Menu",
      imageUrl: "/api/placeholder/800/1000",
      alt: "Drinks Menu"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menus.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === menus.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Menus</h1>
        </div>
      </div>

      {/* Menu Carousel Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="relative">
          {/* Image Container */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
            <div className="relative aspect-[3/4] w-full">
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              
              {/* Menu Image */}
              <img
                src={menus[currentIndex].imageUrl}
                alt={menus[currentIndex].alt}
                onLoad={handleImageLoad}
                className={`w-full h-full object-contain transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between px-4">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label="Previous menu"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label="Next menu"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Title and Navigation Indicators */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {menus[currentIndex].title}
          </h2>

          {/* Menu Indicators */}
          <div className="flex justify-center space-x-2">
            {menus.map((menu, index) => (
              <button
                key={menu.id}
                onClick={() => {
                  setIsLoading(true);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-orange-600' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to ${menu.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Intercounty Gardens Hotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;