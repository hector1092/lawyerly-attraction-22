import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import LawyerInfo from '@/components/LawyerInfo';
import SocialButtons from '@/components/SocialButtons';
import MovingAd from '@/components/MovingAd';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
      <header className="p-4 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center">
          <img src="/logo.png" alt="شعار المكتب" className="h-12 w-auto mr-4" />
          <h1 className="text-3xl font-bold">مكتب المحامي محمد مصطفى</h1>
        </div>
        <nav>
          <Button variant="ghost" className="mx-2">القضايا</Button>
          <Button variant="ghost" className="mx-2">مكتبة الصور</Button>
          <Button variant="ghost" className="mx-2">اتصل بنا</Button>
        </nav>
      </header>

      <MovingAd />

      <main className="container mx-auto mt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-10"
        >
          <LawyerInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <ReactTypingEffect
            text={["محامٍ ذو خبرة في القضايا المدنية والجنائية", "نحن هنا لمساعدتك في جميع احتياجاتك القانونية"]}
            className="text-2xl text-center font-semibold text-gray-700"
            speed={50}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2000}
          />
        </motion.div>

        <SocialButtons />
      </main>

      <footer className="mt-20 p-4 text-center bg-gray-800 text-white">
        <p>© 2024 مكتب المحامي محمد مصطفى. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default Index;