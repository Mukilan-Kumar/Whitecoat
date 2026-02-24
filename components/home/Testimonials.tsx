'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist, USA',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
      rating: 5,
      text: 'WhiteCoat made my property investment seamless. The virtual tours were excellent, and the team handled everything while I was in the US.',
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician, UK',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
      rating: 5,
      text: 'As a busy doctor, I appreciated the transparency and professionalism. Found my dream home in Bangalore without any hassle.',
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Surgeon, Canada',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
      rating: 5,
      text: 'Excellent service tailored for NRI doctors. The investment guidance and property quality exceeded my expectations.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What <span className="text-gradient">Doctors Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by medical professionals worldwide for premium property investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative hover:shadow-2xl transition-all"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-200" />
              
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.specialty}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
