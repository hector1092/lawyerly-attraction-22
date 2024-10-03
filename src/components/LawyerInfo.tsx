import React from 'react';
import { motion } from 'framer-motion';

const LawyerInfo = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/lawyer-image.jpg"
        alt="المحامي محمد مصطفى"
        className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
      />
      <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-right">
        <h2 className="text-3xl font-bold mb-4">المحامي محمد مصطفى</h2>
        <p className="text-xl">
          محامٍ متخصص في القضايا المدنية والجنائية مع خبرة تزيد عن 15 عامًا في المحاكم المصرية.
          نحن نسعى جاهدين لتقديم أفضل الخدمات القانونية لعملائنا وضمان حقوقهم.
        </p>
      </div>
    </motion.div>
  );
};

export default LawyerInfo;