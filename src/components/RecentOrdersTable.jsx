const orders = [
  {
    date: "Feb 14, 2026",
    time: "03:12 PM",
    name: "John Smith",
    phone: "01712345678",
    method: "Online",
    amount: "2,450 ",
    status: "Delivered",
  },
  {
    date: "Feb 14, 2026",
    time: "11:25 AM",
    name: "Sarah Ahmed",
    phone: "01987654321",
    method: "COD",
    amount: "1,150 ",
    status: "Processing",
  },
  {
    date: "Feb 13, 2026",
    time: "08:10 PM",
    name: "Rahim Uddin",
    phone: "01655555555",
    method: "COD",
    amount: "3,200 ",
    status: "Shipped",
  },
  {
    date: "Feb 13, 2026",
    time: "09:40 AM",
    name: "Tanvir Hasan",
    phone: "01888888888",
    method: "Online",
    amount: "950 ",
    status: "Cancelled",
  },
  {
    date: "Feb 12, 2026",
    time: "02:15 PM",
    name: "Nusrat Jahan",
    phone: "01544444444",
    method: "COD",
    amount: "1,780 ",
    status: "Delivered",
  },
  {
    date: "Feb 12, 2026",
    time: "05:20 PM",
    name: "Mehedi Hasan",
    phone: "01700001111",
    method: "COD",
    amount: "2,990 ",
    status: "Pending",
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
      <div className="overflow-x-auto">
        <table className="table w-full pb-6">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr className="text-center">
              <th>S.No</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-sm text-center">
            {orders.map((order, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="text-center">{i + 1}</td>
                <td className="px-6 py-5">
                  <div className="font-semibold text-left">Feb 15, 2026</div>
                  <div className="text-xs text-slate-400 text-left">
                    10:49 AM
                  </div>
                </td>

                <td className="font-bold">{order.name}</td>
                <td>{order.phone}</td>
                <td>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded">
                    {order.method}
                  </span>
                </td>
                <td className="font-bold">{order.amount}TK</td>

                <td>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border whitespace-nowrap ${statusStyle[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
