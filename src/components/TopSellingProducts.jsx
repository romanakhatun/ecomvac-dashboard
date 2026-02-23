"use client";
import React from "react";
import Image from "next/image";
import { Card, Table, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const products = [
  {
    key: "1",
    name: "Sports Shoes Men",
    stockStatus: "In Stock",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    key: "2",
    name: "Sports Shoes Men",
    stockStatus: "Few-left",
    price: "703 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    key: "3",
    name: "Small Alarm Watch",
    stockStatus: "In Stock",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    key: "4",
    name: "Small Alarm Watch",
    stockStatus: "Out Of Stock",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
  {
    key: "5",
    name: "Small Alarm Watch",
    stockStatus: "Few-left",
    price: "730 TK",
    sold: "1,534",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
  },
];

const stockStatusStyle = {
  "In Stock": "bg-emerald-100 text-emerald-600 border-emerald-200",
  "Few-left": "bg-blue-100 text-blue-600 border-blue-200",
  "Out Of Stock": "bg-red-100 text-red-600 border-red-200",
};

export default function TopSellingProducts() {
  const columns = [
    {
      title: "PRODUCT",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              width: "40px",
              height: "40px",
              position: "relative",
            }}
          >
            <Image
              src={record.img}
              alt={record.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Text
            strong
            style={{ fontSize: "13px", color: "#111827", whiteSpace: "nowrap" }}
          >
            {record.name}
          </Text>
        </div>
      ),
    },
    {
      title: "STOCK",
      dataIndex: "stockStatus",
      key: "stockStatus",
      width: 130,
      align: "center",
      render: (status) => (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border whitespace-nowrap ${stockStatusStyle[status]}`}
        >
          {status.toUpperCase()}
        </span>
      ),
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      width: 110,
      render: (text) => (
        <Text strong style={{ whiteSpace: "nowrap" }}>
          {text}
        </Text>
      ),
    },
    {
      title: "SOLD",
      dataIndex: "sold",
      key: "sold",
      width: 100,
      align: "center",
    },
    {
      title: "ACTION",
      key: "action",
      width: 100,
      align: "center",
      render: () => (
        <button className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors">
          <EyeOutlined /> VIEW
        </button>
      ),
    },
  ];

  return (
    <Card
      variant={false}
      style={{
        borderRadius: "16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        overflow: "hidden",
      }}
      styles={{ body: { padding: 0 } }}
    >
      <div style={{ padding: "24px 24px 10px 24px" }}>
        <Title level={4} style={{ margin: 0 }}>
          Top Selling Products
        </Title>
      </div>

      <div className="custom-table-container">
        <Table
          dataSource={products}
          columns={columns}
          pagination={false}
          scroll={{ x: 700 }}
          rowKey="key"
        />
      </div>

      <style jsx global>{`
        .ant-table {
          background: transparent !important;
        }

        .ant-table-container {
          border-radius: 0 !important;
        }

        .ant-table-thead > tr > th {
          background-color: #f8fafc !important;
          color: #64748b !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          border-bottom: 1px solid #f1f5f9 !important;
          padding: 12px 24px !important;
          border-top: none !important;
        }

        .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f1f5f9 !important;
          // padding: 12px 24px !important;
          background: #ffffff !important;
        }

        .ant-table-wrapper {
          border-radius: 0 0 16px 16px !important;
          overflow: hidden !important;
        }

        .ant-table-tbody > tr:last-child > td {
          border-bottom: none !important;
        }

        .ant-table-row:hover > td {
          background-color: #f9fafb !important;
        }

        .ant-table-content {
          overflow-x: auto !important;
        }

        .ant-table-body::-webkit-scrollbar {
          height: 5px;
        }
        .ant-table-body::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </Card>
  );
}
