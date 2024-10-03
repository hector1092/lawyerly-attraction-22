import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const MovingAd = () => {
  return (
    <motion.div
      className="bg-gold-500 p-2 text-black flex items-center justify-center overflow-hidden"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "linear"
      }}
    >
      <FaWhatsapp className="mr-2 text-green-600" />
      <span>تواصل معنا على الواتساب: 123456789</span>
    </motion.div>
  );
};

export default MovingAd;