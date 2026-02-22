"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProcessingTrendCard() {
  const processingCount = 9;
  const themeColor = "#10b981"; // Emerald Green

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
              Processing
            </p>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              {processingCount}
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
              34% more
            </span>
            <p className="text-[9px] text-slate-400 mt-1 uppercase">
              On Schedule
            </p>
          </div>
        </div>

        <div className="h-12 mt-4">
          <Chart
            options={options}
            series={[{ data: [6, 7, 5, 8, 7, 9, 9] }]}
            type="area"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
