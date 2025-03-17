import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-light text-white mb-2">Stay in the loop</h3>
              <p className="text-indigo-100">Subscribe for exclusive offers and new arrivals</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-full bg-indigo-700 text-white placeholder-indigo-200 
                    border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-white flex-1 md:w-80"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium 
                    hover:bg-indigo-50 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-white">LUXE</span>
              <span className="text-2xl font-light tracking-tight text-indigo-400">STYLE</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Discover the latest trends in fashion and explore our curated collection of clothing and jewelry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/collections/women" className="text-gray-400 hover:text-white transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="text-gray-400 hover:text-white transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/kids" className="text-gray-400 hover:text-white transition-colors">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/jewelry" className="text-gray-400 hover:text-white transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/customer-service" className="text-gray-400 hover:text-white transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">support@luxestyle.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-400">Secure Payment Methods</span>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} LUXESTYLE. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 