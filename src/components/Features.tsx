import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { featuresData } from '../data/mockData';

const Features: React.FC = () => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-text">Mengapa Memilih Hunian Kami?</h2>
          <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Kami menawarkan lebih dari sekadar tempat tinggal, kami memberikan kenyamanan.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-brand-surface rounded-xl shadow-md hover:shadow-xl hover:shadow-brand-red/20 transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={featureVariants}
              >
                <div className="inline-flex items-center justify-center bg-brand-red text-white p-3 rounded-full mb-4">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-brand-text-secondary">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
