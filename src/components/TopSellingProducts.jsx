"use client";
import React from "react";
import Image from "next/image";
import { Card, Table, Typography, Badge } from "antd";

const { Text, Title } = Typography;

const products = [
  {
    key: "1",
    name: "Wireless Headphones",
    sold: 120,
    revenue: "96,000 TK",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1518441902112-f1d6d0d9c1d5?w=200",
  },
  {
    key: "2",
    name: "Smart Watch",
    sold: 98,
    revenue: "78,400 TK",
    status: "Low Stock",
    img: "https://images.unsplash.com/photo-1511732351661-46dce4a2fbe4?w=200",
  },
  {
    key: "3",
    name: "Gaming Mouse",
    sold: 85,
    revenue: "42,500 TK",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200",
  },
  {
    key: "4",
    name: "Bluetooth Speaker",
    sold: 76,
    revenue: "38,000 TK",
    status: "Out of Stock",
    img: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=200",
  },
];

export default function TopSellingProducts() {
  const columns = [
    {
      title: "PRODUCT",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{ borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}
          >
            <Image
              src={record.img}
              alt={record.name}
              width={44}
              height={44}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text strong style={{ fontSize: "13px", color: "#1f2937" }}>
              {record.name}
            </Text>
            <Text type="secondary" style={{ fontSize: "11px" }}>
              ID: #P-00{record.key}
            </Text>
          </div>
        </div>
      ),
    },
    {
      title: "SOLD",
      dataIndex: "sold",
      key: "sold",
      align: "center",
      render: (sold) => (
        <Text style={{ fontSize: "13px", color: "#6b7280" }}>{sold} Sold</Text>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          color={
            status === "In Stock"
              ? "#10b981"
              : status === "Low Stock"
                ? "#f59e0b"
                : "#ef4444"
          }
          text={
            <span style={{ fontSize: "12px", color: "#6b7280" }}>{status}</span>
          }
        />
      ),
    },
    {
      title: "REVENUE",
      dataIndex: "revenue",
      key: "revenue",
      align: "right",
      render: (text) => (
        <Text strong style={{ color: "#111827", fontSize: "13px" }}>
          {text}
        </Text>
      ),
    },
  ];

  return (
    <Card
      variant={false}
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
      }}
      styles={{ body: { padding: "0" } }}
    >
      <div style={{ padding: "24px 24px 10px 24px" }}>
        <Title level={5} style={{ margin: 0, fontWeight: 700 }}>
          Top Selling Products
        </Title>
      </div>

      <Table
        dataSource={products}
        columns={columns}
        pagination={false}
        showHeader={true}
        style={{ width: "100%" }}
      />
    </Card>
  );
}

<style jsx global>{`
  .ant-table-wrapper .ant-table-tbody > tr > td {
    border-bottom: 1px solid #f3f4f6 !important; /* হালকা গ্রে কালার */
    padding: 16px 20px !important; /* প্রফেশনাল স্পেসিং */
  }

  .ant-table-wrapper .ant-table-row:last-child td {
    border-bottom: none !important;
  }
`}</style>;
