"use client";

import CustomIcons from "@/components/custom-icons";
import { Percent } from "lucide-react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Website",
    value: 456,
    fill: "#443cd5",
  },
  {
    name: "Instegram",
    value: 854,
    fill: "#058e70",
  },
  {
    name: "Other",
    value: 240,
    fill: "#ffbb28",
  },
];

export default function TotalSubscribers() {
  return (
    <div className="">
      <div className="mb-5 flex items-center gap-x-2">
        <CustomIcons icon={Percent} />
        <p className="text-3xl font-bold tracking-tighter">
          Total Suscriptores
        </p>
      </div>
      <div className="rounded-lg bg-background shadow-sm transition hover:shadow-lg">
        <ResponsiveContainer aspect={1} maxHeight={210}>
          <PieChart>
            <Pie
              dataKey={"value"}
              data={data}
              outerRadius={80}
              labelLine={false}
            />
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
