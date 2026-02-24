'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            About <span className="text-gradient">WhiteCoat</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Bridging the gap between NRI doctors and premium Indian real estate with trust, transparency, and expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
