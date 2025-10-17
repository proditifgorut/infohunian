import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, MapPin } from 'lucide-react';
import { gorontaloLocations } from '../data/mockData';

const QuickBooking: React.FC = () => {
  return (
    <section id="booking" className="py-16 sm:py-24 bg-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto bg-brand-bg text-white p-8 sm:p-12 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-text">Cari Hunian Nyaman dan Murah?</h2>
            <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Booking cepat hanya 3 langkah — pilih, pesan, langsung tinggal!</p>
          </div>
          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-brand-text-secondary mb-2">Lokasi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select id="location" className="w-full bg-brand-surface border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-brand-red focus:border-brand-red">
                  {gorontaloLocations.map(loc => <option key={loc}>{loc}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="check-in" className="block text-sm font-medium text-brand-text-secondary mb-2">Check-in & Check-out</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" id="check-in" placeholder="Pilih Tanggal" className="w-full bg-brand-surface border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-brand-red focus:border-brand-red"/>
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-brand-text-secondary mb-2">Kategori Penyewa</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select id="category" className="w-full bg-brand-surface border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-brand-red focus:border-brand-red">
                  <option>Pelajar</option>
                  <option>Mahasiswa</option>
                  <option>Pegawai</option>
                  <option>Keluarga Kecil</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-brand-red text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-brand-red-dark transition-colors flex items-center justify-center gap-2">
              Amankan Hunian
              <ArrowRight size={20} />
            </button>
          </form>
          <p className="text-center mt-8 text-sm text-brand-text-secondary">
            💬 Jangan tunggu rumah nyaman ini diambil orang lain. Klik dan amankan hunian impian Anda hari ini!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickBooking;
