"use client";

import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const sparkData = [
  { v: 28000 }, { v: 32000 }, { v: 27000 }, { v: 34000 },
  { v: 29000 }, { v: 33000 }, { v: 30000 }, { v: 32678 },
];

export default function BalanceCard() {
  return (
    <div style={{ background: "#fff", borderRadius: 18, padding: "12px 14px 0", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 2 }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: 13, color: "#0f172a" }}>Payment Goal</p>
          <p style={{ fontSize: 10, color: "#94a3b8" }}>Total amount goal</p>
        </div>
        <button style={{ width: 24, height: 24, borderRadius: 6, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", color: "#94a3b8", fontSize: 12 }}>↗</button>
      </div>
      <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>Total Balance</p>
      <p style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.5px", marginBottom: 4 }}>$32,678.90</p>
      <div style={{ height: 50, marginLeft: -14, marginRight: -14 }}>
        <ResponsiveContainer width="100%" height={50}>
          <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.448 0.119 151.328)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="oklch(0.448 0.119 151.328)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="oklch(0.448 0.119 151.328)" strokeWidth={2} fill="url(#bg)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", gap: 6, padding: "8px 0 10px" }}>
        <button style={{ flex: 1, padding: "7px 0", borderRadius: 10, background: "var(--green-primary)", border: "none", color: "#fff", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontFamily: "Inter" }}>
          <ArrowUpRight size={13} /> Send
        </button>
        <button style={{ flex: 1, padding: "7px 0", borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontFamily: "Inter" }}>
          <ArrowDownLeft size={13} /> Receive
        </button>
      </div>
    </div>
  );
}