'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProperties = () => {
  const partners = [
    {
      id: 1,
      name: 'Prestige Estates',
      logo: 'prestige_estates_projects_limited.webp',
      location: 'Chennai, India',
      description: 'Premium luxury developments',
    },
    {
      id: 2,
      name: 'Brigade Enterprises',
      logo: 'brigade_enterprises_limited.webp',
      location: 'Chennai, India',
      description: 'Trusted real estate developer',
    },
    {
      id: 3,
      name: 'Sobha Ltd',
      logo: 'sobha_developers_limited.webp',
      location: 'Chennai, India',
      description: 'Quality construction excellence',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted CREDAI Chennai member developers offering exclusive deals for NRI doctors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href="/partners">
                <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative h-64 overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                    <Image
                      src={`/partners/${partner.logo}`}
                      alt={partner.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{partner.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 pb-4 border-b border-gray-200">
                      {partner.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gold-600 font-semibold group-hover:underline">
                        View Details
                      </span>
                      <ArrowRight className="w-5 h-5 text-gold-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/partners"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>View All Partners</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
