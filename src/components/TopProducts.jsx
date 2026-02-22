const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "12,500 Tk",
    sales: 320,
    img: "https://i.pravatar.cc/80?img=12",
    status: "Top Seller",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: "8,900 Tk",
    sales: 210,
    img: "https://i.pravatar.cc/80?img=32",
    status: "Regular",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Accessories",
    price: "3,200 Tk",
    sales: 180,
    img: "https://i.pravatar.cc/80?img=45",
    status: "Trending",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: "6,750 Tk",
    sales: 150,
    img: "https://i.pravatar.cc/80?img=55",
    status: "Regular",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "9,200 Tk",
    sales: 120,
    img: "https://i.pravatar.cc/80?img=15",
    status: "Low Stock",
  },
];

const statusStyle = {
  "Top Seller": "bg-purple-100 text-purple-700",
  Trending: "bg-amber-100 text-amber-700",
  Regular: "bg-emerald-100 text-emerald-700",
  "Low Stock": "bg-red-100 text-red-700",
};

export default function TopProducts() {
  return (
    <div className="bg-white rounded-xl shadow border border-slate-200">
      {/* Header */}
      <div className="px-6 py-5 text-lg font-semibold text-slate-800">
        Top Products
      </div>

      {/* List */}
      <div>
        {products.map((p, index) => (
          <div
            key={p.id}
            className={`flex items-center gap-4 px-6 py-4 ${
              index !== products.length - 1 ? "border-b border-[#f0f0f0]" : ""
            }`}
          >
            {/* Image */}
            <img
              src={p.img}
              alt={p.name}
              className="w-12 h-12 rounded-lg object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="font-semibold text-slate-800">{p.name}</div>
              <div className="text-xs text-slate-400">{p.category}</div>
            </div>

            {/* Price */}
            <div className="font-bold text-slate-900">{p.price}</div>

            {/* Sales */}
            <div className="text-slate-500 text-sm w-20 text-right">
              {p.sales} sold
            </div>

            {/* Status */}
            <span
              className={`px-3 py-1 text-xs font-semibold rounded ${statusStyle[p.status]}`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
