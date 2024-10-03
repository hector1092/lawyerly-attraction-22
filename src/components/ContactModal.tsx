import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">اتصل بنا</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 text-2xl mr-4" />
                <a href="https://wa.me/1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 text-2xl mr-4" />
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-500 text-2xl mr-4" />
                <a href="mailto:info@lawyeroffice.com" className="text-blue-600 hover:underline">info@lawyeroffice.com</a>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={onClose}
            >
              إغلاق
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;