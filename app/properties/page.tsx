import { Metadata } from 'next';
import PropertiesGrid from '@/components/properties/PropertiesGrid';
import PropertyFilters from '@/components/properties/PropertyFilters';

export const metadata: Metadata = {
  title: 'Premium Properties | WhiteCoat',
  description: 'Browse our curated collection of luxury properties in India, exclusively for NRI doctors. Find your perfect investment property.',
  openGraph: {
    title: 'Premium Properties | WhiteCoat',
    description: 'Browse luxury properties for NRI doctors',
  },
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-primary-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Premium <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-xl text-gray-300">
            Discover luxury real estate investments curated for NRI doctors
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PropertyFilters />
        <PropertiesGrid />
      </div>
    </div>
  );
}
