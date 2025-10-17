import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

const Testimonials: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-text">Apa Kata Mereka?</h2>
          <p className="mt-3 text-lg text-brand-text-secondary max-w-2xl mx-auto">Pengalaman nyata dari para penghuni yang telah merasakan kenyamanan hunian kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-brand-surface p-8 rounded-xl shadow-lg flex flex-col"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex text-brand-red mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <blockquote className="text-brand-text-secondary italic flex-grow">"{testimonial.quote}"</blockquote>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-semibold text-brand-text">{testimonial.name}</p>
                  <p className="text-sm text-brand-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
