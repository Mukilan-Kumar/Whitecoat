import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import OurValues from '@/components/about/OurValues';
import Team from '@/components/about/Team';
import Stats from '@/components/about/Stats';

export const metadata: Metadata = {
  title: 'About WhiteCoat | Premium Real Estate for NRI Doctors',
  description: 'Learn about WhiteCoat - the trusted platform connecting NRI doctors with premium Indian real estate investments.',
  openGraph: {
    title: 'About WhiteCoat',
    description: 'Trusted platform for NRI doctors investing in Indian real estate',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
      <Stats />
      <Team />
    </>
  );
}
