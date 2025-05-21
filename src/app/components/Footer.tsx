'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Travel Booker</h2>
          <p className="text-gray-400 text-sm">
            Simplifying your travel experience — book buses and tours quickly & securely.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/buses">Buses</Link></li>
            <li><Link href="/tours">Tour Packages</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@travelbooker.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
          <p className="text-gray-400 text-sm">Location: Goa, India</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Travel Booker. All rights reserved.
      </div>
    </footer>
  )
}
