"use client";

import { useState } from "react";
import { CalendarDays, Plus, CreditCard, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList,
  AreaChart, Area,
} from "recharts";

const barData = [
  { month: "JAN", value: 1400 },
  { month: "FEB", value: 2000 },
  { month: "MAR", value: 3000 },
  { month: "APR", value: 4800 },
  { month: "MAY", value: 3600 },
  { month: "JUN", value: 3000 },
];
const sparkData = [{ v: 28000 }, { v: 32000 }, { v: 27000 }, { v: 34000 }, { v: 29000 }, { v: 33000 }, { v: 30000 }, { v: 32678 }];
const avatars = ["https://i.pravatar.cc/32?img=11", "https://i.pravatar.cc/32?img=15", "https://i.pravatar.cc/32?img=18"];

const transactions = [
  { name: "Dribbble Design", badge: "+18.67%", date: "16 Jun 2025", time: "10:30 PM", amount: "89,345.23 USD",
    icon: <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="#ea4c89"/><path d="M4 9c2 .8 4.5 1.2 7.5.5M12 3c.8 2.5 1.2 5.5.5 9M20 9c-1.5 2.5-4 4-7.5 5M4 15c2.5-.8 5.5-1.2 9.5-.5M12 21c-.8-2.5-1.2-5.5-.5-9M20 15c-1.5-.8-4-1.2-7.5-.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>, bg: "#fce7f3" },
  { name: "Google Pay", badge: "+9.34%", date: "15 Jun 2025", time: "11:45 PM", amount: "12,345.89 USD",
    icon: <svg viewBox="0 0 36 18" width="36" height="18"><text x="0" y="14" fontSize="13" fontWeight="700" fill="#4285f4" fontFamily="Arial">G</text><text x="9" y="14" fontSize="13" fontWeight="700" fill="#ea4335" fontFamily="Arial">P</text><text x="17" y="14" fontSize="13" fontWeight="700" fill="#34a853" fontFamily="Arial">a</text><text x="24" y="14" fontSize="13" fontWeight="700" fill="#fbbc05" fontFamily="Arial">y</text></svg>, bg: "#eff6ff" },
  { name: "Amazon Shopping", badge: "+12.23%", date: "14 Jun 2025", time: "10:15 PM", amount: "32,123.67 USD",
    icon: <svg viewBox="0 0 44 18" width="44" height="18"><text x="0" y="13" fontSize="11" fontWeight="800" fill="#0f172a" fontFamily="Arial">amazon</text><path d="M2 16 Q22 20 42 16" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M39 14.5 L42 16 L39.5 17.5" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, bg: "#fffbeb" },
];

const btn = { width: 26, height: 26, borderRadius: 7, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", color: "#94a3b8", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" } as React.CSSProperties;

export default function Dashboard() {
  const [tab, setTab] = useState<"Monthly" | "Annually">("Annually");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, height: "100%", minHeight: 0 }}>

      {/* ── HEADER ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: 0 }}>
          Welcome Back, <span style={{ color: "#94a3b8" }}>Sujon</span>
        </h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 10, background: "#fff", border: "1px solid #e2e8f0", fontSize: 12, color: "#0f172a", fontWeight: 500, cursor: "pointer" }}>
            <CalendarDays size={13} color="#94a3b8" /> 29 Jun, 2025 – 29 August, 2025 <span style={{ color: "#94a3b8" }}>▾</span>
          </button>
          <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 10, background: "var(--green-primary)", border: "none", fontSize: 12, color: "#fff", fontWeight: 600, cursor: "pointer" }}>
            <Plus size={13} /> Add New Wallet
          </button>
        </div>
      </div>

      {/* ── BODY: left (75%) + right (25%) ── */}
      <div style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}>

        {/* ══ LEFT ══ */}
        <div style={{ flex: "0 0 75%", display: "flex", flexDirection: "column", gap: 8, minHeight: 0 }}>

          {/* Top row */}
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>

            {/* Payment Goal */}
            <div style={{ flex: "0 0 36%", background: "#fff", borderRadius: 16, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", margin: 0 }}>Payment Goal</p>
                  <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>Total amount goal</p>
                </div>
                <button style={btn}>↗</button>
              </div>
              {/* VISA */}
              <div style={{ background: "var(--green-primary)", borderRadius: 14, padding: "12px 14px", color: "#fff", height: 130, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -25, right: -25, width: 90, height: 90, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                <div style={{ position: "absolute", bottom: -20, left: 15, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "1px" }}>VISA</span>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.45)", border: "2px solid rgba(255,255,255,0.6)" }} />
                    <div style={{ width: 13, height: 13, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.4)", marginLeft: -6 }} />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 10, opacity: 0.7, margin: "0 0 3px" }}>Credit Card</p>
                  <p style={{ fontSize: 19, fontWeight: 700, margin: 0, letterSpacing: "-0.5px" }}>$ 78,989.09</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 10, opacity: 0.75, letterSpacing: "2px" }}>**** 909090</span>
                  <span style={{ fontSize: 10, opacity: 0.75 }}>EXP 09/26</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: 10, color: "#94a3b8", margin: "0 0 2px" }}>Weekly Revenue</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0 }}>+3,945 USD</p>
                </div>
                <span style={{ padding: "3px 9px", borderRadius: 20, background: "#dcfce7", color: "#16a34a", fontSize: 11, fontWeight: 600 }}>+12.8%</span>
              </div>
            </div>

            {/* Engagement Rate */}
            <div style={{ flex: 1, background: "#fff", borderRadius: 16, padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "oklch(0.925 0.084 155.995)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📊</div>
                  <p style={{ fontWeight: 600, fontSize: 13, color: "#0f172a", margin: 0 }}>Engagement Rate</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ background: "#f1f5f9", borderRadius: 20, padding: "2px 4px", display: "flex", gap: 2 }}>
                    {(["Monthly", "Annually"] as const).map((t) => (
                      <button key={t} onClick={() => setTab(t)} style={{ padding: "3px 10px", borderRadius: 16, border: "none", background: tab === t ? "var(--green-primary)" : "transparent", color: tab === t ? "#fff" : "#64748b", fontWeight: tab === t ? 600 : 400, fontSize: 11, cursor: "pointer" }}>{t}</button>
                    ))}
                  </div>
                  <button style={btn}>↗</button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={175}>
                <BarChart data={barData} barCategoryGap="32%" margin={{ top: 26, right: 4, left: -22, bottom: 0 }}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} tickFormatter={(v) => `${v / 1000}k`} />
                  <Bar dataKey="value" radius={[7, 7, 7, 7]}>
                    {barData.map((e, i) => <Cell key={i} fill={e.month === "APR" ? "oklch(0.448 0.119 151.328)" : "oklch(0.925 0.084 155.995)"} />)}
                    <LabelList content={(props: any) => {
                      const { x, y, width, index } = props;
                      if (barData[index]?.month !== "APR") return null;
                      return <g><rect x={x + width / 2 - 23} y={y - 22} width={46} height={18} rx={9} fill="oklch(0.448 0.119 151.328)" /><text x={x + width / 2} y={y - 10} textAnchor="middle" fill="white" fontSize={10} fontWeight={600}>+17.8%</text></g>;
                    }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payment History — fills remaining height */}
          <div style={{ flex: 1, minHeight: 0, background: "#fff", borderRadius: 16, padding: "12px 16px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10, flexShrink: 0 }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: 14, color: "#0f172a", margin: 0 }}>Payment History</p>
                <p style={{ fontSize: 11, color: "#94a3b8", margin: "1px 0 0" }}>Recent payments history</p>
              </div>
              <button style={btn}>↗</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1.2fr 1fr 1fr 1.3fr", padding: "0 6px", marginBottom: 6, flexShrink: 0 }}>
              {["Name", "Date", "Time", "Status", "Amount"].map(h => (
                <span key={h} style={{ fontSize: 11, fontWeight: 500, color: "#94a3b8" }}>{h}</span>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              {transactions.map((tx, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "2.5fr 1.2fr 1fr 1fr 1.3fr", alignItems: "center", padding: "10px 6px", borderRadius: 10, background: i % 2 === 0 ? "#f8fafc" : "transparent" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 11, background: tx.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{tx.icon}</div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500, color: "#0f172a", margin: 0 }}>{tx.name}</p>
                      <p style={{ fontSize: 11, color: "#16a34a", margin: "1px 0 0" }}>{tx.badge}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{tx.date}</span>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{tx.time}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                    <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}>Successful</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#0f172a" }}>{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ RIGHT — flex:1 fills ALL remaining width ══ */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8, minHeight: 0 }}>

          {/* Balance */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "12px 14px 0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 2 }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", margin: 0 }}>Payment Goal</p>
                <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>Total amount goal</p>
              </div>
              <button style={btn}>↗</button>
            </div>
            <p style={{ fontSize: 10, color: "#94a3b8", margin: "4px 0 1px" }}>Total Balance</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 4px", letterSpacing: "-0.5px" }}>$32,678.90</p>
            <div style={{ height: 50, marginLeft: -14, marginRight: -14 }}>
              <ResponsiveContainer width="100%" height={50}>
                <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.448 0.119 151.328)" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="oklch(0.448 0.119 151.328)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="oklch(0.448 0.119 151.328)" strokeWidth={2} fill="url(#sg)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: "flex", gap: 6, padding: "8px 0 10px" }}>
              <button style={{ flex: 1, padding: "7px 0", borderRadius: 9, background: "var(--green-primary)", border: "none", color: "#fff", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <ArrowUpRight size={13} /> Send
              </button>
              <button style={{ flex: 1, padding: "7px 0", borderRadius: 9, background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a", fontWeight: 600, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <ArrowDownLeft size={13} /> Receive
              </button>
            </div>
          </div>

          {/* Amount of credit */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: "oklch(0.925 0.084 155.995)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CreditCard size={15} color="oklch(0.448 0.119 151.328)" />
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#0f172a", margin: 0 }}>Amount of credit</p>
                  <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>Total refund amount with fee</p>
                </div>
              </div>
              <button style={btn}>↗</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>$8,945.89</p>
              <span style={{ padding: "3px 8px", borderRadius: 20, background: "#dcfce7", color: "#16a34a", fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>+12.8%</span>
            </div>
          </div>

          {/* Mandatory Payments — flex:1 fills remaining space */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "10px 12px", flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: 12, color: "#0f172a", margin: 0 }}>Mandatory Payments</p>
                <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>Recent payments</p>
              </div>
              <button style={btn}>↗</button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" style={{ width: 30, height: 30, borderRadius: "50%", border: "2px solid #fff", marginLeft: i === 0 ? 0 : -8, objectFit: "cover" }} />
              ))}
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--green-primary)", border: "2px solid #fff", marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 700 }}>+2</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}