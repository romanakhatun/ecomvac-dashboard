"use client";

const products = [
  {
    name: "Wireless Headphones",
    sold: 120,
    revenue: "96,000 TK",
    img: "https://images.unsplash.com/photo-1518441902112-f1d6d0d9c1d5?w=200",
  },
  {
    name: "Smart Watch",
    sold: 98,
    revenue: "78,400 TK",
    img: "https://images.unsplash.com/photo-1511732351661-46dce4a2fbe4?w=200",
  },
  {
    name: "Gaming Mouse",
    sold: 85,
    revenue: "42,500 TK",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200",
  },
  {
    name: "Bluetooth Speaker",
    sold: 76,
    revenue: "38,000 TK",
    img: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=200",
  },
];

export default function TopSellingProducts() {
  return (
    <div className="card bg-white shadow-sm border border-slate-100 p-6">
      <h3 className="font-bold text-lg mb-6 border-b pb-4">
        Top Selling Products
      </h3>

      <div className="space-y-4">
        {products.map((p, i) => (
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
                <p className="text-xs text-slate-500">{p.sold} sold</p>
              </div>
            </div>

            {/* Revenue */}
            <p className="font-bold text-primary text-sm">{p.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
