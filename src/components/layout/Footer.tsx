import React from "react";
import Link from "next/link";
import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 border-t border-dark-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                FIT<span className="text-primary">FORCE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Premium fitness equipment engineered for performance. Transform your strength and upgrade your gym with our high-quality gear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-gray-400 hover:text-primary transition-colors text-sm">Shop All</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-primary transition-colors text-sm">Categories</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm">Fitness Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-primary transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-primary transition-colors text-sm">Returns & Warranty</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">123 Fitness Avenue, Performance City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:support@fitforcegear.com" className="text-gray-400 hover:text-primary text-sm transition-colors">support@fitforcegear.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FitForce Gear. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
