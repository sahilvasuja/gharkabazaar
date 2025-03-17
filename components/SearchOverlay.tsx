'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Handle search
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = products.filter(product => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.collection.toLowerCase().includes(term)
    );
    
    setSearchResults(results);
  }, [searchTerm]);
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Search header */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products..."
            className="flex-1 border-none focus:ring-0 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Search results */}
        <div className="overflow-y-auto flex-1 p-4">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Start typing to search for products</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 mb-4">Found {searchResults.length} results for "{searchTerm}"</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/products/${product.id}`}
                    className="group flex flex-col hover:bg-gray-50 rounded-lg p-3 transition-colors"
                    onClick={onClose}
                  >
                    <div className="relative h-40 bg-gray-100 rounded-md overflow-hidden mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-indigo-600 font-medium">${product.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}'s {product.category}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 