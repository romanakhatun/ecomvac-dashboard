import { Card, Table, Progress, Tag, Button, Typography } from "antd";

const { Title, Text } = Typography;

const lowStockData = [
  { key: "1", name: "Smart Watch", count: 2, total: 50, tag: "HIGH DEMAND" },
  { key: "2", name: "Bluetooth Speaker", count: 3, total: 40, tag: "STEADY" },
  { key: "3", name: "Gaming Mouse", count: 5, total: 60, tag: "FLASH SALE" },
  { key: "4", name: "Gaming Mouse", count: 5, total: 60, tag: "FLASH SALE" },
];

export default function LowStockCompact() {
  return (
    <Card
      title={
        <Title level={5} style={{ margin: 0, fontWeight: 700 }}>
          Low Stock Alert
        </Title>
      }
      extra={
        <Button type="link" size="small">
          View All
        </Button>
      }
      style={{ borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    >
      {lowStockData.map((item) => (
        <div key={item.key} style={{ marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text strong style={{ fontSize: 13 }}>
                {item.name}
              </Text>
              <Text type="secondary" style={{ fontSize: 10 }}>
                {item.tag}
              </Text>
            </div>
            <div style={{ textAlign: "right" }}>
              <Text type="danger" strong>
                {item.count}
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {" "}
                / {item.total}
              </Text>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Progress
              percent={(item.count / item.total) * 100}
              showInfo={false}
              strokeColor={item.count < 3 ? "#ff4d4f" : "#faad14"}
              size="small"
              strokeWidth={6}
            />
            <Button
              size="small"
              type="primary"
              ghost
              style={{ fontSize: 10, height: 22 }}
            >
              Restock
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}
