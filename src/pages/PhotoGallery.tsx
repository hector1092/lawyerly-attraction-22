import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    
    if (!target || !target.files) {
      return;
    }

    const files = Array.from(target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && typeof event.target.result === 'string') {
          setImages(prevImages => [...prevImages, event.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    
    if (!target || !target.files) {
      return;
    }

    const file = target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-900"
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
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
            multiple
          />
          <label htmlFor="image-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            إضافة صورة
          </label>
        </div>
        <div>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            إضافة فيديو
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={image} alt={`صورة ${index + 1}`} className="w-full h-64 object-cover rounded mb-4" />
          </div>
        ))}
      </div>

      {videoUrl && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">الفيديو المحمل</h2>
          <video controls className="w-full max-w-2xl mx-auto rounded-lg shadow-md">
            <source src={videoUrl} type="video/mp4" />
            متصفحك لا يدعم عنصر الفيديو.
          </video>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link to="/">
          <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-100 mx-2">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
        <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white mx-2">
          اتصل بنا
        </Button>
      </div>
    </div>
  );
};

export default PhotoGallery;