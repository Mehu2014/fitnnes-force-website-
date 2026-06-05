import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function BestSellersPage() {
  return (
    <div className="min-h-screen bg-dark-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">Best Sellers</span>
        </nav>
        
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Best Sellers</h1>
        <p className="text-gray-400">Explore our most popular fitness equipment, trusted by athletes everywhere.</p>
        
        <div className="mt-12 text-center py-20 bg-dark-200 rounded-2xl border border-dark-100">
          <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
          <p className="text-gray-400">We are currently curating our best sellers list. Check back soon!</p>
          <Link href="/shop" className="inline-block mt-6 px-6 py-2 bg-primary text-dark-900 rounded-lg font-bold hover:bg-primary/90 transition-colors">
            Shop All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
