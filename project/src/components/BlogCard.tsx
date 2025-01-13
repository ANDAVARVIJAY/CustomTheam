import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, excerpt }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="flex items-center space-x-2 text-sm group-hover:space-x-4 transition-all">
          <span>Read More</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;