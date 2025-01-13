import React from 'react';
import { Heart, ShoppingCart, Search, Instagram, Facebook, Twitter, Youtube, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import BlogCard from './components/BlogCard';
import CategoryCard from './components/CategoryCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-6xl font-light mb-6 text-center">
              Clothing<br />& Accessories
            </h1>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
                Shop Men
              </button>
              <button className="bg-white border border-black text-black px-8 py-3 rounded-full hover:bg-gray-50 transition">
                Shop Women
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
              alt="Model"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">New Arrivals</h2>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-black">New arrivals</button>
              <button className="text-gray-500 hover:text-black">Best Sellers</button>
              <button className="text-gray-500 hover:text-black">On Sale</button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {Array(8).fill(null).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            <CategoryCard title="Men Shoes" image="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Women Shoes" image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Accessories" image="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Bags" image="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </section>

      <Newsletter />
      
      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8">Our Blog</h2>
          <div className="grid grid-cols-3 gap-6">
            <BlogCard 
              image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              title="Summer Style Guide"
              excerpt="Discover the latest trends for this summer season..."
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
              title="Sustainable Fashion"
              excerpt="Learn about our commitment to sustainable fashion..."
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
              title="Autumn Collection Preview"
              excerpt="Get a sneak peek at our upcoming autumn collection..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;