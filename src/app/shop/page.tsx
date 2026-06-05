"use client";

import React, { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Weights", "Bars", "Racks", "Cardio", "Accessories"];
  
  const filteredProducts = activeCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-900 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-4">
            Shop <span className="text-primary">Equipment</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Browse our complete collection of premium fitness gear. Elevate your home gym today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-dark-200 border border-dark-100 rounded-lg p-6 sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-heading font-bold text-white uppercase">Categories</h2>
              </div>
              
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category 
                          ? "bg-primary/10 text-primary font-bold border border-primary/20" 
                          : "text-gray-400 hover:text-white hover:bg-dark-100"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-dark-100">
                <h2 className="text-lg font-heading font-bold text-white uppercase mb-4">Sort By</h2>
                <div className="relative">
                  <select className="w-full appearance-none bg-dark-300 border border-dark-100 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">Showing <span className="text-white font-bold">{filteredProducts.length}</span> results</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
               <div className="text-center py-20 bg-dark-200 rounded-lg border border-dark-100">
                <p className="text-gray-400 text-lg mb-4">No products found in this category.</p>
                <Button onClick={() => setActiveCategory("All")}>Clear Filters</Button>
               </div>
            )}
            
            {/* Pagination Mock */}
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
