import React from 'react';
import { Map as MapIcon } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brand-text">📍 Lokasi Kami di Limboto, Gorontalo</h2>
          <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Hunian strategis dekat pusat kota Limboto — akses mudah ke kampus, pasar, dan jalan utama.</p>
        </div>
        
        <div className="text-center">
            <a 
                href="https://www.google.com/maps?q=Limboto,+Kabupaten+Gorontalo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-brand-red-dark transition-transform hover:scale-105 shadow-lg shadow-brand-red/20"
            >
                <MapIcon size={20} />
                Lihat di Google Maps
            </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
