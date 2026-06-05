export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  images: string[];
  description: string;
  specs: {
    weight?: string;
    material?: string;
    dimensions?: string;
    loadCapacity?: string;
    warranty?: string;
    includedAccessories?: string;
  };
  sku: string;
  brand: string;
}

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "FitForce Adjustable Dumbbells 5-52.5 lbs",
    category: "Weights",
    price: 399.99,
    discountPrice: 349.99,
    rating: 4.8,
    reviewsCount: 1245,
    stockStatus: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Replace 15 sets of weights with a single pair. Adjusts from 5 to 52.5 lbs.",
    specs: {
      weight: "52.5 lbs per dumbbell",
      material: "Steel, Nylon, ABS, Thermoplastic Rubber",
      dimensions: "15.75\" L x 8\" W x 9\" H",
      warranty: "2 Years",
    },
    sku: "FF-ADJ-52",
    brand: "FitForce Gear",
  },
  {
    id: "p2",
    name: "Elite Olympic Barbell 20kg",
    category: "Bars",
    price: 249.99,
    rating: 4.9,
    reviewsCount: 890,
    stockStatus: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Premium knurling and exceptional whip. The perfect bar for powerlifting and Olympic lifting.",
    specs: {
      weight: "20kg (44 lbs)",
      material: "Alloy Steel",
      loadCapacity: "1500 lbs",
      warranty: "Lifetime",
    },
    sku: "FF-OLY-20",
    brand: "FitForce Gear",
  },
  {
    id: "p3",
    name: "Pro Series Squat Rack",
    category: "Racks",
    price: 699.99,
    discountPrice: 599.99,
    rating: 4.7,
    reviewsCount: 450,
    stockStatus: "Low Stock",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Heavy-duty power rack for serious home gyms. Includes pull-up bar and j-hooks.",
    specs: {
      weight: "185 lbs",
      material: "11-gauge steel",
      dimensions: "48\" L x 48\" W x 90\" H",
      loadCapacity: "1000 lbs",
    },
    sku: "FF-RACK-PRO",
    brand: "FitForce Gear",
  },
  {
    id: "p4",
    name: "Assault AirBike Classic",
    category: "Cardio",
    price: 749.99,
    rating: 4.6,
    reviewsCount: 2310,
    stockStatus: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop",
    ],
    description: "The ultimate full-body workout. Unlimited resistance based on how hard you pedal and push.",
    specs: {
      weight: "98 lbs",
      material: "Steel frame",
      dimensions: "50.9\" L x 23.3\" W x 48.4\" H",
      warranty: "5 Years Frame, 2 Years Parts",
    },
    sku: "FF-AIRBIKE",
    brand: "FitForce Gear",
  },
  {
    id: "p5",
    name: "Competition Kettlebell Set",
    category: "Weights",
    price: 129.99,
    rating: 4.8,
    reviewsCount: 320,
    stockStatus: "Out of Stock",
    images: [
      "https://images.unsplash.com/photo-1519500528711-46ca2bf2e485?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Color-coded competition style kettlebells. Perfect for swings, snatches, and get-ups.",
    specs: {
      weight: "Available 8kg - 32kg",
      material: "Cast Iron with Powder Coat",
      warranty: "Lifetime",
    },
    sku: "FF-KB-SET",
    brand: "FitForce Gear",
  },
  {
    id: "p6",
    name: "Heavy Duty Resistance Bands Set",
    category: "Accessories",
    price: 49.99,
    discountPrice: 39.99,
    rating: 4.5,
    reviewsCount: 1560,
    stockStatus: "In Stock",
    images: [
      "https://images.unsplash.com/photo-1598266663439-2056e6900339?q=80&w=800&auto=format&fit=crop",
    ],
    description: "Set of 5 resistance bands ranging from 10 to 150 lbs of resistance.",
    specs: {
      material: "Natural Latex",
      includedAccessories: "Handles, door anchor, ankle straps, carrying bag",
    },
    sku: "FF-BANDS-5",
    brand: "FitForce Gear",
  }
];

export const mockUser = {
  id: "u1",
  name: "Alex Fitness",
  email: "alex@example.com",
  role: "user", // 'user' or 'admin'
  orders: [
    { id: "ord_1", date: "2023-10-15", total: 439.98, status: "Delivered" },
  ],
  wishlist: ["p2", "p5"],
};
