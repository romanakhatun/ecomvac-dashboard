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
        borderRadius: "12px",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
      }}
    >
      <Flex justify="space-between" align="flex-start">
        <Space orientation="vertical" size={0}>
          <Text
            type="secondary"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {item.title}
          </Text>
          <Title
            level={3}
            style={{
              margin: "4px 0 0 0",
              fontWeight: 850,
              color: "#1f2937",
            }}
          >
            {item.value}
          </Title>
        </Space>

        <div
          style={{
            padding: "12px",
            borderRadius: "14px",
            backgroundColor: item.bg_hex || "#f0f5ff",
            color: item.color_hex || "#1677ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <item.icon style={{ fontSize: "22px" }} />
        </div>
      </Flex>

      <Flex align="center" gap={8} style={{ marginTop: "20px" }}>
        {/* Ant Design Tag for the Trend */}
        <Tag
          variant="filled"
          color={trendStatus}
          icon={item.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          style={{
            margin: 0,
            fontWeight: "bold",
            borderRadius: "6px",
            fontSize: "11px",
            padding: "0 8px",
          }}
        >
          {item.trend}
        </Tag>

        {/* Subtext */}
        <Text type="secondary" style={{ fontSize: "12px" }}>
          {item.sub}
        </Text>
      </Flex>
    </Card>
  );
};
export default StateCard2;
