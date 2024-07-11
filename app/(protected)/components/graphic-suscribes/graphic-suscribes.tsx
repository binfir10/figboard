"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { graphicData } from "./graphic-data";

export default function GraphicSuscribes() {
  return (
    <div className="flex h-full w-full flex-col justify-between p-5">
      <div>
        <p className="mb-3 text-3xl">24.479</p>
        <div className="mb-5 flex gap-x-5">
          <div className="flex w-fit items-center gap-2 rounded-xl bg-sky-400 px-3 text-base">
            8,5%
            <TrendingUp strokeWidth={2} className="h-4 w-4" />
          </div>
          <p className="text-accent-500">+432 incremento</p>
        </div>
      </div>
      <div className="h-[350px] text-foreground">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={graphicData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#887CFD" stopOpacity={0.2} />
                <stop offset="70%" stopColor="#887CFD" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2} />
                <stop offset="70%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              animationEasing="ease-in-out"
              contentStyle={{
                backgroundColor: "#455",
                border: "none",
                boxShadow: "15px 15px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: 5,
                padding: "1px 10px",
              }}
              itemStyle={{
                color: "#fff",
                fontWeight: "bold",
              }}
            />
            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#82c"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="oldCustomers"
              stroke="#82ca22"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
