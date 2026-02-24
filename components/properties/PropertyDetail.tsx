'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Calendar, TrendingUp, Shield, Phone, Mail, Heart, Share2, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyDetailProps {
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PropertyDetail = ({ id }: PropertyDetailProps) => {
  // In a real app, you would fetch property data based on id
  // For now, using static data
  const property = {
    id: 1,
    title: 'Luxury Villa in Goa',
    location: 'North Goa, India',
    price: '₹4.5 Cr',
    beds: 4,
    baths: 5,
    area: '3500 sq ft',
    yearBuilt: 2022,
    type: 'Villa',
    description: 'Experience luxury living in this stunning villa located in the heart of North Goa. This property features modern architecture, premium finishes, and breathtaking views. Perfect for NRI doctors seeking a vacation home or investment property.',
    features: [
      'Private Swimming Pool',
      'Modular Kitchen',
      'Home Automation',
      'Landscaped Garden',
      'Covered Parking for 3 Cars',
      'Servant Quarters',
      'Power Backup',
      'Security System',
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    ],
    roi: '12% Annual',
    appreciation: '15% in 3 years',
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-4 py-1 bg-gold-500 rounded-full text-sm font-semibold">
                  {property.type}
                </span>
                <span className="px-4 py-1 glass rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-8 right-8 flex space-x-3">
          <button className="p-3 glass rounded-full hover:bg-white/30 transition-colors" aria-label="Share">
            <Share2 className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 glass rounded-full hover:bg-white/30 transition-colors" aria-label="Favorite">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{property.price}</div>
                  <div className="text-gray-600">₹12,857 per sq ft</div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>Virtual Tour</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bed className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bath className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Square className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Property</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investment Potential */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Potential</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Expected ROI</div>
                    <div className="text-2xl font-bold text-green-600">{property.roi}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Appreciation</div>
                    <div className="text-2xl font-bold text-blue-600">{property.appreciation}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 rounded-2xl sticky top-24"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-5 h-5 text-gold-600" />
                <span className="font-semibold text-gray-900">Verified Property</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h3>
              
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all mb-3"
              >
                Schedule a Viewing
              </Link>

              <button className="w-full px-6 py-3 border-2 border-gold-500 text-gold-600 rounded-full font-semibold hover:bg-gold-50 transition-all mb-6">
                Request Callback
              </button>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gold-600" />
                  <span>info@whitecoat.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
