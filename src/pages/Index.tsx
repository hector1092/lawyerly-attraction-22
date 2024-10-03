import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

    return () => {
      clearInterval(adInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/lawyer-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 flex justify-between items-center bg-black bg-opacity-70">
          <div className="flex-1"></div>
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
          <div className="flex-1 flex justify-end space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-white border-white bg-gray-800 hover:bg-white hover:text-black">
                  القضايا
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white">
                {cases.map((caseItem, index) => (
                  <DropdownMenuItem key={index} className="hover:bg-gray-700">{caseItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/photo-gallery">
              <Button variant="outline" className="text-white border-white bg-gray-800 hover:bg-white hover:text-black">
                مكتبة الصور
              </Button>
            </Link>
            <Button variant="outline" className="text-white border-white bg-gray-800 hover:bg-white hover:text-black">
              اتصل بنا
              <FaWhatsapp className="mr-2" />
              <FaFacebookF className="mr-2" />
            </Button>
          </div>
        </header>

        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="p-2 text-black text-center font-bold"
          style={{ backgroundColor: adColor }}
        >
          {ads[currentAd]}
        </motion.div>

        <main className="container mx-auto mt-10 px-4">
          <motion.h2
            className="text-6xl font-bold text-center mb-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#FFD700',
              textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700'
            }}
          >
            المحامي محمد مصطفى
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="w-full md:w-1/2 pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gold-500">نبذة عن المحامي</h3>
              <p className="text-white">
                المحامي محمد مصطفى هو خبير قانوني متميز في مجال القضايا المدنية والجنائية. 
                مع خبرة تزيد عن 15 عامًا في المحاكم المصرية، يتميز بقدرته على تقديم حلول 
                قانونية فعالة وموثوقة لعملائه. يسعى دائمًا لضمان حقوق موكليه وتحقيق 
                العدالة في كل قضية يتولاها.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="/lawyer-image.jpg" 
                alt="المحامي محمد مصطفى" 
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </main>

        <footer className="mt-20 p-4 text-center bg-black bg-opacity-70 text-gold-500">
          <p>© 2024 مكتب المحامي محمد مصطفى. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;