import Link from "next/link";

// Icons as simple SVG components
const Icons = {
  overview: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  dashboard: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  projects: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  tasks: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  calendar: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  settings: () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function HomePage() {
  const navItems = [
    { href: "/home", label: "Overview", icon: Icons.overview, active: true },
    { href: "/dashboard", label: "Dashboard", icon: Icons.dashboard },
    { href: "#", label: "Projects", icon: Icons.projects },
    { href: "#", label: "Tasks", icon: Icons.tasks },
    { href: "#", label: "Calendar", icon: Icons.calendar },
    { href: "#", label: "Settings", icon: Icons.settings },
  ];

  const stats = [
    { label: "Active Projects", value: "12", change: "+3 this week" },
    { label: "Tasks Done", value: "48", change: "+12 today" },
    { label: "In Progress", value: "7", change: "2 due soon" },
    { label: "Team Members", value: "5", change: "All active" },
  ];

  const recentTasks = [
    { title: "Draft Substack newsletter", status: "In Progress", priority: "High" },
    { title: "Update Canon app quotes", status: "Pending", priority: "Medium" },
    { title: "Review Hell's Codex chapters", status: "Done", priority: "High" },
    { title: "Twitter thread on systems", status: "Pending", priority: "Low" },
  ];

  const glassCard = {
    padding: "1.25rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(30, 30, 40, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const glassPanel = {
    padding: "1.5rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(30, 30, 40, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  const glassButton = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside 
        className="w-72 border-r border-white/10 relative overflow-hidden"
        style={{ backgroundColor: "rgba(10, 10, 15, 0.95)" }}
      >
        {/* Gradient glow at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
          }}
        />

        <div className="relative p-6">
          {/* Logo section with glow */}
          <div 
            className="mb-8 flex items-center gap-4 p-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 30, 40, 0.8) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
            }}
          >
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              D
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Central Hub</h1>
              <p className="text-xs text-blue-400">Mission Control</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  style={{
                    background: item.active 
                      ? "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 100%)" 
                      : "transparent",
                    borderLeft: item.active ? "3px solid #3b82f6" : "3px solid transparent",
                  }}
                >
                  <span 
                    className={`transition-all duration-200 ${item.active ? "text-blue-400" : "group-hover:text-blue-400"}`}
                  >
                    <Icon />
                  </span>
                  {item.label}
                  {item.active && (
                    <span 
                      className="ml-auto h-2 w-2 rounded-full"
                      style={{
                        background: "#3b82f6",
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              background: "linear-gradient(0deg, rgba(10, 10, 15, 1) 0%, transparent 100%)",
            }}
          >
            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: "rgba(30, 30, 40, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  }}
                >
                  P
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Profit</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-green-500"
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-white">Overview</h2>
          <p className="text-gray-400">Welcome back. Here's what's happening.</p>
        </header>

        {/* Stats Grid */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              style={{
                ...glassCard,
                borderLeft: i === 0 ? "3px solid #3b82f6" : 
                           i === 1 ? "3px solid #10b981" :
                           i === 2 ? "3px solid #f59e0b" : "3px solid #8b5cf6",
              }}
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          ))}
        </section>

        {/* Two Column Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Tasks */}
          <div className="lg:col-span-2">
            <div style={glassPanel}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Recent Tasks</h3>
                <button style={glassButton} className="hover:bg-white/20">View All</button>
              </div>
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center justify-between rounded-xl border border-white/5 p-4 transition hover:border-white/10"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: task.priority === "High" ? "#ef4444" :
                                    task.priority === "Medium" ? "#f59e0b" : "#22c55e",
                          boxShadow: `0 0 8px ${task.priority === "High" ? "rgba(239, 68, 68, 0.6)" :
                                    task.priority === "Medium" ? "rgba(245, 158, 11, 0.6)" : "rgba(34, 197, 94, 0.6)"}`,
                        }}
                      />
                      <div>
                        <p className="font-medium text-white">{task.title}</p>
                        <p className="text-sm text-gray-500">{task.status}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        task.priority === "High"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : task.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div style={glassPanel}>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
              <div className="space-y-3">
                {["+ New Task", "+ New Project", "Create Doc", "Create Sheet"].map((action) => (
                  <button 
                    key={action}
                    style={{
                      ...glassButton,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }} 
                    className="w-full text-left hover:bg-white/20 group"
                  >
                    <span className="text-blue-400 group-hover:text-blue-300">+</span>
                    {action.replace("+ ", "")}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ ...glassPanel, marginTop: "1rem" }}>
              <h3 className="mb-4 text-lg font-semibold text-white">System Status</h3>
              <div className="space-y-3 text-sm">
                {[
                  { name: "API", status: "Online", color: "#22c55e" },
                  { name: "Database", status: "Online", color: "#22c55e" },
                  { name: "Sync", status: "Active", color: "#3b82f6" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-gray-400">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span 
                        className="h-2 w-2 rounded-full"
                        style={{ 
                          background: item.color,
                          boxShadow: `0 0 8px ${item.color}`,
                        }}
                      />
                      <span style={{ color: item.color }}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
