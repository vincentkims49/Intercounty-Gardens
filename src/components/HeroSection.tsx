import React from 'react';

const HeroSection = () => {
  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = 'Phone number';
    const message = encodeURIComponent('Hi! I would like to request for a service. Can you help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative h-[400px] md:h-[500px] mb-8 md:mb-16">
      <img 
        src="/images/neg.png" 
        alt="Hero background" 
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          STAY, SAVOR, AND UNWIND AT
          <span className="text-orange-500 block">INTERCOUNTY GARDENS</span>
        </h1>
        <p className="text-white mb-6 max-w-2xl text-sm md:text-base">
          Experience the Flavors of Our Signature Dishes, Made with Love and Fresh Ingredients Without Leaving Your Doorstep
        </p>
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

export default HeroSection;