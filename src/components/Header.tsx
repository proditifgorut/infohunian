import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Kelebihan', href: '#features' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Lokasi', href: '#location' },
  ];

  return (
    <header className="bg-brand-bg/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-brand-text">
            <div className="bg-brand-surface p-2 rounded-lg">
                <Home className="h-6 w-6 text-brand-red" />
            </div>
            <span>HunianNyaman</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-brand-text-secondary hover:text-brand-red transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#booking" className="bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-red-dark transition-colors">
              Pesan Sekarang
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-text">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-base font-semibold text-brand-text-secondary hover:text-brand-red transition-colors py-2">
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsOpen(false)} className="w-full mt-2 text-center bg-brand-red text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-brand-red-dark transition-colors block">
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
