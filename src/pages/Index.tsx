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
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/law-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 flex justify-between items-center bg-white bg-opacity-90 shadow-md">
          <div className="flex-1"></div>
          <motion.h1 
            className="text-4xl font-bold text-center flex-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              color: '#1E3A8A',
              textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700'
            }}
          >
            المحامي محمد مصطفى
          </motion.h1>
          <div className="flex-1 flex justify-end space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-blue-900 border-blue-900 bg-white hover:bg-blue-100">
                  القضايا
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-blue-900">
                {cases.map((caseItem, index) => (
                  <DropdownMenuItem key={index} className="hover:bg-blue-50">{caseItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/photo-gallery">
              <Button variant="outline" className="text-blue-900 border-blue-900 bg-white hover:bg-blue-100">
                مكتبة الصور
              </Button>
            </Link>
            <Button variant="outline" className="text-blue-900 border-blue-900 bg-white hover:bg-blue-100">
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
          className="p-2 text-white text-center font-bold flex items-center justify-between"
          style={{ backgroundColor: adColor }}
        >
          <span>{ads[currentAd]}</span>
          <div className="flex items-center">
            <Button variant="ghost" className="text-white hover:bg-white hover:text-blue-900 mr-2">
              <FaWhatsapp className="mr-2" /> تواصل معنا
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white hover:text-blue-900">
              <FaFacebookF className="mr-2" /> تابعنا
            </Button>
          </div>
        </motion.div>

        <main className="container mx-auto mt-10 px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-8">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-900">نبذة عن المحامي</h2>
              <p className="text-gray-700">
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
      </div>
    </div>
  );
};

export default Index;