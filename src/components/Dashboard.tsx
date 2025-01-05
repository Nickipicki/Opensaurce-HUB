import React from 'react';
import { BarChart3, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, trend }: { icon: any, value: string, label: string, trend: string }) => (
  <div className="bg-gray-800/50 rounded-xl p-4">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-indigo-500/20 rounded-lg">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <span className="text-gray-400">{label}</span>
    </div>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-sm text-emerald-400">+{trend}%</span>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 -mt-20">
      <div className="bg-[#0D1117]/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 shadow-2xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-800/50 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-8">
            <div className="bg-gray-800/50 rounded-lg px-4 py-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search here..." 
                className="bg-transparent border-none outline-none text-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={TrendingUp} value="$5k" label="Total Sales" trend="12" />
          <StatCard icon={ShoppingCart} value="500" label="Total Orders" trend="8" />
          <StatCard icon={BarChart3} value="9" label="Products Sold" trend="24" />
          <StatCard icon={Users} value="12" label="New Customers" trend="18" />
        </div>

        {/* Chart Preview */}
        <div className="h-64 bg-gray-800/50 rounded-xl" />
      </div>
    </div>
  );
}