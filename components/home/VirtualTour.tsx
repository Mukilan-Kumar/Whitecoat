'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Video, Home, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const VirtualTour = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const benefits = [
    'Explore properties from anywhere in the world',
    '360° virtual walkthroughs',
    'Live video consultations with our team',
    'Detailed property documentation online',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full text-gold-400 mb-6">
                <Video className="w-5 h-5" />
                <span className="font-medium">Virtual Tours Available</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Experience Properties
                <br />
                <span className="text-gradient">From Anywhere</span>
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                No need to fly to India for property visits. Our immersive virtual tours bring properties to your screen with stunning detail.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                Schedule a Virtual Tour
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <a 
              href="https://youtu.be/PCyexxpsTic?si=pXGPpKL2E_F1mSYr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative aspect-video rounded-2xl overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4 hover:scale-110 transition-transform cursor-pointer">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white font-semibold">Watch Sample Tour</p>
                </div>
              </div>
            </a>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 glass-card p-4 rounded-xl"
            >
              <Home className="w-8 h-8 text-gold-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
