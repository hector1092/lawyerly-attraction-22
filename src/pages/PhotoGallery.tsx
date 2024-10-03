import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files) {
      return;
    }
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          setImages(prevImages => [...prevImages, e.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        مكتبة الصور
      </motion.h1>
      
      <div className="mb-8">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
          multiple
        />
        <label htmlFor="image-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          إضافة صورة
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={image} alt={`صورة ${index + 1}`} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/">
          <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-100">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoGallery;