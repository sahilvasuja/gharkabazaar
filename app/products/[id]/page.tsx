/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ShoppingBag, Heart} from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const similarProducts = products
    .filter(p => p.id !== product.id && (p.collection === product.collection || p.category === product.category))
    .slice(0, 4);

  const defaultColor = product?.colors?.[0] || 'white';
  const defaultSize = product?.sizes?.[0] || null;

  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [quantity, setQuantity] = useState(1);
  
  const colorDisplay = {
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
          <div className="relative h-[500px] md:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-indigo-600 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full ${colorDisplay[color as keyof typeof colorDisplay] || 'bg-gray-500'} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-600' : ''}`}
                    />
                ))}
              </div>
            </div>
            
            {product.sizes && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size: {selectedSize}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm ${selectedSize === size ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border text-gray-700 border-gray-300 rounded-l-md">-</button>
                <div className="w-14 h-10 border-t border-b border-gray-300 text-gray-800 flex items-center justify-center">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-gray-300 text-gray-700 rounded-r-md">+</button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
            </div>
          </div>
        </div>
        
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
