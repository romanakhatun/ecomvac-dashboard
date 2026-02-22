"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SalesAnalyticsChart() {
  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "inherit",
    },

    colors: ["#cbd5e1", "#8b5cf6", "#f59e0b"],

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },

    dataLabels: { enabled: false },

    legend: {
      position: "top",
      horizontalAlign: "center",
      markers: { radius: 12 },
    },

    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
    },

    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
      ],
      axisBorder: { show: false },
    },

    yaxis: {
      labels: {
        formatter: (val) => `${val}k`,
      },
    },

    tooltip: {
      y: {
        formatter: (val) => `${val}k TK`,
      },
    },
  };

  const series = [
    {
      name: "Income",
      data: [70, 20, 40, 80, 65, 90, 110, 95, 120, 150, 110, 115, 50, 75, 85],
    },
    {
      name: "Net Profit",
      data: [65, 35, 45, 75, 80, 85, 105, 100, 125, 160, 115, 118, 45, 70, 82],
    },
    {
      name: "Orders",
      data: [25, 70, 85, 45, 55, 120, 160, 75, 70, 65, 72, 76, 82, 83, 115],
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="area" height={320} />
    </>
  );
}
