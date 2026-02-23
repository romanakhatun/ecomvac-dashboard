import React from "react";
import { Card, Tag, Typography, Space, Flex } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const StateCard2 = ({ item }) => {
  const trendStatus = item.isUp ? "success" : "error";

  return (
    <Card
      variant={false}
      hoverable
      style={{
        borderRadius: "16px", // আগের কোডের সাথে মিল রাখতে ১৬পিক্সেল
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        border: "1px solid #f1f5f9",
      }}
      styles={{ body: { padding: "20px" } }}
    >
      <Flex justify="space-between" align="flex-start">
        <Space orientation="vertical" size={0}>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              display: "block",
              marginBottom: "4px",
            }}
          >
            {item.title}
          </Text>

          {/* Main Value */}
          <Title
            level={3}
            style={{
              margin: 0,
              fontWeight: 850,
              color: "#111827", // Slate-900 (Darker)
              fontSize: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            {item.value}
          </Title>
        </Space>

        {/* Icon Container */}
        <div
          style={{
            padding: "10px",
            borderRadius: "12px",
            backgroundColor: item.bgHex || "#eff6ff",
            color: item.colorHex || "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <item.icon style={{ fontSize: "20px" }} />
        </div>
      </Flex>

      {/* Footer (Trend & Sub) */}
      <Flex align="center" gap={8} style={{ marginTop: "16px" }}>
        <Tag
          bordered={false}
          color={trendStatus === "success" ? "green" : "red"}
          icon={item.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          style={{
            margin: 0,
            fontWeight: 700,
            borderRadius: "6px",
            fontSize: "11px",
            padding: "0 6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {item.trend}
        </Tag>

        <Text style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 500 }}>
          {item.sub}
        </Text>
      </Flex>
    </Card>
  );
};

export default StateCard2;
