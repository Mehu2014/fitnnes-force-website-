"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/mockData";
import { Button } from "./Button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const hasDiscount = product.discountPrice !== undefined;
  const price = hasDiscount ? product.discountPrice! : product.price;

  return (
    <div className="group flex flex-col bg-dark-200 border border-dark-100 rounded-lg overflow-hidden hover:border-primary transition-colors duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-dark-300">
        <Link href={`/product/${product.id}`}>
          {/* We use standard img here since we don't have configured next/image domains perfectly for all random urls */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              Sale
            </span>
          )}
          {product.stockStatus === "Out of Stock" && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              Sold Out
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-dark-100/80 backdrop-blur text-white p-2 rounded-full hover:text-primary transition-colors hover:bg-dark-900">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">{product.category}</div>
        <Link href={`/product/${product.id}`} className="block mb-2 group-hover:text-primary transition-colors">
          <h3 className="font-heading font-bold text-lg text-white line-clamp-2">{product.name}</h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm text-gray-300 font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviewsCount})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {hasDiscount ? (
              <>
                <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
                <span className="text-xl font-bold text-white">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            variant="primary" 
            size="sm" 
            className="!px-3 !py-2 rounded-full"
            onClick={() => addToCart(product, 1)}
            disabled={product.stockStatus === "Out of Stock"}
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
