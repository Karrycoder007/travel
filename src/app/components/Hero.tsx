"use client";

import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60",
  "/images/bus4.jpg",
];

const mockBuses = [
  {
    id: 1,
    from: "Bangalore",
    to: "Mysore",
    date: "2025-05-18",
    name: "KSRTC Airavat",
    departure: "08:00 AM",
    arrival: "11:00 AM",
    price: "₹350",
    image: "https://plus.unsplash.com/premium_photo-1747371476846-1af8fbc9f3c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    from: "Bangalore",
    to: "Mysore",
    date: "2025-05-18",
    name: "SRS Travels",
    departure: "10:00 AM",
    arrival: "01:30 PM",
    price: "₹300",
    image: "https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww",
  },
];

export default function Hero() {
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [date, setDate] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);

  const places = ["Bangalore", "Mysore", "Goa", "Hyderabad", "Chennai"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      // TEMPORARY: Always show buses for testing
      setBuses(mockBuses);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative text-white py-24 px-4 sm:px-6">
      {/* Background slideshow */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          opacity: 0.25,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Plan Your Next Journey
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-blue-100">
          Find your best travel route and book your trip with ease.
        </p>

        {/* Filter Search */}
        <div className="w-full max-w-5xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              From (Departure)
            </label>
            <input
              list="fromSuggestions"
              type="text"
              value={fromPlace}
              onChange={(e) => setFromPlace(e.target.value)}
              placeholder="e.g. Bangalore"
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <datalist id="fromSuggestions">
              {places.map((place) => (
                <option key={place} value={place} />
              ))}
            </datalist>
          </div>

          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              To (Destination)
            </label>
            <input
              list="toSuggestions"
              type="text"
              value={toPlace}
              onChange={(e) => setToPlace(e.target.value)}
              placeholder="e.g. Mysore"
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <datalist id="toSuggestions">
              {places.map((place) => (
                <option key={place} value={place} />
              ))}
            </datalist>
          </div>

          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Date of Journey
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 text-gray-800 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-400"
            >
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-700 transition">
            Explore Destinations
          </button>
          <button className="px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition">
            Plan Your Trip
          </button>
        </div>

        {/* Bus results */}
        <div className="mt-12 max-w-5xl mx-auto text-left">
          {loading ? (
            <p className="text-xl text-white">Loading buses...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {buses.map((bus) => (
                <div
                  key={bus.id}
                  className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img src={bus.image} alt={bus.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{bus.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {bus.from} → {bus.to}
                    </p>
                    <p className="text-sm text-gray-600">
                      {bus.departure} – {bus.arrival}
                    </p>
                    <p className="text-blue-600 font-bold mt-2">{bus.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
