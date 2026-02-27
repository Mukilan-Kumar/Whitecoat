'use client';

import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'NRI Doctors Served', prefix: '' },
    { value: 10, suffix: '+', label: 'Country Served', prefix: '' },
    { value: 50, suffix: '+', label: 'Premium Locations', prefix: '' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">Numbers that speak for themselves</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
