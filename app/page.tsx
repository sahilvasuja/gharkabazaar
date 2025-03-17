'use client';

import { products } from '@/lib/data';
import Image from 'next/image';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import CollectionTabs from '@/components/CollectionTabs';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function Home() {
  // Get bestsellers and new arrivals
  const bestsellers = products.filter(product => product.isBestseller);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[95vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* Background Video or Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="Fashion Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6 leading-tight">
                Discover Your
                <br />
                <span className="font-semibold italic">Signature Style</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 font-light">
                Curated collections of premium fashion and jewelry that define your unique personality.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/collections/women"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium 
                    hover:bg-gray-100 transition-colors inline-block shadow-lg"
                >
                  Shop Women
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/collections/men"
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-medium 
                    hover:bg-white/10 transition-colors inline-block backdrop-blur-sm"
                >
                  Shop Men
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-sm flex flex-col items-center"
          >
            <span className="mb-2">Scroll to explore</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedCategories />
      </motion.div>

      {/* New Arrivals Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">New Arrivals</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now Banner */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
            alt="Trending"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-light mb-8">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bestsellers.slice(0, 3).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Showcase */}
      <CollectionTabs products={products} />

      {/* Testimonials with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>

      {/* Newsletter with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Newsletter />
      </motion.div>
    </main>
  );
}
