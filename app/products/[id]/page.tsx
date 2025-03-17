'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  
  // Find the current product
  const product = products.find(p => p.id === productId);
  
  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <a href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }
  
  // Find similar products (same collection or category)
  const similarProducts = products
    .filter(p => p.id !== product.id && (p.collection === product.collection || p.category === product.category))
    .slice(0, 4);
  
  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  
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
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative h-[500px] md:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            {/* Collection tag */}
            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
                {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}'s {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              {product.isNew && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full ml-2">
                  New Arrival
                </span>
              )}
              {product.isBestseller && (
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full ml-2">
                  Bestseller
                </span>
              )}
            </div>
            
            {/* Product name and price */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-indigo-600 mb-6">${product.price.toFixed(2)}</p>
            
            {/* Product description */}
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            {/* Color selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full ${colorDisplay[color] || 'bg-gray-500'} ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-600' : ''
                    }`}
                    title={color.charAt(0).toUpperCase() + color.slice(1)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>
            
            {/* Size selection (if applicable) */}
            {product.sizes && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size: <span className="font-normal">{selectedSize}</span></h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm ${
                        selectedSize === size 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  -
                </button>
                <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                onClick={() => alert(`Added ${quantity} ${product.name} to cart`)}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
            </div>
            
            {/* Product details */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
                <button className="text-indigo-600 text-sm font-medium flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
              <div className="prose prose-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Premium quality materials</li>
                  <li>Ethically sourced and manufactured</li>
                  <li>Free returns within 30 days</li>
                  <li>1 year warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 