import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-black text-white px-4 md:px-8 py-8 md:py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div>
        <h4 className="font-bold mb-4">Address</h4>
        <p className="mb-2 text-sm md:text-base">Kitui county</p>
        <p className="mb-2 text-sm md:text-base">intercountygardenshotel@gmail.com</p>
        <p className="text-sm md:text-base">+254784555654</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/share/17reiN11vW/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-400 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/intercountygardenshotel?igsh=MTZpeHp6ZXN0eHQ3Ng=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 text-sm md:text-base">©2024 by CodeChiefs Ltd</div>
  </footer>
);

export default Footer;
