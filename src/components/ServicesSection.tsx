import React from 'react';

const services = [
  {
    image: '/images/bar.jpg',
    title: 'Bar',
    description:
      "At our lively bar, you'll find a wide selection of cocktails and spirits, perfect for unwinding and enjoying great company."
  },
  {
    image: '/images/restaurant.jpg',
    title: 'Restaurant',
    description:
      'Our restaurant serves fresh, locally-inspired cuisine crafted to delight every palate.'
  },
  {
    image: '/images/accomodation.jpeg',
    title: 'Accommodation',
    description:
      'Our cozy accommodations offer a peaceful and comfortable stay for every guest.'
  }
];
const handleWhatsAppRedirect = () => {
  // Replace with your actual WhatsApp business number
  const phoneNumber = '+254784555654';
  const message = encodeURIComponent('Hi! I would like to request for a service.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
const ServicesSection: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 mb-8 md:mb-16">
    {services.map((service) => (
      <div key={service.title} className="text-center">
        <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 md:w-48 h-32 md:h-48">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
      </div>
    ))}
    
    {/* Call to Action */}
       <div className="col-span-full flex justify-center items-center w-full h-full mt-2">
      <button 
        onClick={handleWhatsAppRedirect}
        className="bg-red-600 text-white px-6 py-2 rounded w-fit hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2"
      >
        Book now / Order Now
      </button>
    </div>
  </section>
);

export default ServicesSection;
