import React from 'react';
import { motion } from 'framer-motion';

const renterCategories = [
  { name: 'Pelajar', icon: '👨‍🎓' },
  { name: 'Mahasiswa', icon: '🎓' },
  { name: 'Pegawai', icon: '💼' },
  { name: 'Keluarga Kecil', icon: '👨‍👩‍👧‍👦' },
];

const durationCategories = [
  { name: 'Harian' },
  { name: 'Mingguan' },
  { name: 'Bulanan' },
  { name: 'Tahunan' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Categories: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-text">Fleksibel untuk Semua Kalangan</h2>
          <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Pilih durasi sewa dan kategori yang paling sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-brand-bg p-8 rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-brand-text mb-6 text-center">Kategori Penyewa</h3>
            <div className="grid grid-cols-2 gap-4">
              {renterCategories.map((cat, index) => (
                <motion.div key={index} variants={cardVariants} className="flex flex-col items-center p-4 bg-brand-surface rounded-lg shadow-sm hover:shadow-md hover:shadow-brand-red/20 hover:-translate-y-1 transition-all">
                  <span className="text-4xl mb-2">{cat.icon}</span>
                  <span className="font-semibold text-brand-text">{cat.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="bg-brand-bg p-8 rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-brand-text mb-6 text-center">Durasi Sewa</h3>
            <div className="grid grid-cols-2 gap-4">
              {durationCategories.map((cat, index) => (
                <motion.div key={index} variants={cardVariants} className="flex items-center justify-center p-4 bg-brand-surface rounded-lg shadow-sm hover:shadow-md hover:shadow-brand-red/20 hover:-translate-y-1 transition-all h-24">
                  <span className="font-semibold text-brand-text text-lg">{cat.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
