'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: 'Paris',
    description: 'Explore the city of love with a romantic getaway.',
    image:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Tokyo',
    description: 'Experience the blend of tradition and technology.',
    image:
      'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Bali',
    description: 'Enjoy the beaches and cultural richness of Bali.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'New York',
    description: 'Discover the city that never sleeps.',
    image:
      'https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-black">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <motion.div
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative w-full h-64 transition duration-300 group-hover:brightness-75">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    priority={idx === 0}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{dest.title}</h3>
                  <p className="text-sm text-gray-200">{dest.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
