"use client";
import React from "react";
import { Card, Typography, Row, Col } from "antd";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const { Text, Title } = Typography;

const orderStats = [
  {
    title: "Pending Orders",
    count: "18",
    color: "#3b82f6",
    percent: "12%",
    statusText: "vs last week",
    data: [
      { v: 12 },
      { v: 15 },
      { v: 10 },
      { v: 18 },
      { v: 16 },
      { v: 20 },
      { v: 18 },
    ],
  },
  {
    title: "Processing Orders",
    count: "9",
    color: "#f59e0b",
    percent: "34%",
    statusText: "On Schedule",
    data: [
      { v: 6 },
      { v: 7 },
      { v: 5 },
      { v: 8 },
      { v: 7 },
      { v: 9 },
      { v: 9 },
    ],
  },
  {
    title: "Delivered Orders",
    count: "42",
    color: "#10b981",
    percent: "42%",
    statusText: "vs last week",
    data: [
      { v: 30 },
      { v: 34 },
      { v: 28 },
      { v: 36 },
      { v: 39 },
      { v: 41 },
      { v: 42 },
    ],
  },
];

export default function OrderStatusTrends() {
  return (
    <div style={{ padding: "20px 0" }}>
      <Row gutter={[24, 24]}>
        {orderStats.map((item, i) => (
          <Col xs={24} sm={12} md={8} key={i}>
            <Card
              variant={false}
              style={{
                borderRadius: "16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                border: "1px solid #f1f5f9",
                overflow: "hidden",
                background: "#fff",
              }}
              styles={{ body: { padding: 0 } }}
            >
              <div style={{ padding: "20px 24px 0 24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <Text
                      strong
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Title
                      level={2}
                      style={{
                        margin: "4px 0 0 0",
                        fontWeight: 800,
                        color: "#1e293b",
                      }}
                    >
                      {item.count}
                    </Title>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: item.color,
                        background: `${item.color}15`,
                        padding: "4px 8px",
                        borderRadius: "6px",
                        display: "inline-block",
                      }}
                    >
                      {item.percent} more
                    </span>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#94a3b8",
                        marginTop: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.statusText}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: 65, marginTop: 7, width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={item.data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${i}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={item.color}
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor={item.color}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip cursor={false} content={() => null} />
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={item.color}
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill={`url(#gradient-${i})`}
                      isAnimationActive={true}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
