import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | WhiteCoat',
  description: 'Get in touch with WhiteCoat for premium property inquiries. We are here to help NRI doctors invest in Indian real estate.',
  openGraph: {
    title: 'Contact WhiteCoat',
    description: 'Get in touch for premium property inquiries',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
}
