'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/data';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Lighting'];

  // In a real app, you would filter products by category
  // This is just a mockup for demonstration
  const filteredProducts = products;

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium furniture and decor pieces to transform your space.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium
              hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
} 