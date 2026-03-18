"use client";

import {
  LayoutDashboard,
  Receipt,
  CreditCard,
  BarChart2,
  ArrowRightLeft,
  Mail,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";

const primaryIcons = [
  { icon: LayoutDashboard, active: true },
  { icon: Receipt, active: false },
  { icon: CreditCard, active: false },
  { icon: BarChart2, active: false },
  { icon: ArrowRightLeft, active: false },
  { icon: Mail, active: false },
  { icon: HelpCircle, active: false },
];

const secondaryIcons = [
  { icon: Settings, active: false },
  { icon: LogOut, active: false },
];

export default function Sidebar() {
  return (
    <div className="flex h-full" style={{ flexShrink: 0 }}>
      {/* Primary Sidebar */}
      <div
        className="flex flex-col items-center py-6 gap-2"
        style={{
          width: 64,
          background: "#ffffff",
          borderRight: "1px solid #f1f5f9",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center mb-4"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--green-primary)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "Inter" }}>Q</span>
        </div>

        {/* Primary icons */}
        <div className="flex flex-col items-center gap-1 flex-1">
          {primaryIcons.map(({ icon: Icon, active }, i) => (
            <button
              key={i}
              className="flex items-center justify-center transition-all"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: active ? "var(--green-primary)" : "transparent",
                border: "none",
                cursor: "pointer",
                color: active ? "#ffffff" : "#94a3b8",
              }}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Bottom icons */}
        <div className="flex flex-col items-center gap-1 mt-auto">
          {secondaryIcons.map(({ icon: Icon }, i) => (
            <button
              key={i}
              className="flex items-center justify-center transition-all"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#94a3b8",
              }}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}