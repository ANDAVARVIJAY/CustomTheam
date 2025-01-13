import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-4">
          Join the OUTFIT 24 mailing list
        </h2>
        <p className="text-gray-400 mb-8">
          to gain exclusive access
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-r-full hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;