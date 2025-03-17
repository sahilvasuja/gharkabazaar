'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/data';
import Link from 'next/link';

interface CollectionTabsProps {
  products: Product[];
}

export default function CollectionTabs({ products }: CollectionTabsProps) {
  const [activeCollection, setActiveCollection] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products based on active collection and category
  const filteredProducts = products.filter(product => {
    if (activeCollection !== 'all' && product.collection !== activeCollection) {
      return false;
    }
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    return true;
  });

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest fashion and jewelry pieces for men, women, and kids.
          </p>
        </div>

        {/* Collection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            {['all', 'men', 'women', 'kids'].map((collection) => (
              <button
                key={collection}
                onClick={() => setActiveCollection(collection)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCollection === collection
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {collection === 'all' ? 'All' : collection.charAt(0).toUpperCase() + collection.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex space-x-4">
            {['all', 'clothing', 'jewelry'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 text-sm font-medium border-b-2 transition-all ${
                  activeCategory === category
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-medium
              hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 