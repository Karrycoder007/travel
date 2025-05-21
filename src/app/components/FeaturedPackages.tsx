// components/FeaturedPackages.tsx

import React from 'react';

const FeaturedPackages: React.FC = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-black">Featured Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Romantic Paris Getaway</h3>
            <p>Experience the charm of Paris in a 5-day romantic tour, including a Seine River cruise, Eiffel Tower visit, and more!</p>
            <p className="text-lg font-bold mt-4">$799 per person</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              Book Now
            </button>
          </div>
          {/* Package 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Tokyo Adventure</h3>
            <p>Explore the exciting streets of Tokyo, visit ancient temples, and dive into Japan’s rich culture with this 7-day package.</p>
            <p className="text-lg font-bold mt-4">$1,099 per person</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              Book Now
            </button>
          </div>
          {/* Package 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Bali Relaxation Escape</h3>
            <p>Unwind in the tropical paradise of Bali with a luxurious 6-day retreat, including spa treatments and beach relaxation.</p>
            <p className="text-lg font-bold mt-4">$899 per person</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPackages;
