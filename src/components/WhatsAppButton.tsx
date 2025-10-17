import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/6283119226089"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-brand-red hover:bg-brand-red-dark text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquare size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
