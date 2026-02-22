"use client";

import dynamic from "next/dynamic";
import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  PackageCheck,
} from "lucide-react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardPage() {
  /* ================= KPI DATA ================= */

  const revenue = 128750;
  const orders = 342;
  const conversion = 4.6;

  /* ================= REVENUE CHART ================= */

  const revenueChart = {
    series: [
      {
        name: "Revenue",
        data: [12000, 18000, 15000, 24000, 21000, 28000, 30000],
      },
    ],
    options: {
      chart: {
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      colors: ["#6366F1"],
      stroke: { curve: "smooth", width: 3 },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.05,
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      grid: { borderColor: "#eee" },
    },
  };

  /* ================= ORDER SOURCE CHART ================= */

  const sourceChart = {
    series: [44, 28, 18, 10],
    options: {
      chart: { type: "donut" },
      labels: ["Website", "Facebook Ads", "WhatsApp", "Organic"],
      colors: ["#6366F1", "#EC4899", "#22C55E", "#F59E0B"],
      legend: { position: "bottom" },
      dataLabels: { enabled: false },
    },
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 bg-base-200 min-h-screen space-y-6">
      {/* ================= HEADER ================= */}

      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base-content/60">
          Welcome back — here’s your store performance
        </p>
      </div>

      {/* ================= KPI CARDS ================= */}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Revenue */}

        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <div className="flex justify-between">
              <span className="text-base-content/60">Total Revenue</span>
              <DollarSign className="text-primary" />
            </div>

            <h2 className="text-3xl font-bold mt-2">
              ৳ {revenue.toLocaleString()}
            </h2>

            <p className="text-success text-sm flex items-center gap-1">
              <TrendingUp size={16} /> +12% from last week
            </p>
          </div>
        </div>

        {/* Orders */}

        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <div className="flex justify-between">
              <span className="text-base-content/60">Total Orders</span>
              <ShoppingCart className="text-secondary" />
            </div>

            <h2 className="text-3xl font-bold mt-2">{orders}</h2>

            <p className="text-success text-sm">28 new orders today</p>
          </div>
        </div>

        {/* Conversion */}

        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <div className="flex justify-between">
              <span className="text-base-content/60">Conversion Rate</span>
              <PackageCheck className="text-accent" />
            </div>

            <h2 className="text-3xl font-bold mt-2">{conversion}%</h2>

            <p className="text-error text-sm">-0.8% from yesterday</p>
          </div>
        </div>
      </div>

      {/* ================= CHART SECTION ================= */}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}

        <div className="card bg-base-100 shadow-xl border border-base-200 lg:col-span-2">
          <div className="card-body">
            <h2 className="card-title">Revenue Trend</h2>

            <Chart
              options={revenueChart.options}
              series={revenueChart.series}
              type="area"
              height={320}
            />
          </div>
        </div>

        {/* Order Sources */}

        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body">
            <h2 className="card-title">Order Sources</h2>

            <Chart
              options={sourceChart.options}
              series={sourceChart.series}
              type="donut"
              height={320}
            />
          </div>
        </div>
      </div>

      {/* ================= RECENT ORDERS ================= */}

      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title">Recent Orders</h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dipra Chowdhury</td>
                  <td>01840577851</td>
                  <td>COD</td>
                  <td>৳ 680</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>

                <tr>
                  <td>Sadia Rahman</td>
                  <td>01700000000</td>
                  <td>bKash</td>
                  <td>৳ 1,240</td>
                  <td>
                    <span className="badge badge-success">Delivered</span>
                  </td>
                </tr>

                <tr>
                  <td>Mahin Ahmed</td>
                  <td>01900000000</td>
                  <td>Nagad</td>
                  <td>৳ 890</td>
                  <td>
                    <span className="badge badge-info">Processing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
