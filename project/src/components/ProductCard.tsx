import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = () => {
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80"
          alt="Product"
          className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
        />
        <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
          <Heart size={16} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 text-white p-4 translate-y-full group-hover:translate-y-0 transition-all">
          <button className="w-full py-2 bg-white text-black rounded-full hover:bg-gray-100 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium">Classic White T-Shirt</h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-gray-900">$29.99</p>
          <p className="text-sm text-red-500">-20%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;