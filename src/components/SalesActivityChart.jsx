"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SalesActivityChart() {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
    },

    colors: ["#3b82f6", "#4ade80"], // Blue = Profit, Green = Sales

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 4,
      },
    },

    dataLabels: { enabled: false },

    legend: {
      position: "bottom", // ⭐ Bottom legend
      horizontalAlign: "center",
      fontSize: "13px",
      markers: { radius: 12 },
      itemMargin: { horizontal: 12 },
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
    },

    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
    },

    yaxis: {
      labels: {
        formatter: (val) => `${val}`,
      },
    },

    tooltip: {
      y: {
        formatter: (val) => `${val} thousands`,
      },
    },
  };

  const series = [
    {
      name: "Net Profit",
      data: [22, 34, 56, 36, 35, 21, 34, 60, 78, 55, 52],
    },
    {
      name: "Sales",
      data: [41, 49, 70, 56, 54, 57, 43, 80, 21, 23, 34],
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="bar" height={360} />
    </>
  );
}
