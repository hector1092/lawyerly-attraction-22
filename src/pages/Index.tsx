import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens or user data
    // For now, we'll just redirect to the login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/lawyer-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 flex justify-between items-center bg-emerald-800 bg-opacity-70">
          <Button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            تسجيل الخروج
          </Button>
          <motion.h1 
            className="text-4xl font-bold text-center flex-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              color: '#FFD700',
              textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700'
            }}
          >
            المحامي محمد مصطفى
          </motion.h1>
        </header>

        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/lawyer-background.jpg')"}} />
          <div className="relative z-10">
            <main className="container mx-auto mt-10 px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 pr-8">
                <motion.div
                  className="mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <video controls className="w-full max-w-3xl mx-auto">
                    <source src="/lawyer-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-black bg-opacity-70 rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gold-500">نبذة عن المحامي</h2>
                  <p className="text-white">
                    المحامي محمد مصطفى هو خبير قانوني متميز في مجال القضايا المدنية والجنائية. 
                    مع خبرة تزيد عن 15 عامًا في المحاكم المصرية، يتميز بقدرته على تقديم حلول 
                    قانونية فعالة وموثوقة لعملائه. يسعى دائمًا لضمان حقوق موكليه وتحقيق 
                    العدالة في كل قضية يتولاها.
                  </p>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <img 
                    src="/lawyer-image.jpg" 
                    alt="المحامي محمد مصطفى" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </main>

            <footer className="mt-20 p-4 text-center bg-emerald-800 bg-opacity-70 text-gold-500">
              <p>© 2024 مكتب المحامي محمد مصطفى. جميع الحقوق محفوظة.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
