import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/lawyer-image-1.jpg',
  '/lawyer-image-2.jpg',
  '/lawyer-image-3.jpg',
  '/lawyer-image-4.jpg',
];

const ImageGallery: React.FC = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gold-500">معرض الصور</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`صورة المحامي ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;