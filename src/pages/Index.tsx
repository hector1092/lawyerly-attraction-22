import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaWhatsapp, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';

const Index = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [adColor, setAdColor] = useState('#4A5568');
  const [showBio, setShowBio] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();
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

  React.useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
      setAdColor(`hsl(${Math.random() * 360}, 70%, 70%)`);
    }, 5000);

    return () => {
      clearInterval(adInterval);
    };
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{backgroundImage: "url('/lawyer-background.jpg')"}} />
      <div className="relative z-10">
        <header className="p-4 flex flex-col md:flex-row justify-between items-center bg-white bg-opacity-90 shadow-md">
          <Button 
            variant="outline" 
            className="text-gray-800 border-gray-800 bg-white hover:bg-gray-200 mb-2 md:mb-0"
            onClick={handleLogout}
          >
            تسجيل خروج
          </Button>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-gray-800 border-gray-800 bg-white hover:bg-gray-200 w-full md:w-auto">
                  القضايا
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-800">
                {cases.map((caseItem, index) => (
                  <DropdownMenuItem key={index} className="hover:bg-gray-100">{caseItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-gray-800 border-gray-800 bg-white hover:bg-gray-200 w-full md:w-auto">
                  مكتبة الصور
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-800">
                <DropdownMenuItem className="hover:bg-gray-100">
                  <Link to="/photo-gallery">إضافة صور</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100">
                  <Link to="/photo-gallery">إضافة فيديو</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="outline" 
              className="text-gray-800 border-gray-800 bg-white hover:bg-gray-200 w-full md:w-auto"
              onClick={() => setShowContactModal(true)}
            >
              اتصل بنا
              <FaPhone className="mr-2" />
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
          className="p-2 text-white text-center font-bold text-sm md:text-base"
          style={{ backgroundColor: adColor }}
        >
          {ads[currentAd]}
        </motion.div>

        <main className="container mx-auto mt-10 px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              color: '#2D3748',
              textShadow: '0 0 10px #A0AEC0, 0 0 20px #A0AEC0, 0 0 30px #A0AEC0, 0 0 40px #A0AEC0'
            }}
          >
            أ. محمد مصطفى
          </motion.h1>

          <div className="text-center">
            <motion.button
              className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowBio(!showBio)}
            >
              <FaInfoCircle className="inline-block mr-2" />
              نبذة عن المحامي
            </motion.button>
          </div>

          <AnimatePresence>
            {showBio && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 bg-white bg-opacity-90 rounded-lg shadow-lg p-4 md:p-8"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">نبذة عن المحامي</h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  أ. محمد مصطفى هو اسم بارز في عالم القانون المصري، بخبرة تفوق 15 عامًا في القضايا المدنية والجنائية. يتمتع بسمعة راسخة كخبير قانوني متميز يجمع بين الاحترافية والإنسانية، حيث يكرس جهوده لضمان تحقيق العدالة والدفاع عن حقوق موكليه بكل إخلاص. بفضل معرفته العميقة بالقوانين المصرية واستراتيجياته القانونية الذكية، يقدم أ. محمد مصطفى حلولًا قانونية مبتكرة وفعالة، مما يجعله الاختيار الأمثل لمن يبحث عن الثقة والنجاح في أروقة المحاكم.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center md:justify-end mt-10">
            <motion.div
              className="w-48 h-48 md:w-64 md:h-64 bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center h-full text-gray-500 text-sm md:text-base">
                سيتم إضافة صورة هنا
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <video controls className="w-full max-w-3xl mx-auto">
              <source src="/lawyer-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </main>

        <footer className="mt-20 p-4 text-center bg-gray-800 text-white text-sm md:text-base">
          <p>© 2024 مكتب أ. محمد مصطفى. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default Index;
