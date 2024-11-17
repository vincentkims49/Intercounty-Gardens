import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';



  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254700000000', '_blank');
  };

const ContactUs: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
  {/* Hero Section with Mission */}
  <div className="bg-orange-600 text-white py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Intercounty Gardens Hotel</h1>
    </div>
  </div>

  {/* Mission Section */}
  <div className="bg-white py-12 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
      <p className="text-lg text-gray-800">
        To provide exceptional hospitality experiences through personalized service, 
        luxurious accommodations, and authentic local experiences, ensuring every guest 
        feels at home while exploring the beauty of our region.
      </p>
    </div>
  </div>
     {/* Vission Section */}
     <div className="bg-white py-12 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vission</h2>
      <p className="text-lg text-gray-800">
      To be the leading hospitality destination in East Africa, recognized for 
          our commitment to excellence, sustainability, and creating unforgettable 
          memories for our guests while contributing to our community's growth and 
          development.
      </p>
    </div>
  </div>
    

  {/* Main Content Section */}
  <div className="max-w-6xl mx-auto py-12 px-4">
    <div className="grid md:grid-cols-2 gap-12">
   

      {/* Location and Contact Details */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Location & Contact</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-600">
                123 Garden Avenue<br />
                Central Business District<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">+254 700 000 000</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600">info@intercountygardens.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="pt-6 border-t">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800 transition-colors"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="text-orange-600 hover:text-orange-800 transition-colors"
              >
                <svg 
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
);

export default ContactUs;

