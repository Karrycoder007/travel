"use client"
import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Romantic Paris Getaway',
    description: 'Experience the charm of Paris in a 5-day romantic tour, including a Seine River cruise, Eiffel Tower visit, and more!',
    price: '$799 per person',
  },
  {
    title: 'Tokyo Adventure',
    description: 'Explore the exciting streets of Tokyo, visit ancient temples, and dive into Japan’s rich culture with this 7-day package.',
    price: '$1,099 per person',
  },
  {
    title: 'Bali Relaxation Escape',
    description: 'Unwind in the tropical paradise of Bali with a luxurious 6-day retreat, including spa treatments and beach relaxation.',
    price: '$899 per person',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // stagger delay based on index
      ease: 'easeOut',
    },
  }),
};

const FeaturedPackages: React.FC = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-black">Featured Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{pkg.title}</h3>
              <p>{pkg.description}</p>
              <p className="text-lg font-bold mt-4">{pkg.price}</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
