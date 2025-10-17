import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-bg pt-20 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-5" 
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2874&auto=format&fit=crop" 
          alt="Modern house background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text tracking-tight leading-tight">
            Hunian Nyaman Tipe 36
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-brand-text-secondary">
            Sewa Fleksibel, Harga Bersahabat, Lokasi Strategis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#booking" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-red-dark transition-transform hover:scale-105 shadow-lg shadow-brand-red/20">
            Pesan Sekarang
            <ArrowRight size={20} />
          </a>
          <a href="#pricing" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-surface text-brand-text px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-transform hover:scale-105 border border-gray-700 shadow-lg">
            <Calendar size={20} />
            Lihat Ketersediaan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
