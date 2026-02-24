import { Metadata } from 'next';
import PropertyDetail from '@/components/properties/PropertyDetail';

export const metadata: Metadata = {
  title: 'Property Details | WhiteCoat',
  description: 'View detailed information about this premium property',
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return <PropertyDetail id={params.id} />;
}
