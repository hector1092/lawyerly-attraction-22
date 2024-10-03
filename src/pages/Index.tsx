import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30" style={{backgroundImage: "url('/dynamic-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 bg-white bg-opacity-90 shadow-md">
          <h1 className="text-4xl font-bold text-center text-blue-900">
            المحامي محمد مصطفى
          </h1>
        </header>

        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="p-2 text-white text-center font-bold"
          style={{ backgroundColor: adColor }}
        >
          {ads[currentAd]}
        </motion.div>

        <main className="container mx-auto mt-10 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border-4 border-gold-500 rounded-lg overflow-hidden"
                >
                  <img 
                    src="/lawyer-image.jpg" 
                    alt="المحامي محمد مصطفى" 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">نبذة عن المحامي</h2>
                <p className="text-gray-700">
                  المحامي محمد مصطفى هو خبير قانوني متميز في مجال القضايا المدنية والجنائية. 
                  مع خبرة تزيد عن 15 عامًا في المحاكم المصرية، يتميز بقدرته على تقديم حلول 
                  قانونية فعالة وموثوقة لعملائه. يسعى دائمًا لضمان حقوق موكليه وتحقيق 
                  العدالة في كل قضية يتولاها.
                </p>
                <div className="mt-6 flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-blue-900 border-blue-900 bg-white hover:bg-blue-100">
                        اتصل بنا
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>أرقام التواصل</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p>الهاتف: 01234567890</p>
                        <p>الواتساب: 09876543210</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-10 p-4 bg-white bg-opacity-90 text-center">
          <p>جميع الحقوق محفوظة © محمد مصطفى 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;