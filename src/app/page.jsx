"use client";
import React from "react";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  TruckOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import RecentOrdersTable from "@/components/RecentOrdersTable";
import Revenue from "@/components/Revenue";
import StateCard2 from "@/components/StateCard2";
import SalesBySource from "@/components/SalesBySource";
import LowStockAlert from "@/components/LowStockAlert";
import TopSellingProducts from "@/components/TopSellingProducts";
import OrderStatusTrends from "@/components/OrderStatusTrends";
import BangladeshDistrictMap from "@/components/BangladeshDistrictMap";

const KPI_DATA = [
  {
    title: "Total Order",
    value: "4 Orders",
    sub: "Today: 0",
    icon: ShoppingCartOutlined,
    colorHex: "#2563eb",
    bgHex: "#eff6ff",
    trend: "+21%",
    isUp: true,
  },
  {
    title: "Total Order Amount",
    value: "46,160 TK",
    sub: "Avg: 11,540 TK",
    icon: DollarCircleOutlined,
    colorHex: "#059669",
    bgHex: "#ecfdf5",
    trend: "-2%",
    isUp: false,
  },
  {
    title: "Total Shipping Price",
    value: "0 TK",
    sub: "4 Shipments",
    icon: TruckOutlined,
    colorHex: "#d97706",
    bgHex: "#fff7ed",
    trend: "+12%",
    isUp: true,
  },
  {
    title: "Profit (After Delivery)",
    value: "0 TK",
    sub: "Target: 50k",
    icon: LineChartOutlined,
    colorHex: "#7c3aed",
    bgHex: "#f5f3ff",
    trend: "+5%",
    isUp: true,
  },
];

export default function EcomvacDashboard() {
  return (
    <div className="text-slate-800">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-slate-500 font-medium">
            Real-time performance monitoring
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {KPI_DATA.map((item, i) => (
          <StateCard2 item={item} key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Revenue />
        </div>

        <SalesBySource />
      </div>
      <BangladeshDistrictMap />
      <>
        <OrderStatusTrends />
      </>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
        <LowStockAlert />

        <div className="lg:col-span-2">
          <TopSellingProducts />
        </div>
      </div>

      <RecentOrdersTable />
    </div>
  );
}
