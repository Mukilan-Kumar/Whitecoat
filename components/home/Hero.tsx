'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-24 lg:pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-6 py-2 glass rounded-full text-gold-400 font-extrabold text-lg"
          >
            Exclusively for NRI Doctors
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Invest in India&apos;s
            <br />
            <span className="text-gradient">Premium Properties</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0, 1, 1, 0.7, 1, 0.7, 1],
              scale: [0.9, 1, 1.05, 1, 1.05, 1, 1],
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                  "0 0 20px rgba(251, 191, 36, 0.8)",
                  "0 0 30px rgba(251, 191, 36, 1)",
                  "0 0 20px rgba(251, 191, 36, 0.8)",
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block text-white font-semibold"
            >
              Beyond Property Scouting: We negotiate exclusive developer rates for NRI Doctors, passing a{' '}
              <span className="text-gold-400 font-bold text-2xl sm:text-3xl md:text-4xl">
                5% direct price advantage
              </span>
              {' '}straight to you
            </motion.span>
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/partners"
              className="group px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Explore Partners</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://youtu.be/PCyexxpsTic?si=pXGPpKL2E_F1mSYr"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Video</span>
            </a>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          {[
            { value: '500+', label: 'NRI Doctors Trust Us' },
            { value: '10+', label: 'Country Served' },
            { value: '50+', label: 'Premium Locations' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold text-gold-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
