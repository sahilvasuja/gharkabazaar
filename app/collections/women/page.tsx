'use client';

import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function WomensCollection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter women's products
  const womensProducts = products.filter(product => product.collection === 'women');
  
  // Filter by category if not 'all'
  const filteredProducts = activeCategory === 'all' 
    ? womensProducts 
    : womensProducts.filter(product => product.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-4">Women's Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our elegant collection for women
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex space-x-4">
          {['all', 'clothing', 'jewelry', 'accessories'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
} 