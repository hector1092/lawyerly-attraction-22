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
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">مكتب المحامي محمد مصطفى</h1>
        <nav>
          <Button variant="ghost" className="mx-2">القضايا</Button>
          <Button variant="ghost" className="mx-2">مكتبة الصور</Button>
          <Button variant="ghost" className="mx-2">اتصل بنا</Button>
        </nav>
      </header>

      <MovingAd />

      <main className="container mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LawyerInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ReactTypingEffect
            text={["محامٍ ذو خبرة في القضايا المدنية والجنائية", "نحن هنا لمساعدتك في جميع احتياجاتك القانونية"]}
            className="text-2xl mt-6 text-center"
            speed={50}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={2000}
          />
        </motion.div>

        <SocialButtons />
      </main>

      <footer className="mt-20 p-4 text-center">
        <p>© 2024 مكتب المحامي محمد مصطفى. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default Index;