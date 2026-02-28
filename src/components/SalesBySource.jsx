"use client";
import React, { useState } from "react";
import { Card, Typography, Flex, Badge } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const { Text, Title } = Typography;

const SOURCE_SALES_DATA = [
  { name: "Website", sales: 48000, color: "#f472b6", orders: 12 },
  { name: "WhatsApp", sales: 22160, color: "#60a5fa", orders: 5 },
  { name: "Messenger", sales: 12000, color: "#a78bfa", orders: 3 },
  { name: "Landing Page", sales: 4000, color: "#fbbf24", orders: 1 },
];

const SalesBySourceInteractive = () => {
  const totalSales = SOURCE_SALES_DATA.reduce((sum, s) => sum + s.sales, 0);
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem =
    activeIndex !== null ? SOURCE_SALES_DATA[activeIndex] : null;
  const centerLabel = activeItem ? activeItem.name : "Total Sales";
  const centerValue = activeItem ? activeItem.sales : totalSales;

  return (
    <Card
      variant={false}
      style={{
        borderRadius: 20,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
        maxWidth: 400,
      }}
    >
      <Title level={4} style={{ marginBottom: 20 }}>
        Sales by Source
      </Title>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={SOURCE_SALES_DATA}
              dataKey="sales"
              cx="50%"
              cy="50%"
              animationDuration={400}
              animationBegin={0}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={2}
              stroke="none"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              activeShape={{ outerRadius: 123 }}
              activeIndex={activeIndex}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                return (
                  <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{ fontSize: "12px", fontWeight: 600 }}
                  >
                    {`${(percent * 100).toFixed(1)}%`}
                  </text>
                );
              }}
            >
              {SOURCE_SALES_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{
                    cursor: "pointer",
                    outline: "none",
                    filter: activeIndex === index ? "brightness(1.1)" : "none",
                  }}
                />
              ))}

              <Label
                value={`${centerValue.toLocaleString()} TK`}
                position="center"
                style={{ fontSize: "20px", fontWeight: 800, fill: "#111827" }}
                dy={-4}
              />
              <Label
                value={centerLabel}
                position="center"
                style={{
                  fontSize: "12px",
                  fill: activeItem ? activeItem.color : "#9ca3af",
                  fontWeight: 600,
                }}
                dy={20}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* List logic replaced with standard map to avoid deprecation warnings */}
      <div style={{ marginTop: 15, display: "flex", flexDirection: "column" }}>
        {SOURCE_SALES_DATA.map((item, index) => (
          <div
            key={item.name}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{
              padding: "10px 0",
              cursor: "pointer",
              backgroundColor:
                activeIndex === index ? "#f9fafb" : "transparent",
              borderRadius: 8,
              transition: "all 0.3s",
            }}
          >
            <Flex
              justify="space-between"
              align="center"
              style={{ width: "100%", padding: "0 12px" }}
            >
              <Flex align="center" gap={10}>
                <Badge color={item.color} dot />
                <Flex align="center" gap={6}>
                  <Text
                    style={{
                      color: activeIndex === index ? item.color : "#374151",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    type="secondary"
                    style={{ fontSize: 11, fontWeight: 400 }}
                  >
                    ({item.orders} Orders)
                  </Text>
                </Flex>
              </Flex>

              <Text strong style={{ fontSize: 13, color: "#111827" }}>
                {item.sales.toLocaleString()} TK
              </Text>
            </Flex>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SalesBySourceInteractive;
