"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, Home, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "dumbbells", name: "Dumbbells", count: 45, image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop" },
  { id: "barbells", name: "Barbells", count: 24, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" },
  { id: "weight-plates", name: "Weight Plates", count: 32, image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop" },
  { id: "squat-racks", name: "Squat Racks", count: 18, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { id: "benches", name: "Benches", count: 21, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" },
  { id: "kettlebells", name: "Kettlebells", count: 38, image: "https://images.unsplash.com/photo-1519500528711-46ca2bf2e485?q=80&w=800&auto=format&fit=crop" },
  { id: "resistance-bands", name: "Resistance Bands", count: 15, image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=800&auto=format&fit=crop" },
  { id: "cardio-equipment", name: "Cardio Equipment", count: 42, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { id: "treadmills", name: "Treadmills", count: 12, image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop" },
  { id: "exercise-bikes", name: "Exercise Bikes", count: 14, image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop" },
  { id: "rowing-machines", name: "Rowing Machines", count: 8, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" },
  { id: "functional-trainers", name: "Functional Trainers", count: 10, image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" },
  { id: "accessories", name: "Accessories", count: 56, image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop" },
  { id: "yoga-mobility", name: "Yoga & Mobility", count: 28, image: "https://images.unsplash.com/photo-1599901860904-17e08827c1d7?q=80&w=800&auto=format&fit=crop" },
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = CATEGORIES.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-dark-900 pb-20">
      {/* Hero Banner */}
      <div className="relative bg-dark-800 border-b border-dark-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 tracking-tight"
          >
            Shop By <span className="text-primary">Category</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mb-8"
          >
            Discover our comprehensive range of premium fitness equipment designed for athletes and home gym enthusiasts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-dark-100 rounded-lg leading-5 bg-dark-200 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">Categories</span>
        </nav>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/shop?category=${encodeURIComponent(category.name)}`} className="group block h-full">
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-dark-200 border border-dark-100 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,87,34,0.15)] group-hover:-translate-y-1">
                    <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/20 transition-colors z-10" />
                    
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-dark-900 to-transparent">
                      <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium flex items-center">
                        <Dumbbell className="w-4 h-4 mr-1.5 opacity-70" />
                        {category.count} Products
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-dark-200 rounded-2xl border border-dark-100">
            <Search className="w-12 h-12 text-gray-500 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">No categories found</h3>
            <p className="text-gray-400">We couldn&apos;t find any categories matching &quot;{searchTerm}&quot;.</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-2 bg-dark-100 hover:bg-dark-50 text-white rounded-lg transition-colors border border-dark-50"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
