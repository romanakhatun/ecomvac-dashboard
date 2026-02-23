"use client";
import React from "react";
import { Layout, Button, Avatar, Badge, Space, Dropdown, Grid } from "antd";

import { Menu, Moon, Plus, Search } from "lucide-react";

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

const Header = ({ onToggleSidebar }) => {
  const screens = useBreakpoint();

  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "30px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Space size={16}>
        <Button
          type="text"
          icon={<Menu size={24} />}
          onClick={onToggleSidebar}
        />
      </Space>

      <Space size={20}>
        <Search size={20} />

        <Moon size={20} />
      </Space>
    </AntHeader>
  );
};

export default Header;
