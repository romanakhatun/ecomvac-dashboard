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
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const projection = useMemo(() => {
    return geoMercator()
      .center([90.35, 23.95])
      .scale(3800)
      .translate([200, 250]);
  }, []);

  const pathGenerator = geoPath().projection(projection);

  const districtData = useMemo(() => {
    return bdGeoJSON.features.map((f) => {
      const name = f.properties.ADM2_EN;
      const centroid = pathGenerator.centroid(f);
      return {
        id: f.id,
        name: name,
        x: centroid[0],
        y: centroid[1],
        sales: 40,
      };
    });
  }, [pathGenerator]);

  return (
    <Card
      style={{
        borderRadius: "16px",
        maxWidth: "600px",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        border: "1px solid #f1f5f9",
        marginTop: 16,
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
        }}
      >
        <svg viewBox="0 0 400 500" style={{ width: "100%", height: "100%" }}>
          <g>
            {bdGeoJSON.features.map((feature) => (
              <path
                key={feature.id}
                d={pathGenerator(feature)}
                fill={
                  hoveredDistrict === feature.id ? "#e2e8f0" : COLORS.mapFill
                }
                stroke={COLORS.mapStroke}
                strokeWidth="0.5"
                onMouseEnter={() => setHoveredDistrict(feature.id)}
                onMouseLeave={() => setHoveredDistrict(null)}
                style={{ transition: "0.2s" }}
              />
            ))}
          </g>

          {districtData.map((dist) => (
            <g key={dist.id}>
              <circle cx={dist.x} cy={dist.y} r="3" fill={COLORS.teal} />

              <text
                x={dist.x + 5}
                y={dist.y + 3}
                style={{
                  fontSize: "9px",
                  fontWeight: "600",
                  fill: COLORS.textDark,
                  pointerEvents: "none",
                  textShadow: "1px 1px 2px white",
                }}
              >
                {dist.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div style={{ marginTop: "24px" }}>
        {districtData.slice(0, 3).map((item) => (
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
