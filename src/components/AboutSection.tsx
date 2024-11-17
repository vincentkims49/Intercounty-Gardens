import React from 'react';

const AboutSection: React.FC = () => (
    <section className="px-4 md:px-8 mb-8 md:mb-16">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
      Who We Are & <span className="text-red-600">What We Do</span>
    </h2>
    <p className="text-gray-700 text-center max-w-4xl mx-auto text-sm md:text-base">
      At Intercounty Gardens Hotel, we offer a welcoming retreat with comfortable accommodations, 
      delicious locally-sourced meals, and a vibrant bar for unwinding. Each room is designed 
      for relaxation, and our restaurant serves carefully crafted dishes that highlight the 
      finest ingredients from local farmers.
    </p>
  </section>
);

export default AboutSection;
