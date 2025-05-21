'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const buses = [
  {
    id: 1,
    name: 'Bangalore Express',
    route: 'Goa to Bangalore',
    time: '6:00 PM - 6:00 AM',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Udupi Travels',
    route: 'Goa to Udupi',
    time: '7:30 AM - 1:00 PM',
    image: 'https://images.unsplash.com/photo-1616060676168-76193c9e2186?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Mysore Deluxe',
    route: 'Goa to Mysore',
    time: '9:00 PM - 8:00 AM',
    image: 'https://images.unsplash.com/photo-1589964414084-a7c06e3a2c5e?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Ooty Hills Bus',
    route: 'Goa to Ooty',
    time: '5:30 AM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60',
  },
];

const BusBookingPreview: React.FC = () => {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/buses');
  };

  return (
    <section className="py-16 px-6 sm:px-10 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Available Buses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-40">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  priority={bus.id === 1} // optional priority for first image
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{bus.name}</h3>
                <p className="text-sm text-gray-700">{bus.route}</p>
                <p className="text-sm text-gray-500">{bus.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleViewAll}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            View All Buses
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusBookingPreview;
