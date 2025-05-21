'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BusInfo {
  id: number;
  destination: string;
  from: string;
  time: string;
  busImage: string;
  bgImage: string;
}

const buses: BusInfo[] = [
  {
    id: 1,
    destination: 'Bangalore',
    from: 'Goa',
    time: '08:00 AM',
    busImage: 'https://images.unsplash.com/photo-1587089941801-64fae2214855?auto=format&fit=crop&w=800&q=80',
    bgImage: 'https://images.unsplash.com/photo-1584947820783-693c1797c0a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    destination: 'Udupi',
    from: 'Goa',
    time: '10:30 AM',
    busImage: 'https://images.unsplash.com/photo-1607600457854-52f6b5e7d5a1?auto=format&fit=crop&w=800&q=80',
    bgImage: 'https://images.unsplash.com/photo-1583422409516-991d6d0ae9c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    destination: 'Mysore',
    from: 'Goa',
    time: '06:00 PM',
    busImage: 'https://images.unsplash.com/photo-1633327438260-1ef8d2ea38df?auto=format&fit=crop&w=800&q=80',
    bgImage: 'https://images.unsplash.com/photo-1625814213856-8c3736cbd390?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    destination: 'Ooty',
    from: 'Goa',
    time: '11:00 AM',
    busImage: 'https://images.unsplash.com/photo-1587089941801-64fae2214855?auto=format&fit=crop&w=800&q=80',
    bgImage: 'https://images.unsplash.com/photo-1549921296-3b4a7ebfe6bb?auto=format&fit=crop&w=800&q=80',
  },
];

const destinations = ['All', 'Bangalore', 'Udupi', 'Mysore', 'Ooty'];

const BusesPage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  const filteredBuses =
    selectedDestination === 'All'
      ? buses
      : buses.filter((bus) => bus.destination === selectedDestination);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Available Bus Routes</h1>

      {/* Destination Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {destinations.map((place) => (
          <button
            key={place}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              selectedDestination === place
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
            }`}
            onClick={() => setSelectedDestination(place)}
          >
            {place}
          </button>
        ))}
      </div>

      {/* Bus Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {filteredBuses.map((bus) => (
          <div key={bus.id} className="bg-white rounded-xl shadow-lg overflow-hidden relative">
            {/* Background Scenery */}
            <div className="relative h-40 w-full">
              <Image
                src={bus.bgImage}
                alt={`${bus.destination} scenery`}
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
              <div className="absolute inset-0 bg-black opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {bus.from} → {bus.destination}
              </div>
            </div>

            {/* Bus Info */}
            <div className="p-6 flex items-center gap-4">
              <div className="w-32 h-20 relative flex-shrink-0">
                <Image
                  src={bus.busImage}
                  alt="Bus"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{bus.destination} Express</p>
                <p className="text-sm text-gray-600">From: {bus.from}</p>
                <p className="text-sm text-gray-600">Departure: {bus.time}</p>
              </div>
            </div>

            {/* Book Button */}
            <div className="px-6 pb-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusesPage;
