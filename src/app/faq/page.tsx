import React from "react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your shipping policy?",
      a: "We offer free standard shipping on all orders over $100 within the contiguous United States. Freight items like power racks may incur additional delivery fees."
    },
    {
      q: "What is the return policy?",
      a: "You can return any unused item in its original packaging within 30 days of delivery for a full refund, minus return shipping costs."
    },
    {
      q: "Do you offer warranties on your equipment?",
      a: "Yes. All structural steel frames carry a lifetime warranty. Moving parts, cables, and upholstery carry a 1-year to 5-year warranty depending on the specific product."
    },
    {
      q: "Do you offer financing?",
      a: "We partner with several financing providers to offer 0% APR options for up to 12 months for qualified buyers. You can select this option at checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight mb-8">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-dark-200 border border-dark-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
