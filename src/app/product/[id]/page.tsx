"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { Star, ShieldCheck, Truck, Plus, Minus, Check, Heart, ShoppingCart } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  const hasDiscount = product.discountPrice !== undefined;
  const price = hasDiscount ? product.discountPrice! : product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // In a real app we might show a toast notification here
  };

  return (
    <div className="bg-dark-900 min-h-screen py-10 border-t border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Mock */}
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Home / {product.category} / <span className="text-primary">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="bg-dark-200 border border-dark-100 rounded-lg overflow-hidden aspect-square relative mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {hasDiscount && (
                  <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg">
                    Sale
                  </span>
                )}
              </div>
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-24 h-24 rounded-md overflow-hidden border-2 ${activeImage === idx ? 'border-primary' : 'border-dark-100 hover:border-gray-500'} transition-colors`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-dark-100'}`} />
                ))}
              </div>
              <span className="text-gray-400 text-sm">({product.reviewsCount} reviews)</span>
              <span className="text-gray-600">|</span>
              <span className="text-sm text-gray-400">SKU: {product.sku}</span>
            </div>

            <div className="mb-6 flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white">${price.toFixed(2)}</span>
              {hasDiscount && (
                <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-8 py-6 border-y border-dark-100">
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary" />
                <span><strong className="text-white">Status:</strong> {product.stockStatus}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Truck className="w-5 h-5 text-primary" />
                <span><strong className="text-white">Shipping:</strong> Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span><strong className="text-white">Warranty:</strong> {product.specs.warranty || "1 Year Standard"}</span>
              </div>
            </div>

            {/* Purchase Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center bg-dark-200 border border-dark-100 rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center text-lg font-bold text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                className="flex-1 flex gap-2 items-center text-lg"
                disabled={product.stockStatus === "Out of Stock"}
              >
                <ShoppingCart className="w-6 h-6" /> Add to Cart
              </Button>
              
              <Button variant="outline" size="lg" className="px-6">
                <Heart className="w-6 h-6" />
              </Button>
            </div>

            {/* Specs Table */}
            <div className="mt-auto">
              <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wider mb-4 border-b border-dark-100 pb-2">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-gray-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
