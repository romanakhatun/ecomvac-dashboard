"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  ShoppingCart,
  DollarSign,
  Truck,
  TrendingUp,
  Clock,
  RotateCw,
  CheckCircle,
  XCircle,
  Globe,
  MessageSquare,
  Phone,
  Layout,
} from "lucide-react";
import StateCard from "@/components/StateCard";
import SalesAnalyticsChart from "@/components/SalesAnalyticsChart";
import RecentOrdersTable from "@/components/RecentOrdersTable";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// --- MOCK DATA ---
const KPI_DATA = [
  {
    title: "Total Order",
    value: "4 Orders",
    sub: "Today: 0",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    trend: "+21%",
    isUp: true,
  },
  {
    title: "Total Order Amount",
    value: "46,160 TK",
    sub: "Avg: 11,540 TK",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    trend: "-2%",
    isUp: false,
  },
  {
    title: "Total Shipping Price",
    value: "0 TK",
    sub: "4 Shipments",
    icon: Truck,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    trend: "+12%",
    isUp: true,
  },
  {
    title: "Profit (After Delivery)",
    value: "0 TK",
    sub: "Target: 50k",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    trend: "+5%",
    isUp: true,
  },
];

const STATUS_DATA = [
  {
    title: "Total Pending Order",
    value: "37,960 TK",
    count: "2 Orders",
    icon: Clock,
    color: "text-amber-500",
  },
  {
    title: "Total Processing Order",
    value: "0 TK",
    count: "0 Orders",
    icon: RotateCw,
    color: "text-info",
  },
  {
    title: "Total Delivered Order",
    value: "0 TK",
    count: "0 Orders",
    icon: CheckCircle,
    color: "text-success",
  },
  {
    title: "Total Cancelled Orders",
    value: "0 TK",
    count: "0 Orders",
    icon: XCircle,
    color: "text-error",
  },
];

const SOURCE_SALES_DATA = [
  { name: "Website", sales: 46160 },
  { name: "WhatsApp", sales: 18500 },
  { name: "Messenger", sales: 9200 },
  { name: "Landing Page", sales: 12300 },
];

export default function EcomvacDashboard() {
  const donutOptions = {
    labels: ["Electronics", "Laptops", "Fashion", "Home"],
    colors: ["#ff99af", "#93c5fd", "#c084fc", "#fbbf24"],
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: { show: true, label: "Sales", formatter: () => "46k" },
          },
        },
      },
    },
    legend: { position: "bottom" },
    dataLabels: { enabled: false },
    stroke: { show: false },
  };

  return (
    <div className="p-4 lg:p-8 bg-[#f9fafb] min-h-screen text-slate-800">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-slate-500 font-medium">
            Real-time performance monitoring
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {KPI_DATA.map((item, i) => (
          <StateCard item={item} key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white shadow-sm lg:col-span-2 p-6 border border-slate-100">
          <h3 className="font-bold text-lg mb-6 border-b pb-6 border-[#f0f0f0]">
            Sales Statistics
          </h3>
          <SalesAnalyticsChart />
        </div>

        {/* Sales By Source */}
        <div className="card bg-white shadow-sm border border-slate-100 p-6">
          <h3 className="font-bold text-lg mb-6 border-b pb-6 border-[#f0f0f0]">
            Sales by Source
          </h3>

          <Chart
            options={{
              ...donutOptions,
              labels: SOURCE_SALES_DATA.map((s) => s.name),
              plotOptions: {
                pie: {
                  donut: {
                    size: "75%",
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        label: "Sales",
                        formatter: () =>
                          SOURCE_SALES_DATA.reduce(
                            (sum, s) => sum + s.sales,
                            0,
                          ).toLocaleString() + " TK",
                      },
                    },
                  },
                },
              },
            }}
            series={SOURCE_SALES_DATA.map((s) => s.sales)}
            type="donut"
            height={300}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white shadow-sm lg:col-span-2 p-6 border border-slate-100">
          <h3 className="font-bold text-lg mb-6 border-b pb-6 border-[#f0f0f0]">
            Order Fulfillment Status
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {STATUS_DATA.map((status, i) => (
              <div
                key={i}
                className="p-6 text-center group hover:bg-slate-50 transition-colors"
              >
                <status.icon
                  size={24}
                  className={`mx-auto mb-3 ${status.color}`}
                />
                <p className="text-xs font-bold text-slate-400 mb-1">
                  {status.title}
                </p>
                <p className="text-lg font-black">{status.value}</p>
                <p className="text-[10px] opacity-60 font-medium">
                  {status.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-white shadow-sm mt-8 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="font-bold text-lg">Recent Orders</h3>
        </div>
        <RecentOrdersTable />
      </div>
    </div>
  );
}
