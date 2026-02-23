"use client";
import React from "react";
import { Layout, Button, Space, Input } from "antd";
import { Menu, Moon, Search, Bell } from "lucide-react";

const { Header: AntHeader } = Layout;

const Header = ({ onToggleSidebar }) => {
  return (
    <AntHeader
      style={{
        background: "#fff",
        height: "90px",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f1f5f9",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
      }}
    >
      {/* Left Section */}
      <Space size={16}>
        <Button
          type="text"
          icon={<Menu size={22} strokeWidth={2} />}
          onClick={onToggleSidebar}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            width: "40px",
          }}
        />
        <div className="hidden md:flex" style={{ marginLeft: "12px" }}>
          <Input
            prefix={<Search size={18} style={{ color: "#94a3b8" }} />}
            placeholder="Search orders, products..."
            variant="filled"
            style={{
              borderRadius: "10px",
              width: "300px",
              height: "42px",
              backgroundColor: "#f8fafc",
            }}
          />
        </div>
      </Space>

      {/* Right Section */}
      <Space size={24} align="center">
        <Button
          type="text"
          icon={<Moon size={22} />}
          style={{ display: "flex", alignItems: "center" }}
        />

        <Button
          type="text"
          icon={<Bell size={22} />}
          style={{ display: "flex", alignItems: "center" }}
        />

        {/* User Profile - সাইজ কিছুটা বাড়ানো হয়েছে */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px", // সার্কেলের বদলে রাউন্ডেড স্কয়ার
            background: "#eff6ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid #dbeafe",
            marginLeft: "8px",
          }}
        >
          <span
            style={{ fontSize: "14px", fontWeight: "800", color: "#2563eb" }}
          >
            AD
          </span>
        </div>
      </Space>
    </AntHeader>
  );
};

export default Header;
