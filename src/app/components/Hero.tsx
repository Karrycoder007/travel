"use client";

import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60",
  "/images/bus4.jpg",
];

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-32 px-4 sm:px-6">
      {/* Background slideshow */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          opacity: 0.25,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Discover Your Next Bus Journey
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-blue-100">
          Travel smart, travel safe. Book your bus tickets effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-700 transition">
            Explore Destinations
          </button>
          <button className="px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition">
            Book Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=800&auto=format&fit=crop&q=80"
            alt="Bus Travel"
            className="w-full max-w-3xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
