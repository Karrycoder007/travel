import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-black px-6 sm:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">About Us</h2>
          <p className="text-lg sm:text-xl mb-4">
            We are a team of passionate travelers and tech enthusiasts dedicated to helping you explore the world, one destination at a time.
          </p>
          <p className="text-lg sm:text-xl mb-4">
            Our goal is to provide unforgettable travel experiences with curated packages for every kind of traveler — from thrill-seekers to leisure lovers.
          </p>
          <p className="text-lg sm:text-xl">
            We are committed to quality, safety, and creating memories that last a lifetime.
          </p>
        </div>

        {/* Bubble Images */}
        <div className="md:w-1/2 relative w-full max-w-[380px] h-[360px] mx-auto">
          {/* Bubble 1 - Large */}
          <img
            src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600&auto=format&fit=crop&q=60"
            alt="Travel"
            className="absolute w-28 h-28 rounded-full object-cover top-4 left-1/2 transform -translate-x-1/2 shadow-xl hover:scale-110 transition-transform duration-300"
          />
          {/* Bubble 2 - Medium */}
          <img
            src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&auto=format&fit=crop&q=60"
            alt="Adventure"
            className="absolute w-24 h-24 rounded-full object-cover top-[100px] left-4 shadow-lg"
          />
          {/* Bubble 3 - Largest */}
          <img
            src="https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600&auto=format&fit=crop&q=60"
            alt="Beach"
            className="absolute w-36 h-36 rounded-full object-cover bottom-6 left-1/3 shadow-2xl"
          />
          {/* Bubble 4 - Medium-Small */}
          <img
            src="https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?w=600&auto=format&fit=crop&q=60"
            alt="Culture"
            className="absolute w-20 h-20 rounded-full object-cover bottom-16 right-6 shadow-md"
          />
          {/* Bubble 5 - Smallest */}
          <img
            src="https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?w=600&auto=format&fit=crop&q=60"
            alt="Nature"
            className="absolute w-14 h-14 rounded-full object-cover top-16 right-1/4 shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
