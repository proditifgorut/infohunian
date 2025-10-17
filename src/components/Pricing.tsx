import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pricingData } from '../data/mockData';
import { Price } from '../types';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
};

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Price>(pricingData[0]);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-text">Harga Sewa Dinamis & Transparan</h2>
          <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Pilih kategori penyewa untuk melihat harga yang sesuai.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {pricingData.map((item) => (
            <button
              key={item.category}
              onClick={() => setSelectedCategory(item)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors ${
                selectedCategory.category === item.category
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-brand-bg text-brand-text-secondary hover:bg-gray-700'
              }`}
            >
              {item.icon} {item.category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-bg rounded-xl shadow-lg p-6 sm:p-8 overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-brand-surface rounded-lg">
                  <p className="text-sm text-brand-text-secondary">Harian</p>
                  <p className="text-2xl font-bold text-brand-text">{formatCurrency(selectedCategory.daily)}</p>
                </div>
                <div className="p-4 bg-brand-surface rounded-lg">
                  <p className="text-sm text-brand-text-secondary">Mingguan</p>
                  <p className="text-2xl font-bold text-brand-text">{formatCurrency(selectedCategory.weekly)}</p>
                </div>
                <div className="p-4 bg-brand-surface rounded-lg">
                  <p className="text-sm text-brand-text-secondary">Bulanan</p>
                  <p className="text-2xl font-bold text-brand-text">{formatCurrency(selectedCategory.monthly)}</p>
                </div>
                <div className="p-4 bg-brand-surface rounded-lg">
                  <p className="text-sm text-brand-text-secondary">Tahunan</p>
                  <p className="text-2xl font-bold text-brand-text">{formatCurrency(selectedCategory.yearly)}</p>
                </div>
              </div>
              <div className="mt-8 text-center space-y-3 sm:space-y-0 sm:space-x-4">
                <p className="text-green-300 font-semibold bg-green-500/20 px-4 py-2 rounded-full inline-block">🎉 Promo Mingguan: Hemat hingga 15%!</p>
                <p className="text-purple-300 font-semibold bg-purple-500/20 px-4 py-2 rounded-full inline-block">💎 Sewa Tahunan Gratis 1 Bulan!</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
