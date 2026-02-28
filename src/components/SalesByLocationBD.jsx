"use client";
import React, { useState, useMemo } from "react";
import { Card, Typography, Flex, Progress } from "antd";
// Importing your JSON file
import bdData from "../data/bd-districts.json";

const { Title, Text } = Typography;

const COLORS = {
  active: "#2ebfac", // Teal color from your chart
  accent: "#3730a3", // Dark blue for labels
  progressBg: "#f1f5f9", // Light gray for progress trail
};

export default function SalesByLocationBD() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const calculatePos = (lat, long) => {
    const x = ((parseFloat(long) - 88) / (92.5 - 88)) * 400;
    const y = 500 - ((parseFloat(lat) - 20.5) / (26.5 - 20.5)) * 500;
    return { left: `${(x / 400) * 100}%`, top: `${(y / 500) * 100}%` };
  };

  const districtMarkers = useMemo(() => {
    const targets = ["Dhaka", "Faridpur", "Chittagong", "Sylhet", "Rajshahi"];

    return bdData.districts
      .filter((d) => targets.includes(d.name))
      .map((d) => ({
        ...d,
        ...calculatePos(d.lat, d.long),
        sales: 40,
      }));
  }, []);

  return (
    <Card
      style={{
        borderRadius: "16px",
        border: "1px solid #f1f5f9",
        maxWidth: "500px",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ marginBottom: "20px" }}>
        Sales by Locations
      </Title>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          background: "#fcfcfc",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 400 500"
          style={{
            width: "100%",
            height: "100%",
            fill: "#f8fafc",
            stroke: "#e2e8f0",
          }}
        >
          <path d="M120 40 L160 20 L210 50 L250 30 L300 80 L320 150 L380 220 L350 350 L300 450 L250 480 L180 450 L120 480 L80 400 L20 350 L50 200 L30 150 L80 80 Z" />
        </svg>

        {/* 3. Render Markers using JSON Coordinates */}
        {districtMarkers.map((loc) => (
          <div
            key={loc.id}
            style={{
              position: "absolute",
              top: loc.top,
              left: loc.left,
              transform: "translate(-50%, -50%)",
              zIndex: hoveredLocation === loc.id ? 10 : 1,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHoveredLocation(loc.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <Flex
              align="center"
              gap={6}
              style={{
                background: "#fff",
                padding: "4px 10px",
                borderRadius: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
                border:
                  hoveredLocation === loc.id
                    ? `1px solid ${COLORS.active}`
                    : "1px solid transparent",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: COLORS.active,
                  boxShadow: `0 0 0 3px ${COLORS.active}33`,
                }}
              />
              <Text strong style={{ fontSize: "11px" }}>
                {loc.name}
              </Text>
            </Flex>
          </div>
        ))}
      </div>

      {/* 4. Sales Progress List */}
      <div style={{ marginTop: "24px" }}>
        {districtMarkers.slice(0, 4).map((item) => (
          <div key={item.id} style={{ marginBottom: "16px" }}>
            <Flex justify="space-between" style={{ marginBottom: "4px" }}>
              <Text
                style={{ color: "#64748b", fontSize: "13px", fontWeight: 500 }}
              >
                {item.name}
              </Text>
              <Text strong>{item.sales}%</Text>
            </Flex>
            <Progress
              percent={item.sales}
              showInfo={false}
              strokeColor={COLORS.accent} // Indigo color from reference
              railColor={COLORS.progressBg}
              strokeWidth={8}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
