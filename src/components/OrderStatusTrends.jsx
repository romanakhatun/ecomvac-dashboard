"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const cards = [
  {
    title: "Pending Orders",
    count: "18",
    color: "#3b82f6",
    icon: "⏳",
    data: [12, 15, 10, 18, 16, 20, 18],
  },
  {
    title: "Processing Orders",
    count: "9",
    color: "#f59e0b",
    icon: "⚙️",
    data: [6, 7, 5, 8, 7, 9, 9],
  },
  {
    title: "Delivered Orders",
    count: "42",
    color: "#10b981",
    icon: "📦",
    data: [30, 34, 28, 36, 39, 41, 42],
  },
];

export default function OrderStatusTrends() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => {
        const options = {
          chart: {
            sparkline: { enabled: true },
            toolbar: { show: false },
          },

          stroke: {
            curve: "smooth",
            width: 3,
          },

          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.35,
              opacityTo: 0.05,
            },
          },

          colors: [card.color],

          tooltip: {
            enabled: false,
          },
        };

        const series = [{ data: card.data }];

        return (
          <div
            key={i}
            className="bg-white rounded-xl shadow border border-slate-200 p-6 flex flex-col justify-between"
          >
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-xl">
                  {card.icon}
                </div>

                <div>
                  <div className="text-sm text-slate-500">{card.title}</div>
                  <div className="text-3xl font-bold text-slate-900">
                    {card.count}
                  </div>
                </div>
              </div>
            </div>

            {/* Sparkline */}
            <div className="mt-6">
              <Chart
                options={options}
                series={series}
                type="area"
                height={90}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
