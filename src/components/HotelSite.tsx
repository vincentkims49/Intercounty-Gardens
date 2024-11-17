import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';

interface FormDataType {
  name: string;
  email: string;
  message: string;
  rating: number;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/contact", label: "Contact Us" }
];

const HotelSite: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    message: '',
    rating: 0
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavigationLinks = (className: string) => (
    navigationLinks.map(link => (
      <a 
        key={link.label}
        href={link.href}
        className={`${className} hover:text-orange-500`}
      >
        {link.label}
      </a>
    ))
  );

  return (
    <div className="max-w-6xl mx-auto font-sans">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-4">
        <div className="w-16 h-16">
          <img src="/api/placeholder/64/64" alt="Logo" className="w-full h-full object-contain" />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {renderNavigationLinks("")}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4">
              {renderNavigationLinks("py-2")}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] mb-8 md:mb-16">
        <img 
          src="/api/placeholder/1200/500" 
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
          <button className="bg-red-600 text-white px-6 py-2 rounded w-fit hover:bg-red-700">
            Book now / Order Now
          </button>
        </div>
      </div>

      {/* About Section */}
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

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 mb-8 md:mb-16">
        {[
          {
            title: "Bar",
            description: "At our lively bar, you'll find a wide selection of cocktails and spirits, perfect for unwinding and enjoying great company."
          },
          {
            title: "Restaurant",
            description: "Our restaurant serves fresh, locally-inspired cuisine crafted to delight every palate."
          },
          {
            title: "Accommodation",
            description: "Our cozy accommodations offer a peaceful and comfortable stay for every guest."
          }
        ].map((service) => (
          <div key={service.title} className="text-center">
            <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 md:w-48 h-32 md:h-48">
              <img src="/api/placeholder/200/200" alt={service.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="px-4 md:px-8 mb-8 md:mb-16">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded mb-4 h-32"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <div className="mb-4">
            <p className="mb-2">Rate Us</p>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({...formData, rating: star})}
                  className={`text-2xl ${star <= formData.rating ? 'text-orange-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded w-full hover:bg-red-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h4 className="font-bold mb-4">Address</h4>
            <p className="mb-2 text-sm md:text-base">900 Sterling Bank Boulevard</p>
            <p className="mb-2 text-sm md:text-base">Opp. Itwo Place, Behind Fraser Suite, Central Area, Abuja</p>
            <p className="text-sm md:text-base">09099125608</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm md:text-base">
          ©2024 by CodeChiefs Ltd
        </div>
      </footer>
    </div>
  );
};

export default HotelSite;