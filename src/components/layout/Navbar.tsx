"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X, Dumbbell } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { user } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Reviews", href: "/reviews" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-900/95 backdrop-blur-md border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                FIT<span className="text-primary">FORCE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/cart" className="relative text-gray-300 hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-dark-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link href={user ? "/dashboard" : "/auth/login"} className="text-gray-300 hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="relative text-gray-300 hover:text-primary transition-colors mr-4">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-dark-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-200 border-b border-dark-100 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href ? "text-primary bg-dark-100" : "text-gray-300 hover:text-white hover:bg-dark-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={user ? "/dashboard" : "/auth/login"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-100"
          >
            {user ? "Dashboard" : "Login / Sign Up"}
          </Link>
        </div>
      )}
    </nav>
  );
}
