"use client";

import { AlertTriangle } from "lucide-react";

const lowStockProducts = [
  {
    name: "Wireless Headphones",
    stock: 4,
    img: "https://nextjs.spruko.com/velvet-js/preview/assets/images/ecommerce/jpg/3.jpg",
  },
  {
    name: "Smart Watch",
    stock: 2,
    img: "https://nextjs.spruko.com/velvet-js/preview/assets/images/ecommerce/jpg/3.jpg",
  },
  {
    name: "Gaming Mouse",
    stock: 5,
    img: "https://nextjs.spruko.com/velvet-js/preview/assets/images/ecommerce/jpg/3.jpg",
  },
  {
    name: "Bluetooth Speaker",
    stock: 3,
    img: "https://nextjs.spruko.com/velvet-js/preview/assets/images/ecommerce/jpg/3.jpg",
  },
];

export default function LowStockAlert() {
  return (
    <div className="card bg-white shadow-sm border border-slate-100 p-6">
      {/* Header */}
      <h3 className="font-bold text-lg mb-6 border-b pb-4">Low Stock Alert</h3>

      {/* List */}
      <div className="space-y-4">
        {lowStockProducts.map((p, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            {/* Product Info */}
            <div className="flex items-center gap-3">
              <img
                src={p.img}
                alt=""
                className="w-12 h-12 rounded-lg object-cover"
              />

              <div>
                <p className="font-semibold text-sm">{p.name}</p>
                <p className="text-xs text-slate-500">Only {p.stock} left</p>
              </div>
            </div>

            {/* Warning Badge */}
            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              <AlertTriangle size={16} />
              Low
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
