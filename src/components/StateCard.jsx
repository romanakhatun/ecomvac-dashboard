import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const StateCard = ({ item }) => {
  return (
    <div className="card bg-white shadow-sm border border-slate-100 overflow-hidden group ">
      {/* <div className={`h-1.5 w-full ${item.bg.replace("bg-", "bg-").replace("/10", "")} brightness-95 opacity-80`}></div> */}
      <div className="card-body p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[12px] text-[#6b7280] font-bold tracking-widest">
              {item.title}
            </p>
            <h2 className="text-3xl font-black text-base-100 mt-1">
              {item.value}
            </h2>
          </div>
          <div className="p-3 rounded-full bg-[#f3f4f6]  group-hover:bg-slate-100 transition-colors">
            <item.icon size={22} strokeWidth={1.5} />
          </div>
          {/* <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
              item.icon size={22} />
            </div> */}
        </div>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#f0f0f0]">
          <div
            className={`flex items-center text-[11px] font-bold px-2 py-0.5 rounded-lg ${
              item.isUp
                ? "text-success bg-success/10"
                : "text-error bg-error/10"
            }`}
          >
            {item.isUp ? (
              <TrendingUp size={14} strokeWidth={2.5} />
            ) : (
              <TrendingDown size={14} strokeWidth={2.5} />
            )}
            <span className="ml-1">{item.trend}</span>
          </div>

          <span className="text-[10px] font-semibold text-[#6b7280] uppercase opacity-70">
            {item.sub}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StateCard;
