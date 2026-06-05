"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  
  const tax = subtotal * 0.08; // Mock 8% tax
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15.00;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-dark-900 px-4">
        <div className="w-24 h-24 bg-dark-200 rounded-full flex items-center justify-center mb-6 border border-dark-100">
          <ShoppingBag className="w-10 h-10 text-gray-500" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-white uppercase tracking-tight mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8 max-w-md text-center">
          Looks like you haven't added any gear to your cart yet. Gear up and start your fitness journey today.
        </p>
        <Link href="/shop">
          <Button size="lg" className="px-10">Shop Equipment</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark-900 min-h-screen py-10 border-t border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-heading font-bold text-white uppercase tracking-tight mb-10">
          Shopping <span className="text-primary">Cart</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-dark-200 border border-dark-100 rounded-lg overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-dark-100 bg-dark-300 text-xs text-gray-400 uppercase tracking-wider font-bold">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
                <div className="col-span-1 text-center"></div>
              </div>
              
              <ul className="divide-y divide-dark-100">
                {items.map((item) => {
                  const price = item.discountPrice || item.price;
                  return (
                    <li key={item.id} className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
                      <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md border border-dark-100" 
                        />
                        <div>
                          <Link href={`/product/${item.id}`} className="text-lg font-bold text-white hover:text-primary transition-colors line-clamp-2 leading-tight mb-1">
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-400 mb-1">SKU: {item.sku}</div>
                          <div className="text-primary font-bold">${price.toFixed(2)}</div>
                        </div>
                      </div>
                      
                      <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center">
                        <div className="flex items-center bg-dark-300 border border-dark-100 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 sm:p-3 text-gray-400 hover:text-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 sm:p-3 text-gray-400 hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-2 text-left sm:text-right font-bold text-lg text-white">
                        ${(price * item.quantity).toFixed(2)}
                      </div>

                      <div className="col-span-1 sm:col-span-1 flex justify-end">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-2 bg-dark-300 rounded-full"
                          title="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-dark-200 border border-dark-100 rounded-lg p-6 lg:p-8 sticky top-28">
              <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-6 border-b border-dark-100 pb-4">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-primary font-bold uppercase text-sm flex items-center">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <div className="border-t border-dark-100 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-xl text-white font-bold uppercase tracking-wider">Total</span>
                  <span className="text-3xl font-heading font-bold text-primary">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">Taxes and shipping calculated at checkout</p>
              </div>

              <Button size="full" className="text-lg flex justify-center items-center gap-2">
                Checkout <ArrowRight className="w-5 h-5" />
              </Button>

              <div className="mt-6 flex justify-center gap-4 text-gray-500">
                {/* Simulated payment icons using text for simplicity */}
                <span className="text-xs border border-dark-100 px-2 py-1 rounded">VISA</span>
                <span className="text-xs border border-dark-100 px-2 py-1 rounded">MasterCard</span>
                <span className="text-xs border border-dark-100 px-2 py-1 rounded">PayPal</span>
                <span className="text-xs border border-dark-100 px-2 py-1 rounded">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
