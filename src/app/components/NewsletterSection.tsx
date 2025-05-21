"use client";

export default function NewsletterSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Stay Updated with{" "}
          <span className="text-blue-500">Exclusive Offers</span> &{" "}
          <span className="text-yellow-400">Travel Tips</span>
        </h2>
        <p className="text-gray-300 mb-8">
          Join our newsletter and be the first to get{" "}
          <span className="text-blue-400 font-medium">amazing deals</span>, 
          <span className="text-yellow-300 font-medium"> tour updates</span>, and travel inspiration delivered to your inbox.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // add your submit logic here
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
