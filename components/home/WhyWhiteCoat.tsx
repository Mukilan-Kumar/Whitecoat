'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, HeartPulse, TrendingUp, FileCheck, Headphones } from 'lucide-react';

const WhyWhiteCoat = () => {
  const features = [
    {
      icon: HeartPulse,
      title: 'Doctor-Centric',
      description: 'Designed exclusively for medical professionals with busy schedules',
    },
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every property is legally verified and quality-checked',
    },
    {
      icon: Clock,
      title: 'Time-Saving',
      description: 'Virtual tours and remote documentation for NRI convenience',
    },
    {
      icon: TrendingUp,
      title: 'High ROI',
      description: 'Premium locations with strong appreciation potential',
    },
    {
      icon: FileCheck,
      title: 'Complete Transparency',
      description: 'Clear documentation and no hidden charges',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated relationship manager for every client',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">WhiteCoat</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We understand the unique needs of NRI doctors and provide tailored real estate solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWhiteCoat;
