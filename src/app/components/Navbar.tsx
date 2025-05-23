'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-300 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TravelBooker
          </Link>

          {/* Desktop Links */}
          <div className="space-x-6 hidden md:flex">
            <Link href="/buses" className="hover:text-blue-600 text-gray-700">
              Buses
            </Link>
            <Link href="/tours" className="hover:text-blue-600 text-gray-700">
              Tour Packages
            </Link>
            <Link href="/contact" className="hover:text-blue-600 text-gray-700">
              Contact
            </Link>
          </div>

         

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Open menu"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Side drawer menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="text-xl font-bold text-blue-600" onClick={() => setMenuOpen(false)}>
            TravelBooker
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Close menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/buses" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Buses
          </Link>
          <Link href="/tours" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Tour Packages
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
         
        </nav>
      </div>

      {/* Overlay behind side menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
