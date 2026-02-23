import { Card, Typography } from "antd";

const StateCard = ({ item }) => (
  <Card
    variant={false}
    className="hover:bg-slate-50 transition-colors cursor-default"
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-xs mb-1 font-medium">{item.title}</p>
        <h2 className="text-2xl font-bold m-0 leading-none">{item.value}</h2>
      </div>
      {/* Subtle icon with low opacity/soft color */}
      <div className="text-blue-500 bg-blue-50 p-3 rounded-full opacity-80">
        <item.icon size={20} />
      </div>
    </div>
    <div className="mt-4 text-[11px] text-gray-400 border-t pt-2 border-gray-100">
      <span className={item.isUp ? "text-green-600" : "text-red-600"}>
        {item.trend}
      </span>{" "}
      {item.sub}
    </div>
  </Card>
);
export default StateCard;
