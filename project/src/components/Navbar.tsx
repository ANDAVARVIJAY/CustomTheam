import React from 'react';
import { Heart, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold">OUTFIT 24</a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black">Men Shoes</a>
              <a href="#" className="text-gray-600 hover:text-black">Women Shoes</a>
              <a href="#" className="text-gray-600 hover:text-black">New</a>
              <a href="#" className="text-gray-600 hover:text-black">Sale</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-black">
              <User size={20} />
            </button>
            <button className="text-gray-600 hover:text-black">
              <Heart size={20} />
            </button>
            <button className="text-gray-600 hover:text-black relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;