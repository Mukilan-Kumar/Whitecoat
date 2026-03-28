'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 93602 64347'],
      isLink: true,
      link: 'tel:+919360264347',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['mukilan021@gmail.com'],
      isLink: true,
      link: 'mailto:mukilan021@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['No.92, Devadoss street, CH-40, VGN', 'Chennai 600 040'],
      isLink: true,
      link: 'https://www.google.com/maps/search/?api=1&query=No.92+Devadoss+street+CH-40+VGN+Chennai+600040',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      isLink: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-8">
          Our team is available to answer your questions and help you find the perfect property investment.
        </p>

        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                {item.isLink ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-gold-600 transition-colors block"
                  >
                    {item.details.map((detail, idx) => (
                      <span key={idx} className="block">
                        {detail}
                      </span>
                    ))}
                  </a>
                ) : (
                  item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-gold-50"
      >
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="w-8 h-8 text-gold-600" />
          <h3 className="text-xl font-bold text-gray-900">Quick Response</h3>
        </div>
        <p className="text-gray-700 mb-4">
          Need immediate assistance? Our dedicated team responds to all inquiries within 24 hours.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available Now</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Call</h3>
        <p className="text-gray-600 mb-6">
          Prefer to speak directly? Book a consultation call with our property experts.
        </p>
        <a 
          href="tel:+919360264347"
          className="block w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all text-center"
        >
          Book Consultation
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
