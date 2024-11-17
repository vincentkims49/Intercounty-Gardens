import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationLink {
  label: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Contact Us', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavigationLinks = (className: string): JSX.Element[] =>
    navigationLinks.map((link) => (
      <Link
        key={link.label}
        to={link.href}
        className={`${className} hover:text-orange-500`}
      >
        {link.label}
      </Link>
    ));

  return (
    <nav className="relative flex items-center justify-between p-4">
      {/* Logo */}
      <div className="w-16 h-16">
        <img
          src="/api/placeholder/64/64"
          alt="Logo"
          className="w-full h-full object-contain"
        />
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
      <div className="hidden md:flex gap-6">{renderNavigationLinks('')}</div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4">{renderNavigationLinks('py-2')}</div>
        </div>
      )}
    </nav>
  );
};

export default Header;
