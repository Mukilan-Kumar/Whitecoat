'use client';

import { Search, SlidersHorizontal } from 'lucide-react';

const PropertyFilters = () => {
  return (
    <div className="glass-card p-6 rounded-2xl mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none">
          <option>Property Type</option>
          <option>Villa</option>
          <option>Apartment</option>
          <option>Penthouse</option>
        </select>

        <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none">
          <option>Budget Range</option>
          <option>₹2-4 Cr</option>
          <option>₹4-6 Cr</option>
          <option>₹6+ Cr</option>
        </select>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gold-600 transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium">More Filters</span>
        </button>
        <button className="text-gold-600 font-medium hover:underline">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default PropertyFilters;
