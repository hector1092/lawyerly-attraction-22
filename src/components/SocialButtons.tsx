import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const SocialButtons = () => {
  return (
    <motion.div
      className="flex justify-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Button className="mx-2 bg-blue-600 hover:bg-blue-700">
        <FaFacebookF className="mr-2" /> فيسبوك
      </Button>
      <Button className="mx-2 bg-green-500 hover:bg-green-600">
        <FaWhatsapp className="mr-2" /> واتساب
      </Button>
    </motion.div>
  );
};

export default SocialButtons;