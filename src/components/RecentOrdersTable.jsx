"use client";
import React from "react";
import { Table, Typography, Card } from "antd";

const { Text, Title } = Typography;

const orders = [
  {
    key: "1",
    date: "Feb 14, 2026",
    time: "03:12 PM",
    name: "John Smith",
    phone: "01712345678",
    method: "Online",
    amount: "2,450",
    status: "Delivered",
  },
  {
    key: "2",
    date: "Feb 14, 2026",
    time: "11:25 AM",
    name: "Sarah Ahmed",
    phone: "01987654321",
    method: "COD",
    amount: "1,150",
    status: "Processing",
  },
  {
    key: "3",
    date: "Feb 13, 2026",
    time: "08:10 PM",
    name: "Rahim Uddin",
    phone: "01655555555",
    method: "COD",
    amount: "3,200",
    status: "Shipped",
  },
  {
    key: "4",
    date: "Feb 13, 2026",
    time: "09:40 AM",
    name: "Tanvir Hasan",
    phone: "01888888888",
    method: "Online",
    amount: "950",
    status: "Cancelled",
  },
  {
    key: "5",
    date: "Feb 12, 2026",
    time: "02:15 PM",
    name: "Nusrat Jahan",
    phone: "01544444444",
    method: "COD",
    amount: "1,780",
    status: "Delivered",
  },
  {
    key: "6",
    date: "Feb 12, 2026",
    time: "05:20 PM",
    name: "Mehedi Hasan",
    phone: "01700001111",
    method: "COD",
    amount: "2,990",
    status: "Pending",
  },
];

const statusStyle = {
  Delivered: "bg-emerald-100 text-emerald-600 border-emerald-200",
  Pending: "bg-blue-100 text-blue-600 border-blue-200",
  Processing: "bg-cyan-100 text-cyan-600 border-cyan-200",
  Cancelled: "bg-red-100 text-red-600 border-red-200",
  Shipped: "bg-amber-100 text-amber-600 border-amber-200",
};

export default function RecentOrders() {
  const columns = [
    {
      title: "S.NO",
      dataIndex: "key",
      key: "key",
      width: 60,
      align: "center",
      render: (text, record, index) => (
        <Text type="secondary">{index + 1}</Text>
      ),
    },
    {
      title: "DATE",
      key: "date",
      width: 140,
      render: (_, record) => (
        <div style={{ whiteSpace: "nowrap" }}>
          {" "}
          <Text
            strong
            style={{ fontSize: "13px", display: "block", lineHeight: "1.2" }}
          >
            {record.date}
          </Text>
          <Text type="secondary" style={{ fontSize: "11px" }}>
            {record.time}
          </Text>
        </div>
      ),
    },
    {
      title: "CUSTOMER",
      dataIndex: "name",
      key: "name",
      width: 160,
      render: (text) => (
        <Text strong style={{ color: "#111827", whiteSpace: "nowrap" }}>
          {text}
        </Text>
      ),
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
      width: 130,
      render: (text) => <span style={{ whiteSpace: "nowrap" }}>{text}</span>,
    },
    {
      title: "METHOD",
      dataIndex: "method",
      key: "method",
      align: "center",
      width: 100,
      render: (text) => (
        <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded">
          {text}
        </span>
      ),
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      width: 110,
      render: (text) => (
        <Text strong style={{ whiteSpace: "nowrap" }}>
          {text} TK
        </Text>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 120,
      render: (status) => (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black border whitespace-nowrap ${statusStyle[status]}`}
        >
          {status.toUpperCase()}
        </span>
      ),
    },
  ];

  return (
    <Card
      variant={false}
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        overflow: "hidden",
      }}
      styles={{ body: { padding: 0 } }}
    >
      <div style={{ padding: "20px 24px" }}>
        <Title level={4} style={{ margin: 0 }}>
          Recent Orders
        </Title>
      </div>

      <Table
        dataSource={orders}
        columns={columns}
        pagination={false}
        scroll={{ x: 850 }}
        rowKey="key"
      />
    </Card>
  );
}
