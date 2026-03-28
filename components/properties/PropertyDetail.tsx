'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Calendar, TrendingUp, Shield, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyDetailProps {
  id: string;
}

// Property data - same as in PropertiesGrid
const allProperties = [
  {
    id: 1,
    title: 'Luxury Villa in Goa',
    location: 'North Goa, India',
    price: '₹4.5 Cr',
    priceValue: 4.5,
    beds: 4,
    baths: 5,
    area: '3500 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    type: 'Villa',
    yearBuilt: 2022,
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
    roi: '12% Annual',
    appreciation: '15% in 3 years',
  },
  {
    id: 2,
    title: 'Premium Apartment Mumbai',
    location: 'Bandra West, Mumbai',
    price: '₹6.2 Cr',
    priceValue: 6.2,
    beds: 3,
    baths: 4,
    area: '2800 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    type: 'Apartment',
    yearBuilt: 2023,
    description: 'Luxurious apartment in the heart of Bandra West with stunning sea views. Features premium Italian marble flooring, designer fixtures, and access to world-class amenities.',
    features: [
      'Sea View',
      'Gym & Spa',
      'Clubhouse',
      'Swimming Pool',
      'Covered Parking for 2 Cars',
      '24/7 Security',
      'Power Backup',
      'Concierge Service',
    ],
    roi: '10% Annual',
    appreciation: '18% in 3 years',
  },
  {
    id: 3,
    title: 'Penthouse Bangalore',
    location: 'Whitefield, Bangalore',
    price: '₹5.8 Cr',
    priceValue: 5.8,
    beds: 4,
    baths: 4,
    area: '4200 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    type: 'Penthouse',
    yearBuilt: 2023,
    description: 'Exclusive penthouse with panoramic city views in Bangalore\'s IT hub. Features private terrace, smart home automation, and premium finishes throughout.',
    features: [
      'Private Terrace',
      'Smart Home System',
      'Premium Fixtures',
      'Modular Kitchen',
      'Covered Parking for 3 Cars',
      'Private Lift',
      'Power Backup',
      'Security System',
    ],
    roi: '11% Annual',
    appreciation: '16% in 3 years',
  },
  {
    id: 4,
    title: 'Sea View Villa Kerala',
    location: 'Kochi, Kerala',
    price: '₹3.8 Cr',
    priceValue: 3.8,
    beds: 5,
    baths: 5,
    area: '4000 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    type: 'Villa',
    yearBuilt: 2022,
    description: 'Beautiful villa with direct sea views in Kochi. Traditional Kerala architecture meets modern luxury with spacious rooms and lush gardens.',
    features: [
      'Sea View',
      'Traditional Architecture',
      'Landscaped Garden',
      'Modular Kitchen',
      'Covered Parking for 3 Cars',
      'Servant Quarters',
      'Power Backup',
      'Security System',
    ],
    roi: '13% Annual',
    appreciation: '14% in 3 years',
  },
  {
    id: 5,
    title: 'Modern Apartment Delhi',
    location: 'South Delhi, Delhi',
    price: '₹7.5 Cr',
    priceValue: 7.5,
    beds: 4,
    baths: 5,
    area: '3200 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    type: 'Apartment',
    yearBuilt: 2023,
    description: 'Ultra-modern apartment in South Delhi\'s most prestigious location. Features contemporary design, premium amenities, and excellent connectivity.',
    features: [
      'Premium Location',
      'Modern Design',
      'Gym & Pool',
      'Clubhouse',
      'Covered Parking for 2 Cars',
      '24/7 Security',
      'Power Backup',
      'Concierge Service',
    ],
    roi: '9% Annual',
    appreciation: '20% in 3 years',
  },
  {
    id: 6,
    title: 'Heritage Villa Jaipur',
    location: 'Civil Lines, Jaipur',
    price: '₹5.2 Cr',
    priceValue: 5.2,
    beds: 6,
    baths: 6,
    area: '5000 sq ft',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    type: 'Villa',
    yearBuilt: 2021,
    description: 'Magnificent heritage-style villa in Jaipur\'s premium Civil Lines area. Combines royal Rajasthani architecture with modern amenities.',
    features: [
      'Heritage Architecture',
      'Large Garden',
      'Modular Kitchen',
      'Home Theater',
      'Covered Parking for 4 Cars',
      'Servant Quarters',
      'Power Backup',
      'Security System',
    ],
    roi: '12% Annual',
    appreciation: '15% in 3 years',
  },
  {
    id: 7,
    title: 'Prime Land in Lonavala',
    location: 'Lonavala, Maharashtra',
    price: '₹2.5 Cr',
    priceValue: 2.5,
    beds: 0,
    baths: 0,
    area: '5000 sq ft',
    image: 'https://www.santiamestates.com/blog/admin/assets/img/post/image_2025-04-30-12-43-48_68121b0442490.jpg',
    type: 'Land',
    yearBuilt: 2024,
    description: 'Prime land parcel in scenic Lonavala, perfect for building your dream villa. Clear title, excellent location with mountain views.',
    features: [
      'Clear Title',
      'Mountain Views',
      'Road Access',
      'Water Connection Available',
      'Electricity Available',
      'Gated Community',
      'Security',
      'Development Ready',
    ],
    roi: '15% Annual',
    appreciation: '25% in 3 years',
  },
  {
    id: 8,
    title: 'Agricultural Land Pune',
    location: 'Pune Outskirts, Maharashtra',
    price: '₹1.8 Cr',
    priceValue: 1.8,
    beds: 0,
    baths: 0,
    area: '10000 sq ft',
    image: 'https://www.roofandfloor.com/project/7372/salepageimages/Anandham_Township_1.jpg',
    type: 'Land',
    yearBuilt: 2024,
    description: 'Fertile agricultural land near Pune with excellent investment potential. Suitable for farming or future development.',
    features: [
      'Fertile Soil',
      'Water Source',
      'Road Access',
      'Clear Title',
      'Electricity Nearby',
      'Peaceful Location',
      'Investment Potential',
      'Development Ready',
    ],
    roi: '14% Annual',
    appreciation: '22% in 3 years',
  },
  {
    id: 9,
    title: 'Residential Plot Gurgaon',
    location: 'Sector 57, Gurgaon',
    price: '₹3.2 Cr',
    priceValue: 3.2,
    beds: 0,
    baths: 0,
    area: '3600 sq ft',
    image: 'https://4.imimg.com/data4/CQ/TD/MY-24860456/land-plots-for-sale-near-narasapura-industrial-area-1000x1000.jpg',
    type: 'Land',
    yearBuilt: 2024,
    description: 'Premium residential plot in Gurgaon\'s Sector 57. Ideal for building luxury villa with all modern amenities nearby.',
    features: [
      'Premium Location',
      'Clear Title',
      'Road Access',
      'Water Connection',
      'Electricity Available',
      'Gated Community',
      '24/7 Security',
      'Development Ready',
    ],
    roi: '13% Annual',
    appreciation: '20% in 3 years',
  },
  {
    id: 10,
    title: 'Beachfront Land Goa',
    location: 'Candolim, Goa',
    price: '₹4.8 Cr',
    priceValue: 4.8,
    beds: 0,
    baths: 0,
    area: '6000 sq ft',
    image: 'https://dynamic.realestateindia.com/prop_images/2318122/1002103_1-200x200.jpg',
    type: 'Land',
    yearBuilt: 2024,
    description: 'Rare beachfront land in Candolim, Goa. Perfect for luxury villa or resort development with stunning sea views.',
    features: [
      'Beachfront Location',
      'Sea Views',
      'Clear Title',
      'Road Access',
      'Water & Electricity',
      'Tourism Zone',
      'High ROI Potential',
      'Development Ready',
    ],
    roi: '16% Annual',
    appreciation: '30% in 3 years',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PropertyDetail = ({ id }: PropertyDetailProps) => {
  // Find the property by ID
  const property = allProperties.find(p => p.id === parseInt(id)) || allProperties[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[60vh] bg-gray-900 mt-32 sm:mt-28 md:mt-24 lg:mt-20">
        <Image
          src={property.image}
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
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {property.type !== 'Land' && (
                  <>
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
                  </>
                )}
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Square className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">{property.type === 'Land' ? 'Plot Area' : 'Area'}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Year</div>
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
                  <a 
                    href="tel:+919360264347"
                    className="hover:text-gold-600 transition-colors"
                  >
                    +91 93602 64347
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gold-600" />
                  <a 
                    href="mailto:mukilan021@gmail.com"
                    className="hover:text-gold-600 transition-colors"
                  >
                    mukilan021@gmail.com
                  </a>
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
