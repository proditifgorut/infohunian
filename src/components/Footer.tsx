import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-brand-text">
              <div className="bg-brand-surface p-2 rounded-lg">
                <Home className="h-6 w-6 text-brand-red" />
              </div>
              <span>HunianNyaman</span>
            </div>
            <p className="mt-4 text-brand-text-secondary max-w-xs">
              Kami percaya setiap orang berhak tinggal di hunian yang nyaman dan fleksibel. Kami hadir untuk memudahkan Anda menemukan rumah ideal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-text">Tautan Cepat</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="text-brand-text-secondary hover:text-brand-red transition-colors">Kelebihan</a></li>
              <li><a href="#pricing" className="text-brand-text-secondary hover:text-brand-red transition-colors">Harga</a></li>
              <li><a href="#testimonials" className="text-brand-text-secondary hover:text-brand-red transition-colors">Testimoni</a></li>
              <li><a href="#booking" className="text-brand-text-secondary hover:text-brand-red transition-colors">Booking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-text">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-red"/>
                <a href="mailto:infohunian@unisgu.ac.id" className="text-brand-text-secondary hover:text-brand-red transition-colors">infohunian@unisgu.ac.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-red"/>
                <a href="tel:+6283119226089" className="text-brand-text-secondary hover:text-brand-red transition-colors">+62 831-1922-6089</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-surface pt-8 text-center text-brand-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} HunianNyaman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
