import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8">
          About <span className="text-primary">FitForce</span>
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300">
            Founded in 2020, FitForce Gear was born out of a simple necessity: the need for commercial-grade fitness equipment that could withstand the most intense home workouts without breaking the bank.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop" 
            alt="Gym" 
            className="rounded-lg my-10 border border-dark-100 w-full"
          />
          <h2 className="text-2xl font-heading font-bold text-white uppercase mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To empower athletes of all levels by providing them with the tools they need to transform their strength, improve their health, and achieve their ultimate fitness goals. We believe that a high-quality gym should be accessible anywhere.
          </p>
          <h2 className="text-2xl font-heading font-bold text-white uppercase mt-12 mb-4">Quality Commitment</h2>
          <p className="text-gray-300">
            Every piece of FitForce equipment undergoes rigorous biomechanical and durability testing. From the knurling on our barbells to the precision welding on our power racks, we sweat the small stuff so you can sweat doing the big stuff.
          </p>
        </div>
      </div>
    </div>
  );
}
