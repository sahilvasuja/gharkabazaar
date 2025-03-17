'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'clothing' | 'jewelry';
  collection: 'men' | 'women' | 'kids';
  colors: string[];
  sizes?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  const { id, name, price, image, colors, sizes, isNew, isBestseller } = props;
  const [isHovered, setIsHovered] = useState(false);

  // Color display mapping
  const colorDisplay: Record<string, string> = {
    'white': 'bg-white border border-gray-300',
    'blue': 'bg-blue-500',
    'black': 'bg-black',
    'beige': 'bg-amber-100',
    'navy': 'bg-indigo-900',
    'olive': 'bg-olive-600',
    'silver': 'bg-gray-300',
    'gold': 'bg-amber-400',
    'pink': 'bg-pink-400',
    'yellow': 'bg-yellow-400',
    'cream': 'bg-amber-50 border border-gray-300',
    'green': 'bg-green-500',
    'red': 'bg-red-500',
    'light-wash': 'bg-blue-200'
  };

  return (
    <div 
      className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${id}`} className="block">
        <div className="relative h-80 overflow-hidden">
          {/* New or Bestseller Badge */}
          {(isNew || isBestseller) && (
            <div className="absolute top-2 left-2 z-10">
              {isNew && (
                <span className="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md mr-2">
                  NEW
                </span>
              )}
              {isBestseller && (
                <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  BESTSELLER
                </span>
              )}
            </div>
          )}
          
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{name}</h3>
          
          {/* Color Options */}
          <div className="flex items-center mb-3">
            <span className="text-xs text-gray-500 mr-2">Colors:</span>
            <div className="flex space-x-1">
              {colors.slice(0, 3).map((color) => (
                <div 
                  key={color} 
                  className={`w-4 h-4 rounded-full ${colorDisplay[color] || 'bg-gray-500'}`}
                  title={color}
                />
              ))}
              {colors.length > 3 && (
                <span className="text-xs text-gray-500">+{colors.length - 3}</span>
              )}
            </div>
          </div>
          
          {/* Size Options (if applicable) */}
          {sizes && sizes.length > 0 && (
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500 mr-2">Sizes:</span>
              <div className="flex space-x-1">
                {sizes.slice(0, 4).map((size) => (
                  <div 
                    key={size} 
                    className="text-xs text-gray-800 px-1.5 py-0.5 border border-gray-300 rounded"
                  >
                    {size}
                  </div>
                ))}
                {sizes.length > 4 && (
                  <span className="text-xs text-gray-500">+{sizes.length - 4}</span>
                )}
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-indigo-600">${price.toFixed(2)}</span>
            <span className="bg-indigo-600 text-white text-sm py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </span>
          </div>
        </div>
      </Link>
      
      {/* Quick Add to Cart Button */}
      <button 
        className={`absolute bottom-4 right-4 bg-indigo-600 text-white rounded-full p-3 shadow-md transform transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        onClick={(e) => {
          e.preventDefault();
          // Add to cart functionality
          alert(`Added ${name} to cart!`);
        }}
        aria-label="Add to cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
    </div>
  );
} 