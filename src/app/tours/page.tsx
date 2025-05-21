'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  category: string;
  descriptionPoints: string[];
  image: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'Ooty Hill Escape',
    location: 'Ooty, Tamil Nadu',
    duration: '3 Days / 2 Nights',
    price: '₹6,999',
    category: 'Hill Station',
    descriptionPoints: [
      'Explore misty hills and scenic viewpoints',
      'Visit sprawling tea gardens',
      'Relax at serene lakes',
      'Ideal for nature lovers and peaceful retreats',
    ],
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Goa Beach Blast',
    location: 'Goa',
    duration: '4 Days / 3 Nights',
    price: '₹8,499',
    category: 'Beach',
    descriptionPoints: [
      'Experience vibrant beaches and nightlife',
      'Enjoy thrilling water sports',
      'Watch breathtaking sunsets',
      'Perfect for fun and relaxation',
    ],
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Adventure in Manali',
    location: 'Manali, Himachal Pradesh',
    duration: '5 Days / 4 Nights',
    price: '₹12,999',
    category: 'Adventure',
    descriptionPoints: [
      'Trek through stunning Himalayan trails',
      'Enjoy river rafting and paragliding',
      'Experience adrenaline-filled activities',
      'Perfect for adventure seekers',
    ],
    image:
      'https://images.unsplash.com/photo-1590487980291-e79b6d94d61c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Mystic Mysore Tour',
    location: 'Mysore, Karnataka',
    duration: '2 Days / 1 Night',
    price: '₹4,499',
    category: 'Cultural',
    descriptionPoints: [
      'Explore majestic palaces and heritage sites',
      'Shop in colorful local markets',
      'Experience vibrant festivals',
      'A cultural feast for history buffs',
    ],
    image:
      'https://images.unsplash.com/photo-1590051743369-0060c6c7c04f?auto=format&fit=crop&w=900&q=80',
  },
];

const categories = ['All', 'Hill Station', 'Adventure', 'Beach', 'Cultural'];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTours =
    selectedCategory === 'All'
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10">
          Explore Our Tour Packages
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold border transition text-sm sm:text-base ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group transform transition duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md select-none">
                  {tour.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tour.title}</h3>
                <p className="text-gray-700 mb-3">{tour.location}</p>

                <ul className="mb-4 text-gray-700 space-y-1 text-sm leading-relaxed">
                  {tour.descriptionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-green-600 text-lg">✅</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center font-semibold text-gray-900 mb-4">
                  <span className="text-blue-600">{tour.duration}</span>
                  <span className="text-xl">{tour.price}</span>
                </div>

                <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
