import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-gold-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600 font-medium">Loading WhiteCoat...</p>
      </div>
    </div>
  );
}
