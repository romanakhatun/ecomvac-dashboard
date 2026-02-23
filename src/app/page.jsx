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

// const STATUS_DATA = [
//   {
//     title: "Total Pending Order",
//     value: "37,960 TK",
//     count: "2 Orders",
//     icon: Clock,
//     color: "text-amber-500",
//   },
//   {
//     title: "Total Processing Order",
//     value: "0 TK",
//     count: "0 Orders",
//     icon: RotateCw,
//     color: "text-info",
//   },
//   {
//     title: "Total Delivered Order",
//     value: "0 TK",
//     count: "0 Orders",
//     icon: CheckCircle,
//     color: "text-success",
//   },
//   {
//     title: "Total Cancelled Orders",
//     value: "0 TK",
//     count: "0 Orders",
//     icon: XCircle,
//     color: "text-error",
//   },
// ];

// const SOURCE_SALES_DATA = [
//   { name: "Website", sales: 46160 },
//   { name: "WhatsApp", sales: 18500 },
//   { name: "Messenger", sales: 9200 },
//   { name: "Landing Page", sales: 12300 },
// ];

export default function EcomvacDashboard() {
  // const donutOptions = {
  //   labels: ["Electronics", "Laptops", "Fashion", "Home"],
  //   colors: ["#ff99af", "#93c5fd", "#c084fc", "#fbbf24"],
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: "75%",
  //         labels: {
  //           show: true,
  //           total: { show: true, label: "Sales", formatter: () => "46k" },
  //         },
  //       },
  //     },
  //   },
  //   legend: { position: "bottom" },
  //   dataLabels: { enabled: false },
  //   stroke: { show: false },
  // };

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
        {/* <Card
          className="shadow-sm border border-slate-100"
          styles={{ body: { padding: 24 } }}
        >
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
        </Card> */}
      </div>
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
