import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gold-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        مكتبة الصور
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add your photo gallery items here */}
        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
          <img src="/placeholder-image.jpg" alt="صورة توضيحية" className="w-full h-64 object-cover rounded mb-4" />
          <p className="text-center">وصف الصورة</p>
        </div>
        {/* Repeat the above div for more images */}
      </div>

      <div className="mt-8 text-center">
        <Link to="/">
          <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGallery;