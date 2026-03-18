"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { month: "JAN", value: 1400 },
  { month: "FEB", value: 2000 },
  { month: "MAR", value: 3000 },
  { month: "APR", value: 4800 },
  { month: "MAY", value: 3600 },
  { month: "JUN", value: 3000 },
];

export default function EngagementChart() {
  const [tab, setTab] = useState<"Monthly" | "Annually">("Annually");
  return (
    <div style={{ background: "#fff", borderRadius: 18, padding: "14px 16px", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "oklch(0.925 0.084 155.995)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📊</div>
          <p style={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>Engagement Rate</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ background: "#f1f5f9", borderRadius: 20, padding: "2px 4px", display: "flex", gap: 2 }}>
            {(["Monthly", "Annually"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: "4px 12px", borderRadius: 16, border: "none",
                background: tab === t ? "var(--green-primary)" : "transparent",
                color: tab === t ? "#fff" : "#64748b",
                fontWeight: tab === t ? 600 : 400, fontSize: 12,
                cursor: "pointer", fontFamily: "Inter",
              }}>{t}</button>
            ))}
          </div>
          <button style={{ width: 26, height: 26, borderRadius: 6, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", color: "#94a3b8", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>↗</button>
        </div>
      </div>

      {/* Chart — tall enough to match col height */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="32%" margin={{ top: 30, right: 4, left: -22, bottom: 0 }}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#94a3b8" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} tickFormatter={(v) => `${v / 1000}k`} />
          <Bar dataKey="value" radius={[8, 8, 8, 8]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.month === "APR" ? "oklch(0.448 0.119 151.328)" : "oklch(0.925 0.084 155.995)"} />
            ))}
            <LabelList content={(props: any) => {
              const { x, y, width, index } = props;
              if (data[index]?.month !== "APR") return null;
              return (
                <g>
                  <rect x={x + width / 2 - 24} y={y - 24} width={48} height={20} rx={10} fill="oklch(0.448 0.119 151.328)" />
                  <text x={x + width / 2} y={y - 10} textAnchor="middle" fill="white" fontSize={11} fontWeight={600}>+17.8%</text>
                </g>
              );
            }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}