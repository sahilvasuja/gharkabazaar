'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Heart, Menu, X, ChevronDown } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center text-xs sm:text-sm py-2 px-4">
        Free shipping on orders over $50 | Use code WELCOME15 for 15% off
      </div>

      <nav 
        className={`bg-white transition-all duration-300 sticky top-0 z-40 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 lg:hidden"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-gray-900">LUXE</span>
              <span className="text-xl sm:text-2xl font-light tracking-tight text-indigo-600">STYLE</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/collections/women" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Women
              </Link>
              <Link href="/collections/men" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Men
              </Link>
              <Link href="/collections/kids" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Kids
              </Link>
              <Link href="/collections/jewelry" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Jewelry
              </Link>
              <Link href="/sale" className="text-rose-600 hover:text-rose-700 transition-colors">
                Sale
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 hidden sm:flex"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/wishlist"
                className="p-2 rounded-full hover:bg-gray-100 hidden sm:flex"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/account"
                className="p-2 rounded-full hover:bg-gray-100 hidden sm:flex"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/cart"
                className="p-2 rounded-full hover:bg-gray-100 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-indigo-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed inset-y-0 left-0 w-full sm:w-80 bg-white transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-medium">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto h-full pb-20">
              <div className="py-2">
                <Link
                  href="/collections/women"
                  className="block px-4 py-3 text-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women
                </Link>
                <Link
                  href="/collections/men"
                  className="block px-4 py-3 text-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men
                </Link>
                <Link
                  href="/collections/kids"
                  className="block px-4 py-3 text-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kids
                </Link>
                <Link
                  href="/collections/jewelry"
                  className="block px-4 py-3 text-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jewelry
                </Link>
                <Link
                  href="/sale"
                  className="block px-4 py-3 text-lg text-rose-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </div>

              <div className="border-t">
                <div className="py-2">
                  <Link
                    href="/account"
                    className="flex items-center px-4 py-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-5 h-5 mr-3" />
                    My Account
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center px-4 py-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    Wishlist
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center px-4 py-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingBag className="w-5 h-5 mr-3" />
                    Orders
                  </Link>
                </div>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-t">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                  />
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
      </nav>
    </>
  );
} 