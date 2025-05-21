"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      console.log("Form submitted:", form);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Have questions about your trip, bookings, or group packages? Drop
            us a message and our travel expert will get back to you shortly.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-green-600 text-lg font-semibold">
              Thanks! We’ll get back to you soon.
            </p>
          )}
        </div>

        {/* Right: Image and Map */}
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
            alt="Travel team"
            className="rounded-xl w-full h-64 object-cover shadow-md"
          />
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12216.99939484756!2d-0.12775850212897258!3d51.50735075716964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333f244511%3A0x6e4b049f4d47c0e2!2sLondon!5e0!3m2!1sen!2sin!4v1685111647837!5m2!1sen!2sin"
            className="w-full h-64 rounded-xl border-0 shadow-md"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
