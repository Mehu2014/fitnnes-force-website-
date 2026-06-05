"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mockProducts } from "@/data/mockData";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  const bestSellers = mockProducts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="Athletes using gym equipment"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
            Transform Your <span className="text-primary">Strength</span>.<br /> Upgrade Your Gym.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Premium fitness equipment engineered for performance. Built for those who demand the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10">Shop Now</Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10">Explore Collections</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/10 border-y border-primary/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">50K+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Fitness Enthusiasts</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">100K+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Products Sold</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">99%</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 uppercase tracking-tight">Best Sellers</h2>
              <p className="text-gray-400">Our most popular equipment, trusted by athletes worldwide.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center text-primary hover:text-white transition-colors">
              <span className="font-bold mr-2 uppercase text-sm tracking-wider">View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/shop">
              <Button variant="outline" className="w-full">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
                alt="Premium gym setup"
                className="rounded-lg shadow-[0_0_30px_rgba(57,255,20,0.15)] border border-dark-100"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                Why Choose <span className="text-primary">FitForce</span>?
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Commercial Grade Quality", desc: "Built with heavy-duty materials designed to withstand intense daily use." },
                  { title: "Innovative Design", desc: "Space-saving solutions and biomechanically correct equipment." },
                  { title: "Industry Leading Warranty", desc: "Lifetime warranty on frames and extensive coverage on parts." },
                  { title: "Fast & Reliable Shipping", desc: "Get your gear quickly with our optimized logistics network." }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900 border-t border-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase tracking-tight">Trusted by Athletes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-dark-200 p-8 rounded-lg border border-dark-100 text-left relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "The quality of FitForce gear is unmatched. The adjustable dumbbells replaced my entire rack and feel incredibly sturdy during heavy lifts."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-dark-300 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80`} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Sarah Jenkins</h4>
                    <p className="text-primary text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
