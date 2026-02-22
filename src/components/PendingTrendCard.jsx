"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PendingTrendCard() {
  const pendingCount = 18;
  const themeColor = "#3b82f6"; // Blue

  const options = {
    chart: { sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2.5 },
    fill: { type: "gradient", gradient: { opacityFrom: 0.3, opacityTo: 0 } },
    colors: [themeColor],
    tooltip: { enabled: false },
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Pending Orders
            </p>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              {pendingCount}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              28% more
            </span>
            <p className="text-[9px] text-slate-400 mt-1 uppercase">
              vs last week
            </p>
          </div>
        </div>

        {/* Shortened Height Graph */}
        <div className="h-12 mt-4">
          <Chart
            options={options}
            series={[{ data: [15, 25, 20, 30, 25, 35, 28] }]}
            type="area"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
