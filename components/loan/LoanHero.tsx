'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const LoanHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-32 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 glass rounded-full text-gold-400 font-medium">
            <CheckCircle className="w-5 h-5" />
            <span>Easy Approval for NRI Doctors</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
            <span className="text-gradient">Loan Eligibility</span> for NRI Doctors
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4 mb-8">
            Get up to 80% financing with special benefits and faster approval
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanHero;
