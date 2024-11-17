import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => (
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
    <div className="text-center mt-8 text-sm md:text-base">©2024 by CodeChiefs Ltd</div>
  </footer>
);

export default Footer;
