import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag size={24} className="text-black" />
              <h3 className="text-lg font-medium">OUTFIT 24</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Premium clothing and accessories for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">58/14A, GANESH NAGAR SIRUKADAL</li>
              <li className="text-gray-600">Tiruvallur TN, India</li>
              <li className="text-gray-600">Phone: +91 6383646772</li>
              <li><a href="mailto:contact@outfit24.com" className="text-gray-600 hover:text-black">contact@outfit24.com</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Accepted Payments</h4>
              <div className="grid grid-cols-2 gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="Google Pay" className="h-8" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; 2024 OUTFIT 24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;