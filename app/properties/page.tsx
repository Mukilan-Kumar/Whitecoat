'use client';

import PropertiesGrid from '@/components/properties/PropertiesGrid';
import PropertyFilters from '@/components/properties/PropertyFilters';
import { useState } from 'react';

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');

  const handleClearAll = () => {
    setSearchQuery('');
    setTypeFilter('');
    setBudgetFilter('');
    // Reset the select elements
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
      (select as HTMLSelectElement).value = '';
    });
    // Reset the input
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary-900 to-gray-900 text-white py-12 sm:py-16 pt-32 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Premium <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Discover luxury real estate investments curated for NRI doctors
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PropertyFilters 
          onSearchChange={setSearchQuery}
          onTypeChange={setTypeFilter}
          onBudgetChange={setBudgetFilter}
          onClearAll={handleClearAll}
        />
        <PropertiesGrid 
          searchQuery={searchQuery}
          typeFilter={typeFilter}
          budgetFilter={budgetFilter}
        />
      </div>
    </div>
  );
}
