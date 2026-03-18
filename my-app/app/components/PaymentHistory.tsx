"use client";

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <circle cx="12" cy="12" r="10" fill="#ea4c89"/>
    <path d="M4 8.5c2 .8 4.5 1.2 7.5.5M12 3c.8 2.5 1.2 5.5.5 9.5M20 8.5c-1.5 2.5-4 4-7.5 5M4 16c2.5-.8 5.5-1.2 9.5-.5M12 21c-.8-2.5-1.2-5.5-.5-9.5M20 16c-1.5-.8-4-1.2-7.5-.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const GooglePayIcon = () => (
  <svg viewBox="0 0 32 18" width="32" height="18" fill="none">
    <text x="0" y="14" fontSize="13" fontWeight="700" fill="#4285f4" fontFamily="Arial, sans-serif">G</text>
    <text x="9" y="14" fontSize="13" fontWeight="700" fill="#ea4335" fontFamily="Arial, sans-serif">P</text>
    <text x="17" y="14" fontSize="13" fontWeight="700" fill="#34a853" fontFamily="Arial, sans-serif">a</text>
    <text x="24" y="14" fontSize="13" fontWeight="700" fill="#fbbc05" fontFamily="Arial, sans-serif">y</text>
  </svg>
);

const AmazonIcon = () => (
  <svg viewBox="0 0 40 18" width="40" height="18" fill="none">
    <text x="0" y="13" fontSize="11" fontWeight="800" fill="#0f172a" fontFamily="Arial, sans-serif">amazon</text>
    <path d="M2 16 Q20 20 38 16" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M35 14.5 L38 16 L35.5 17.5" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const transactions = [
  { name: "Dribbble Design", badge: "+18.67%", date: "16 Jun 2025", time: "10:30 PM", amount: "89,345.23 USD", icon: <DribbbleIcon />, bg: "#fce7f3" },
  { name: "Google Pay",      badge: "+9.34%",  date: "15 Jun 2025", time: "11:45 PM", amount: "12,345.89 USD", icon: <GooglePayIcon />, bg: "#eff6ff" },
  { name: "Amazon Shopping", badge: "+12.23%", date: "14 Jun 2025", time: "10:15 PM", amount: "32,123.67 USD", icon: <AmazonIcon />,    bg: "#fffbeb" },
];

export default function PaymentHistory() {
  return (
    <div style={{ background: "#fff", borderRadius: 20, padding: "14px 20px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: 13, color: "#0f172a" }}>Payment History</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>Recent payments history</p>
        </div>
        <button style={{ width: 26, height: 26, borderRadius: 8, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", color: "#94a3b8", fontSize: 12 }}>↗</button>
      </div>

      {/* Table header */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1.3fr", padding: "0 6px", marginBottom: 4 }}>
        {["Name", "Date", "Time", "Status", "Amount"].map((h) => (
          <span key={h} style={{ fontSize: 10, fontWeight: 500, color: "#94a3b8" }}>{h}</span>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {transactions.map((tx, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1.3fr",
            alignItems: "center", padding: "7px 6px", borderRadius: 10,
            background: i % 2 === 0 ? "#fafafa" : "transparent",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: tx.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {tx.icon}
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#0f172a" }}>{tx.name}</p>
                <p style={{ fontSize: 10, color: "#16a34a" }}>{tx.badge}</p>
              </div>
            </div>
            <span style={{ fontSize: 11, color: "#64748b" }}>{tx.date}</span>
            <span style={{ fontSize: 11, color: "#64748b" }}>{tx.time}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 500 }}>Successful</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, color: "#0f172a" }}>{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}