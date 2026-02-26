'use client';

import { motion } from 'framer-motion';
import { Globe, CheckCircle, DollarSign } from 'lucide-react';

const WhoCanApply = () => {
  const countries = ['USA', 'UK', 'UAE', 'Canada', 'Australia', 'Singapore', 'Europe'];
  const categories = ['NRI (Non-Resident Indian)', 'OCI (Overseas Citizen of India)', 'PIO'];
  const incomeChecks = [
    'Stable job (doctor employment / clinic)',
    'Minimum income (₹1–3 lakhs/month equivalent)',
    'Overseas salary proof',
    'Tax returns / bank statements',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Who Can <span className="text-gradient">Apply</span>?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            NRI doctors from around the world are eligible for home loans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">NRI Doctors Working In</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((country, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{country}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligible Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Eligible Categories</h3>
            </div>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Income Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 glass-card p-6 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Income Requirement</h3>
          </div>
          <p className="text-gray-600 mb-4">Banks check:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {incomeChecks.map((check, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{check}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gold-50 border-l-4 border-gold-500 rounded">
            <p className="text-gray-800 font-medium">
              👉 Doctors usually get easier approval due to stable profession
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoCanApply;
