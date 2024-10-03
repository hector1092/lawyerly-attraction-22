import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          setImages(prevImages => [...prevImages, e.target.result]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          setVideo(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gold-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        مكتبة الصور والفيديو
      </motion.h1>
      
      <div className="mb-8 flex justify-center space-x-4">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer bg-gold-500 text-black px-4 py-2 rounded hover:bg-gold-600 transition-colors">
            إضافة صورة
          </label>
        </div>
        <div>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden"
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer bg-gold-500 text-black px-4 py-2 rounded hover:bg-gold-600 transition-colors">
            إضافة فيديو
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-black bg-opacity-50 p-4 rounded-lg">
            <img src={image} alt={`صورة ${index + 1}`} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        ))}
      </div>

      {video && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">الفيديو المحمل</h2>
          <video controls className="w-full max-w-3xl mx-auto">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="mt-8 text-center space-x-4">
        <Link to="/">
          <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
        <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black">
          اتصل بنا
        </Button>
      </div>
    </div>
  );
};

export default PhotoGallery;