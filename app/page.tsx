import Hero from '@/components/home/Hero';
import TrustedBadge from '@/components/home/TrustedBadge';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import WhyWhiteCoat from '@/components/home/WhyWhiteCoat';
import VirtualTour from '@/components/home/VirtualTour';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBadge />
      <FeaturedProperties />
      <WhyWhiteCoat />
      <VirtualTour />
      <Testimonials />
      <CTABanner />
    </>
  );
}
