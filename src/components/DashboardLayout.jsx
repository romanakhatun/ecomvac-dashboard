"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

const { Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 992) {
      setMobileOpen(true);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Layout>
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onToggleSidebar={handleToggle}
        />

        <Content style={{ padding: 24, background: "#f6f7fb" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
