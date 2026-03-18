import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", background: "oklch(0.928 0.006 264.531)" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
        <Topbar />
        <main style={{ flex: 1, overflow: "hidden", padding: "8px 14px" }}>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}