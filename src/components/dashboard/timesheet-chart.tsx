"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Tue", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Wed", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Thu", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Fri", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Sat", total: Math.floor(Math.random() * 500) + 200 },
  { name: "Sun", total: Math.floor(Math.random() * 500) + 200 },
];

export function TimesheetChart() {
  return (
    <div className="h-full w-full flex flex-col">
       <h3 className="text-lg font-semibold mb-2">Weekly Hours</h3>
       <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}h`}
            />
            <Bar
              dataKey="total"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
