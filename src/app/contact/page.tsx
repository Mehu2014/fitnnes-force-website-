import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">Contact</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h1 className="text-4xl font-heading font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400 mb-8">We would love to hear from you. Reach out to our team with any questions or feedback.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-200 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Our Address</h3>
                  <p className="text-gray-400 text-sm mt-1">123 Fitness Avenue, Performance City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-200 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-200 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-gray-400 text-sm mt-1">support@fitforcegear.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-200 rounded-2xl p-8 border border-dark-100">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                <input type="text" className="w-full bg-dark-900 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input type="email" className="w-full bg-dark-900 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-dark-900 border border-dark-100 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-dark-900 font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
