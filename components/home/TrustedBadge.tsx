'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const TrustedBadge = () => {
  const badges = [
    { icon: Shield, text: 'Verified Developers' },
    { icon: Award, text: 'Premium Quality' },
    { icon: Users, text: 'Doctor Community' },
    { icon: TrendingUp, text: 'High ROI' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by <span className="text-gradient">NRI Doctors</span> Worldwide
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">Your trusted partner in premium Indian real estate</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-4 sm:p-6 rounded-2xl text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-3 sm:mb-4">
                <badge.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">{badge.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBadge;
