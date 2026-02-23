const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 5,
          paddingBottom: "5px",
          fontSize: 14,
          minWidth: 160,
          border: "1px solid #ddd",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            marginBottom: 8,
            padding: "10px 14px",
            backgroundColor: "#edeff1",
            borderBottom: "1px solid #ddd",
          }}
        >
          {label}
        </div>

        {payload.map((item) => {
          let value = item.value;

          if (item.name === "earnings") {
            value = `${value}k`;
          }

          if (item.name === "refunds") {
            value = `${value} Sales`;
          }

          return (
            <div
              key={item.name}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 6,
                padding: "0 14px",
              }}
            >
              {/* Colored Dot */}
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  marginRight: 8,
                }}
              />

              {/* Label */}
              <span style={{ marginRight: "8px" }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}:
              </span>

              {/* Value */}
              <span style={{ fontWeight: 600 }}>{value}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
