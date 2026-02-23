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
import CustomTooltip from "./CustomTooltip";

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

export default function Revenue() {
  const stats = [
    { label: "Orders", value: "7,585" },
    { label: "Earnings", value: "2,289TK" },
    { label: "Refunds", value: "367" },
    { label: "Conversation", value: "18.92%" },
  ];

  return (
    <div
      style={{
        padding: "15px 0px",
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #f0f0f0",
      }}
    >
      <h2
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
          paddingLeft: 15,
        }}
      >
        Revenue
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px dashed #eee",
          borderBottom: "1px dashed #eee",
          padding: "5px 0",
          marginBottom: 30,
          backgroundColor: "#f9fbfb",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: 15,
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
                fontSize: 12,
                color: "#999",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 330 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
            // style={{ marginRight: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              vertical={true}
              stroke="#ccc"
              opacity={0.5}
            />

            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Legend
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: "#333" }}>
                  {value?.charAt(0).toUpperCase() + value?.slice(1)}
                </span>
              )}
            />

            {/* <Bar dataKey="earnings" fill="#2ebfac" barSize={16} />
            <Area dataKey="orders" stroke="#4f46e5" fill="#eef2ff" />
            <Line
              dataKey="refunds"
              stroke="#ef4444"
              strokeDasharray="5 5"
              dot={false}
            /> */}

            <Bar
              dataKey="earnings"
              //   name="Earnings"
              fill="#2ebfac"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
            <Area
              type="monotone"
              dataKey="orders"
              //   name="Orders"
              fill="#eef2ff"
              stroke="#4f46e5"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="refunds"
              //   name="Refunds"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              // strokeDasharray="5 5"
              // dot={{ r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
