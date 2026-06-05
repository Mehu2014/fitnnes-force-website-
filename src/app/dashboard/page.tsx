"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { User, Package, Heart, LogOut, TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { mockProducts } from "@/data/mockData";

export default function DashboardPage() {
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-dark-200 p-8 rounded-lg border border-dark-100 mb-10">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center border-2 border-primary">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold text-white uppercase tracking-tight">
                Welcome, {user.name}
              </h1>
              <p className="text-gray-400">{user.email}</p>
              {isAdmin && (
                <span className="inline-block mt-2 bg-primary text-black text-xs font-bold px-2 py-1 rounded-sm uppercase">
                  Administrator
                </span>
              )}
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </div>

        {isAdmin ? (
          /* Admin Dashboard */
          <div className="space-y-10">
            <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-6">Overview Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-dark-200 p-6 rounded-lg border border-dark-100 flex items-center gap-4">
                <div className="p-3 bg-green-500/20 text-green-500 rounded-lg"><DollarSign className="w-8 h-8" /></div>
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Sales</p>
                  <p className="text-3xl font-bold text-white">$124,560</p>
                </div>
              </div>
              <div className="bg-dark-200 p-6 rounded-lg border border-dark-100 flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg"><Package className="w-8 h-8" /></div>
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Orders</p>
                  <p className="text-3xl font-bold text-white">845</p>
                </div>
              </div>
              <div className="bg-dark-200 p-6 rounded-lg border border-dark-100 flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 text-purple-500 rounded-lg"><Users className="w-8 h-8" /></div>
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Customers</p>
                  <p className="text-3xl font-bold text-white">3,210</p>
                </div>
              </div>
              <div className="bg-dark-200 p-6 rounded-lg border border-dark-100 flex items-center gap-4">
                <div className="p-3 bg-primary/20 text-primary rounded-lg"><Activity className="w-8 h-8" /></div>
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Traffic</p>
                  <p className="text-3xl font-bold text-white">12.4K</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-dark-200 rounded-lg border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Revenue Chart
                </h3>
                <div className="h-64 flex items-end justify-between gap-2 border-b border-l border-dark-100 p-4">
                  {[40, 70, 45, 90, 65, 120, 100].map((h, i) => (
                    <div key={i} className="w-full bg-primary/50 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500 px-4">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              <div className="bg-dark-200 rounded-lg border border-dark-100 p-6">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" /> Recent Orders
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-gray-300">
                    <thead className="text-xs uppercase bg-dark-300 text-gray-400">
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Order ID</th>
                        <th className="px-4 py-3">Customer</th>
                        <th className="px-4 py-3">Total</th>
                        <th className="px-4 py-3 rounded-tr-lg">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dark-100">
                        <td className="px-4 py-3 text-white">#ORD-982</td>
                        <td className="px-4 py-3">John Doe</td>
                        <td className="px-4 py-3 font-bold">$1,240.00</td>
                        <td className="px-4 py-3"><span className="text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded text-xs">Processing</span></td>
                      </tr>
                      <tr className="border-b border-dark-100">
                        <td className="px-4 py-3 text-white">#ORD-981</td>
                        <td className="px-4 py-3">Jane Smith</td>
                        <td className="px-4 py-3 font-bold">$349.99</td>
                        <td className="px-4 py-3"><span className="text-green-500 bg-green-500/10 px-2 py-1 rounded text-xs">Shipped</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* User Dashboard */
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/4">
              <div className="bg-dark-200 border border-dark-100 rounded-lg overflow-hidden sticky top-28">
                <button className="w-full flex items-center gap-3 px-6 py-4 bg-primary/10 text-primary border-l-4 border-primary text-left font-bold transition-colors">
                  <Package className="w-5 h-5" /> Order History
                </button>
                <button className="w-full flex items-center gap-3 px-6 py-4 text-gray-400 hover:bg-dark-300 hover:text-white text-left transition-colors">
                  <Heart className="w-5 h-5" /> Wishlist
                </button>
                <button className="w-full flex items-center gap-3 px-6 py-4 text-gray-400 hover:bg-dark-300 hover:text-white text-left transition-colors border-t border-dark-100">
                  <User className="w-5 h-5" /> Account Settings
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4 space-y-10">
              
              {/* Order History */}
              <div className="bg-dark-200 rounded-lg border border-dark-100 p-6 lg:p-8">
                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-6">Order History</h2>
                
                {user.orders.length > 0 ? (
                  <div className="space-y-6">
                    {user.orders.map(order => (
                      <div key={order.id} className="border border-dark-100 rounded-lg p-6 bg-dark-300/50 flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-lg font-bold text-white">Order #{order.id}</h3>
                            <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs font-bold uppercase">{order.status}</span>
                          </div>
                          <p className="text-gray-400 text-sm">Placed on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary mb-2">${order.total.toFixed(2)}</p>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">You haven't placed any orders yet.</p>
                )}
              </div>

              {/* Wishlist Summary */}
              <div className="bg-dark-200 rounded-lg border border-dark-100 p-6 lg:p-8">
                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-6">Wishlist Snapshot</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {user.wishlist.map(id => {
                    const product = mockProducts.find(p => p.id === id);
                    if (!product) return null;
                    return (
                      <div key={id} className="border border-dark-100 rounded-lg p-4 flex gap-4 bg-dark-300">
                        <img src={product.images[0]} className="w-16 h-16 object-cover rounded" alt={product.name} />
                        <div>
                          <h4 className="text-white font-bold text-sm line-clamp-1 mb-1">{product.name}</h4>
                          <p className="text-primary font-bold text-sm">${product.price}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
