const orders = [
  {
    id: "#ORD-12904",
    source: "Website",
    status: "Pending",
    amount: "18,980 TK",
  },
  {
    id: "#ORD-12905",
    source: "Website",
    status: "Delivered",
    amount: "18,980 TK",
  },
  {
    id: "#ORD-12906",
    source: "WhatsApp",
    status: "Cancelled",
    amount: "9,500 TK",
  },
  {
    id: "#ORD-12907",
    source: "Messenger",
    status: "Shipped",
    amount: "22,300 TK",
  },
];

const statusStyle = {
  Delivered: "bg-emerald-100 text-emerald-600",
  Pending: "bg-blue-100 text-blue-600",
  Cancelled: "bg-red-100 text-red-600",
  Shipped: "bg-amber-100 text-amber-600",
};

export default function RecentOrders() {
  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase">
            <tr>
              <th>Order ID</th>
              <th>Source</th>
              <th>Status</th>
              <th>Amount</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50">
                {/* Order ID */}
                <td className="font-bold">{order.id}</td>

                {/* Source */}
                <td>
                  <span className="badge badge-ghost badge-sm font-bold uppercase text-[9px]">
                    {order.source}
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyle[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Amount */}
                <td className="font-black">{order.amount}</td>

                {/* Action */}
                <td className="text-right font-bold text-primary cursor-pointer hover:underline">
                  Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
