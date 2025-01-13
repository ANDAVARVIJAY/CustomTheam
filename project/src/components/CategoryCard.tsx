import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;