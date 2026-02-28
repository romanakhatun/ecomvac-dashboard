"use client";
import React, { useMemo, useState } from "react";
import { Card, Typography, Flex, Progress } from "antd";
import { geoMercator, geoPath } from "d3-geo";
import bdGeoJSON from "../data/bd-geo.json";

const { Title, Text } = Typography;

const COLORS = {
  teal: "#2ebfac",
  indigo: "#3730a3",
  mapFill: "#f8fafc",
  mapStroke: "#cbd5e1",
  textDark: "#1e293b",
};

export default function BangladeshDistrictMap() {
  // State to store the currently hovered district information
  const [hoveredData, setHoveredData] = useState(null);
  // State to track mouse position for the floating tooltip
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Map projection setup to center Bangladesh within the SVG frame
  const projection = useMemo(() => {
    return geoMercator()
      .center([90.35, 23.95])
      .scale(3800)
      .translate([200, 250]);
  }, []);

  const pathGenerator = geoPath().projection(projection);

  // Processing district data for the list displayed below the map
  const districtList = useMemo(() => {
    return bdGeoJSON.features.slice(0, 3).map((f) => ({
      id: f.id,
      name: f.properties.ADM2_EN,
      sales: 40,
    }));
  }, []);

  // Update mouse coordinates as the user moves over the container
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Card
      style={{
        borderRadius: "16px",
        maxWidth: "600px",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
        border: "1px solid #f1f5f9",
        marginTop: 16,
        position: "relative",
      }}
    >
      <Title level={4} style={{ marginBottom: "0" }}>
        Sales by Locations
      </Title>

      <div
        style={{
          position: "relative",
          height: "500px",
          borderRadius: "12px",
          cursor: "pointer",
        }}
        onMouseMove={handleMouseMove}
      >
        <svg viewBox="0 0 400 500" style={{ width: "100%", height: "100%" }}>
          <g>
            {bdGeoJSON.features.map((feature) => {
              const name = feature.properties.ADM2_EN;
              const sales = 40; // Static placeholder value; can be replaced with dynamic data

              return (
                <path
                  key={feature.id}
                  d={pathGenerator(feature)}
                  fill={
                    hoveredData?.id === feature.id ? "#e2e8f0" : COLORS.mapFill
                  }
                  stroke={COLORS.mapStroke}
                  strokeWidth="0.5"
                  onMouseEnter={() =>
                    setHoveredData({ id: feature.id, name, sales })
                  }
                  onMouseLeave={() => setHoveredData(null)}
                  style={{ transition: "0.2s" }}
                />
              );
            })}
          </g>
        </svg>

        {/* --- Dynamic Floating Tooltip (Visible on Hover) --- */}
        {hoveredData && (
          <div
            style={{
              position: "fixed",
              left: mousePos.x + 15,
              top: mousePos.y + 15,
              backgroundColor: "rgba(30, 41, 59, 0.9)", // Dark theme tooltip background
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "12px",
              pointerEvents: "none", // Ensures tooltip doesn't interfere with mouse events
              zIndex: 1000,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                marginBottom: "4px",
              }}
            >
              {hoveredData.name}
            </div>
            <div>Sales: {hoveredData.sales}%</div>
          </div>
        )}
      </div>

      {/* Sales Summary Progress Bar Section */}
      <div style={{ marginTop: "24px" }}>
        {districtList.map((item) => (
          <div key={item.id} style={{ marginBottom: "16px" }}>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "4px" }}
            >
              <Text style={{ color: "#64748b", fontSize: "13px" }}>
                {item.name}
              </Text>
              <Text strong>{item.sales}%</Text>
            </Flex>
            <Progress
              percent={item.sales}
              showInfo={false}
              strokeColor={COLORS.indigo}
              strokeWidth={8}
              railColor="#f1f5f9"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
