'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PropertiesGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

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
      type: 'Villa',
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
      type: 'Apartment',
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
      type: 'Penthouse',
    },
    {
      id: 4,
      title: 'Sea View Villa Kerala',
      location: 'Kochi, Kerala',
      price: '₹3.8 Cr',
      beds: 5,
      baths: 5,
      area: '4000 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      type: 'Villa',
    },
    {
      id: 5,
      title: 'Modern Apartment Delhi',
      location: 'South Delhi, Delhi',
      price: '₹7.5 Cr',
      beds: 4,
      baths: 5,
      area: '3200 sq ft',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      type: 'Apartment',
    },
    {
      id: 6,
      title: 'Heritage Villa Jaipur',
      location: 'Civil Lines, Jaipur',
      price: '₹5.2 Cr',
      beds: 6,
      baths: 6,
      area: '5000 sq ft',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      type: 'Villa',
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Link href={`/properties/${property.id}`}>
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                {property.type}
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-gold-500 text-white rounded-full font-bold">
                {property.price}
              </div>
              <button
                onClick={() => toggleFavorite(property.id)}
                className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(property.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-700'
                  }`}
                />
              </button>
            </div>

            <div className="p-6">
              <Link href={`/properties/${property.id}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {property.title}
                </h3>
              </Link>
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

              <Link
                href={`/properties/${property.id}`}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PropertiesGrid;
