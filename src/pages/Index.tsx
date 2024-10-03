import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [adColor, setAdColor] = useState('#FFD700');
  const ads = [
    "تحتاج مساعدة قانونية؟ لا تدع المشاكل القانونية تعقد حياتك. اتصل بنا الآن للحصول على استشارة موثوقة ومجانية!",
    "حقوقك هي أولويتنا! لدينا الخبرة لحمايتك وتقديم أفضل الحلول القانونية لك. دعنا نرشدك اليوم.",
    "الدفاع عنك هو رسالتنا. مع فريقنا القانوني المحترف، ستكون في أيدٍ أمينة. تواصل معنا الآن لبدء قضيتك.",
    "حلول قانونية موثوقة. سواء كانت مشكلة شخصية أو تجارية، نحن هنا لتقديم الاستشارات القانونية الدقيقة.",
    "دعنا نتولى الأمور القانونية! ركز على حياتك واترك الأمور القانونية لنا. اتصل بنا اليوم للحصول على استشارة.",
    "الحماية القانونية تبدأ هنا. معنا، ستحصل على الدفاع والدعم القانوني الذي تستحقه. احجز موعدك الآن!"
  ];

  const cases = [
    "قضايا الأحوال الشخصية",
    "قضايا الجنايات",
    "قضايا العمل",
    "قضايا التعويضات",
    "قضايا الملكية الفكرية"
  ];

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
      setAdColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
    }, 5000);

    return () => clearInterval(adInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/lawyer-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 flex justify-between items-center bg-black bg-opacity-70">
          <motion.h1 
            className="text-4xl font-bold text-center w-full"
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

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentAd}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-2 text-black text-center font-bold"
            style={{ backgroundColor: adColor }}
          >
            {ads[currentAd]}
          </motion.div>
        </AnimatePresence>

        <main className="container mx-auto mt-10 px-4">
          <div className="flex justify-center space-x-4 mb-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black font-bold text-lg">
                  القضايا
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {cases.map((caseItem, index) => (
                  <DropdownMenuItem key={index}>{caseItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/photo-gallery">
              <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black font-bold text-lg">
                مكتبة الصور
              </Button>
            </Link>
            <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-black font-bold text-lg">
              اتصل بنا
              <FaWhatsapp className="mr-2" />
              <FaFacebookF className="mr-2" />
            </Button>
          </div>

          <motion.div
            className="bg-black bg-opacity-70 rounded-lg shadow-lg p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-xl text-gold-500 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              محامٍ متخصص في القضايا المدنية والجنائية مع خبرة تزيد عن 15 عامًا في المحاكم المصرية. 
              نحن نسعى جاهدين لتقديم أفضل الخدمات القانونية لعملائنا وضمان حقوقهم.
            </motion.p>
          </motion.div>

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
        </main>

        <footer className="mt-20 p-4 text-center bg-black bg-opacity-70 text-gold-500">
          <p>© 2024 مكتب المحامي محمد مصطفى. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;