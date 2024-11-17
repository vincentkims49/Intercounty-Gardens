import React from 'react';

const services = [
  {
    title: 'Bar',
    description:
      "At our lively bar, you'll find a wide selection of cocktails and spirits, perfect for unwinding and enjoying great company."
  },
  {
    title: 'Restaurant',
    description:
      'Our restaurant serves fresh, locally-inspired cuisine crafted to delight every palate.'
  },
  {
    title: 'Accommodation',
    description:
      'Our cozy accommodations offer a peaceful and comfortable stay for every guest.'
  }
];

const ServicesSection: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 mb-8 md:mb-16">
    {services.map((service) => (
      <div key={service.title} className="text-center">
        <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 md:w-48 h-32 md:h-48">
          <img
            src="/api/placeholder/200/200"
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
      </div>
    ))}
  </section>
);

export default ServicesSection;
