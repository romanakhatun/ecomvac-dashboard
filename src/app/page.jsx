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
  Pencil,
  Trash,
} from "lucide-react";
import Image from "next/image";
import { AlertTriangle, ChevronRight } from "lucide-react";
import StateCard from "@/components/StateCard";
import SalesAnalyticsChart from "@/components/SalesAnalyticsChart";
import RecentOrdersTable from "@/components/RecentOrdersTable";
import PendingTrendCard from "@/components/PendingTrendCard";
import ProcessingTrendCard from "@/components/ProcessingTrendCard";
import DeliveredTrendCard from "@/components/DeliveredTrendCard";

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

const products = [
  {
    name: "Sports Shoes For Men",
    stock: "In Stock",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    name: "Beautiful Flower Frame",
    stock: "Few-left",
    price: "703 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200",
  },
  {
    name: "Small Alarm Watch",
    stock: "Out Of Stock",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200",
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <PendingTrendCard />
        <ProcessingTrendCard />
        <DeliveredTrendCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-bold text-lg text-slate-800 border-b pb-6 border-[#f0f0f0] mb-3">
            Low Stock
          </h3>

          <div className="space-y-4">
            {[
              {
                name: "Smart Watch",
                stock: 2,
                total: 50,
                trend: "High Demand",
              },
              {
                name: "Bluetooth Speaker",
                stock: 3,
                total: 40,
                trend: "Steady",
              },
              {
                name: "Gaming Mouse",
                stock: 5,
                total: 60,
                trend: "Flash Sale",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-4 rounded-xl border border-slate-50 bg-slate-50/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-700 group-hover:text-rose-600 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[9px] font-bold text-rose-400 uppercase">
                      {item.trend}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-rose-600">
                      {item.stock}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {" "}
                      / {item.total}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full"
                      style={{ width: `${(item.stock / item.total) * 100}%` }}
                    ></div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded-lg font-bold">
                    Restock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card bg-white shadow-sm border border-slate-100 overflow-hidden lg:col-span-2">
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <h3 className="font-bold text-lg">Top Selling Products</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                <tr>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Sold</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td>
                      <div className="flex items-center gap-3">
                        <Image
                          src={p.img}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover"
                          width={100}
                          height={100}
                        />

                        <span className="font-semibold">{p.name}</span>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          p.stock === "In Stock"
                            ? "badge-success"
                            : p.stock === "Few-left"
                              ? "badge-info"
                              : "badge-error"
                        }`}
                      >
                        {p.stock}
                      </span>
                    </td>

                    <td className="font-semibold">{p.price}</td>
                    <td className="font-semibold">{p.sold}</td>

                    <td className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Pencil className="cursor-pointer" size={16} />
                        <Trash className="cursor-pointer" size={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
