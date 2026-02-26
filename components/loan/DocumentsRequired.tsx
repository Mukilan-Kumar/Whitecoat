'use client';

import { motion } from 'framer-motion';
import { User, DollarSign, Home, FileCheck } from 'lucide-react';

const DocumentsRequired = () => {
  const documentSections = [
    {
      icon: User,
      title: 'Identity & Residency',
      color: 'from-blue-500 to-blue-600',
      items: ['Passport', 'Visa / Work permit', 'Overseas address proof'],
    },
    {
      icon: DollarSign,
      title: 'Income Proof',
      color: 'from-green-500 to-green-600',
      items: [
        'Employment contract / hospital ID',
        'Salary slips (3–6 months)',
        'Bank statements (6 months)',
        'Tax returns (if applicable)',
      ],
    },
    {
      icon: Home,
      title: 'Property Documents',
      color: 'from-gold-500 to-gold-600',
      items: ['Sale agreement', 'Builder approvals', 'Title deed'],
    },
    {
      icon: FileCheck,
      title: 'Optional',
      color: 'from-purple-500 to-purple-600',
      items: ['Power of Attorney (POA)', '👉 For family in India to sign documents'],
    },
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
            Documents <span className="text-gradient">Required</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Simple documentation process for NRI doctors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {documentSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-gold-600 font-bold mt-1">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
