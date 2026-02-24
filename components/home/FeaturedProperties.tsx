'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Goa',
      location: 'North Goa, India',
      price: '₹4.5 Cr',
      beds: 4,
      baths: 5,
      area: '3500 sq ft',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    },
    {
      id: 2,
      title: 'Premium Apartment Mumbai',
      location: 'Bandra West, Mumbai',
      price: '₹6.2 Cr',
      beds: 3,
      baths: 4,
      area: '2800 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    },
    {
      id: 3,
      title: 'Penthouse Bangalore',
      location: 'Whitefield, Bangalore',
      price: '₹5.8 Cr',
      beds: 4,
      baths: 4,
      area: '4200 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
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
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked luxury properties perfect for NRI doctors seeking premium investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/properties/${property.id}`}>
                <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-gold-500 text-white rounded-full font-bold">
                      {property.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span className="text-sm">{property.beds}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4" />
                        <span className="text-sm">{property.baths}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="w-4 h-4" />
                        <span className="text-sm">{property.area}</span>
                      </div>
                    </div>

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
            href="/properties"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
