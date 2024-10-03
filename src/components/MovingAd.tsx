import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const MovingAd = () => {
  return (
    <motion.div
      className="bg-yellow-400 p-2 text-black flex items-center justify-center"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <FaWhatsapp className="mr-2 text-green-600" />
      <span>تواصل معنا على الواتساب: 123456789</span>
    </motion.div>
  );
};

export default MovingAd;