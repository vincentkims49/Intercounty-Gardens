import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuPage: React.FC = () => {
  const menus = [
    {
      id: 1,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/1.jpg",
      alt: "Breakfast Menu",
    },
    {
      id: 2,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/2.jpg",
      alt: "Lunch Menu",
    },
    {
      id: 3,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/3.jpg",
      alt: "Dinner Menu",
    },
    {
      id: 4,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/4.jpg",
      alt: "Drinks Menu",
    },   {
      id: 5,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/5.jpg",
      alt: "Drinks Menu",
    },   {
      id: 6,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/6.jpg",
      alt: "Drinks Menu",
    },   {
      id: 7,
      imageUrl: "/images/INTERCOUNTY GARDENS HOTEL/7.jpg",
      alt: "Drinks Menu",
    },
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
  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '+254784555654';
    const message = encodeURIComponent('Hi! I would like to request for a service.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center mb-0">MENU</h1>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
            <div className="relative aspect-[3/4] w-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <img
                src={menus[currentIndex].imageUrl}
                alt={menus[currentIndex].alt}
                onLoad={handleImageLoad}
                className={`w-full h-full object-contain transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between px-4">
              <button
                onClick={goToPrevious}
                className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 absolute left-0"
                aria-label="Previous menu"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 absolute right-0"
                aria-label="Next menu"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
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
                    ? "bg-orange-600"
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
                aria-label={`Go to menu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="col-span-full flex justify-center items-center w-full h-full mt-2">
      <button 
        onClick={handleWhatsAppRedirect}
        className="bg-red-600 text-white px-6 py-2 rounded w-fit hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2"
      >
        Book now / Order Now
      </button>
    </div>
    </div>
  );
};

export default MenuPage;
