'use client';
import React from 'react';
import Image from 'next/image';

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
            Our goal is to provide unforgettable travel experiences with curated packages for every kind of traveler — from thrill-seekers to leisure lovers.
          </p>
        </div>

        {/* Bubble Images */}
        <div className="md:w-1/2 relative w-full max-w-[380px] h-[360px] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600"
            alt="Travel"
            width={112}
            height={112}
            className="absolute w-28 h-28 rounded-full object-cover top-4 left-[45%] transform -translate-x-1/2 shadow-xl hover:scale-110"
          />
          <Image
            src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=600"
            alt="Adventure"
            width={96}
            height={96}
            className="absolute w-24 h-24 rounded-full object-cover top-25 left-4 shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600"
            alt="Beach"
            width={144}
            height={144}
            className="absolute w-36 h-36 rounded-full object-cover bottom-6 left-[30%] shadow-2xl"
          />
          <Image
            src="https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?w=600"
            alt="Culture"
            width={80}
            height={80}
            className="absolute w-20 h-20 rounded-full object-cover bottom-18 right-6 shadow-md"
          />
          <Image
            src="https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?w=600"
            alt="Nature"
            width={56}
            height={56}
            className="absolute w-14 h-14 rounded-full object-cover top-15 right-[20%] shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
