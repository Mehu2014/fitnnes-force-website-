import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "5 Exercises to Maximize Your Adjustable Dumbbells",
      date: "Oct 12, 2023",
      category: "Workout Guides",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      excerpt: "Get the most out of your FitForce adjustable dumbbells with this full-body routine."
    },
    {
      id: 2,
      title: "Building the Ultimate Garage Gym on a Budget",
      date: "Sep 28, 2023",
      category: "Home Gym",
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=800&auto=format&fit=crop",
      excerpt: "You don't need a massive space or budget to build a functional, heavy-duty home gym."
    },
    {
      id: 3,
      title: "Barbell Maintenance: How to Keep the Knurling Fresh",
      date: "Sep 15, 2023",
      category: "Equipment Care",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      excerpt: "Proper care and maintenance of your Olympic barbell to ensure it lasts a lifetime."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8">
          FitForce <span className="text-primary">Blog</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-dark-200 border border-dark-100 rounded-lg overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs uppercase tracking-wider">
                  <span className="text-primary font-bold">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>
                <Link href="#" className="flex items-center text-white hover:text-primary transition-colors font-bold text-sm uppercase tracking-wider">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
