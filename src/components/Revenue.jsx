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
import { Card, Typography, Row, Col } from "antd";
import CustomTooltip from "./CustomTooltip";

const { Title, Text } = Typography;

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
    { label: "Conversation", value: "18.92%", isHighlight: true },
  ];

  return (
    <Card
      variant={false}
      style={{
        borderRadius: 12,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
      }}
      styles={{ body: { padding: "20px 0" } }}
    >
      <Title level={4} style={{ paddingLeft: 20, marginBottom: 20 }}>
        Revenue
      </Title>

      <div
        style={{
          backgroundColor: "#f9fbfb",
          borderTop: "1px dashed #e5e7eb",
          borderBottom: "1px dashed #e5e7eb",

          marginBottom: 30,
        }}
      >
        <Row align="middle">
          {stats.map((stat, index) => (
            <Col
              key={stat.label}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                // padding: "10px 0",
              }}
            >
              <div
                style={{
                  borderRight:
                    index === stats.length - 1 ? "none" : "1px dashed #e5e7eb",
                  padding: "20px 0",
                }}
              >
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    color: stat.isHighlight ? "#10b981" : "#1f2937",
                    fontWeight: 800,
                    fontSize: "clamp(1.2rem, 4vw, 1.75rem)",
                  }}
                >
                  {stat.value}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </Text>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ width: "100%", height: 350, padding: "0 10px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              vertical={true}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#f0f0f0" }}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => (
                <Text
                  strong
                  style={{ color: "#4b5563", fontSize: 12, marginLeft: 5 }}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Text>
              )}
            />
            <Bar
              dataKey="earnings"
              fill="#2ebfac"
              barSize={15}
              radius={[4, 4, 0, 0]}
            />
            <Area
              type="monotone"
              dataKey="orders"
              fill="url(#colorOrders)"
              stroke="#4f46e5"
              size={2}
            />
            <Line
              type="monotone"
              dataKey="refunds"
              stroke="#ef4444"
              size={2}
              dot={false}
            />
            <defs>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.01} />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
