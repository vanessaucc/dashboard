"use client";

import { Search, Bell, ChevronDown } from "lucide-react";

const navItems = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export default function Topbar() {
  return (
    <header
      className="flex items-center justify-between px-6"
      style={{
        height: 72,
        background: "#ffffff",
        borderBottom: "1px solid #f1f5f9",
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2" style={{ minWidth: 140 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--green-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>Q</span>
        </div>
        <span style={{ fontWeight: 700, fontSize: 17, color: "#0f172a", fontFamily: "Inter" }}>Quixotic</span>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item}
            style={{
              padding: "8px 18px",
              borderRadius: 24,
              border: "none",
              background: item === "Dashboard" ? "#f1f5f9" : "transparent",
              fontWeight: item === "Dashboard" ? 600 : 400,
              fontSize: 14,
              color: item === "Dashboard" ? "#0f172a" : "#64748b",
              cursor: "pointer",
              fontFamily: "Inter",
              transition: "all 0.15s",
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <button
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#f1f5f9",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748b",
          }}
        >
          <Search size={16} />
        </button>
        <button
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#f1f5f9",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748b",
            position: "relative",
          }}
        >
          <Bell size={16} />
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 9,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--green-primary)",
              border: "2px solid #fff",
            }}
          />
        </button>
        <div className="flex items-center gap-2" style={{ cursor: "pointer" }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              overflow: "hidden",
              border: "2px solid #e2e8f0",
            }}
          >
            <img
              src="https://i.pravatar.cc/38?img=12"
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <ChevronDown size={14} color="#94a3b8" />
        </div>
      </div>
    </header>
  );
}