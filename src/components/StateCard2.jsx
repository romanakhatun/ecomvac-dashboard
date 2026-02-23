// import React from "react";
// import { Card, Statistic, Tag } from "antd";
// import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

// const StateCard2 = ({ item }) => {
//   return (
//     <Card
//       variant={false}
//       className="hover:bg-slate-50 transition-colors cursor-default"
//     >
//       <div className="flex justify-between items-start">
//         <Statistic
//           title={
//             <span className="text-gray-500 font-medium uppercase text-xs tracking-wider">
//               {item.title}
//             </span>
//           }
//           value={item.value}
//           valueStyle={{ fontWeight: 800, fontSize: "24px" }}
//         />
//         <div
//           className={`p-2 rounded-lg ${item.isUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
//         >
//           <item.icon className="text-xl" />
//         </div>
//       </div>

//       <div className="mt-3 flex items-center gap-2">
//         <Tag
//           variant={false}
//           color={item.isUp ? "success" : "error"}
//           icon={item.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
//           className="font-bold rounded-full"
//         >
//           {item.trend}
//         </Tag>
//         <span className="text-gray-400 text-xs">{item.sub}</span>
//       </div>
//     </Card>
//   );
// };
// export default StateCard2;
import React from "react";
import { Card, Tag, Typography, Space, Flex } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const StateCard2 = ({ item }) => {
  const trendStatus = item.isUp ? "success" : "error";

  return (
    <Card
      variant={false}
      hoverable
      style={{
        borderRadius: "12px",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
      }}
    >
      <Flex justify="space-between" align="flex-start">
        <Space orientation="vertical" size={0}>
          <Text
            type="secondary"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {item.title}
          </Text>
          <Title
            level={3}
            style={{
              margin: "4px 0 0 0",
              fontWeight: 850,
              color: "#1f2937",
            }}
          >
            {item.value}
          </Title>
        </Space>

        <div
          style={{
            padding: "12px",
            borderRadius: "14px",
            backgroundColor: item.bg_hex || "#f0f5ff",
            color: item.color_hex || "#1677ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <item.icon style={{ fontSize: "22px" }} />
        </div>
      </Flex>

      <Flex align="center" gap={8} style={{ marginTop: "20px" }}>
        {/* Ant Design Tag for the Trend */}
        <Tag
          bordered={false}
          color={trendStatus}
          icon={item.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          style={{
            margin: 0,
            fontWeight: "bold",
            borderRadius: "6px",
            fontSize: "11px",
            padding: "0 8px",
          }}
        >
          {item.trend}
        </Tag>

        {/* Subtext */}
        <Text type="secondary" style={{ fontSize: "12px" }}>
          {item.sub}
        </Text>
      </Flex>
    </Card>
  );
};
export default StateCard2;
