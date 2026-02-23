"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ShoppingCart, DollarSign, RotateCcw, TrendingUp } from "lucide-react";

const data = [
  { name: "Jan", orders: 40, earnings: 90, refunds: 10 },
  { name: "Feb", orders: 65, earnings: 98, refunds: 12 },
  { name: "Mar", orders: 45, earnings: 30, refunds: 8 },
  { name: "Apr", orders: 70, earnings: 110, refunds: 15 },
  { name: "May", orders: 50, earnings: 78, refunds: 20 },
  { name: "Jun", orders: 60, earnings: 85, refunds: 11 },
  { name: "Jul", orders: 42, earnings: 52, refunds: 5 },
  { name: "Aug", orders: 44, earnings: 28, refunds: 9 },
  { name: "Sep", orders: 75, earnings: 95, refunds: 7 },
  { name: "Oct", orders: 52, earnings: 42, refunds: 28 },
  { name: "Nov", orders: 62, earnings: 88, refunds: 12 },
  { name: "Dec", orders: 68, earnings: 35, refunds: 32 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <p style={{ fontWeight: "bold" }}>{label}</p>
        {payload.map((item) => (
          <div key={item.name} style={{ color: item.color, fontSize: 12 }}>
            {item.name}:{" "}
            {item.name === "earnings" ? `${item.value}TK` : item.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Revenue() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const stats = [
    { label: "Orders", value: "7,585", icon: <ShoppingCart size={16} /> },
    { label: "Earnings", value: "2,289TK", icon: <DollarSign size={16} /> },
    { label: "Refunds", value: "367", icon: <RotateCcw size={16} /> },
    { label: "Conversation", value: "18.92%", icon: <TrendingUp size={16} /> },
  ];

  return (
    <div
      style={{
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #f0f0f0",
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Revenue
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px dashed #eee",
          borderBottom: "1px dashed #eee",
          padding: "20px 0",
          marginBottom: 30,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center",
              borderRight:
                stat.label !== "Conversation" ? "1px dashed #eee" : "none",
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: stat.label === "Conversation" ? "#10b981" : "#333",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 5,
                fontSize: 12,
                color: "#999",
              }}
            >
              {stat.icon} {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#ccc"
              opacity={0.5}
            />

            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
            />
            <YAxis axisLine={{ stroke: "#e5e7eb" }} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />

            <Legend
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: "#333" }}>
                  {value?.charAt(0).toUpperCase() + value?.slice(1)}
                </span>
              )}
            />

            <Bar dataKey="earnings" fill="#2ebfac" barSize={20} />
            <Area dataKey="orders" stroke="#4f46e5" fill="#eef2ff" />
            <Line
              dataKey="refunds"
              stroke="#ef4444"
              strokeDasharray="5 5"
              dot={false}
              //   dot={{ fill: "red", stroke: "none", r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
