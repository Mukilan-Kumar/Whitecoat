'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  const phoneNumber = '+919003252500'; // Replace with actual phone number
  const whatsappNumber = '+919003252500'; // Replace with actual WhatsApp number
  const whatsappMessage = 'Hello, I am interested in WhiteCoat properties';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
