import Link from "next/link";

export default function HomePage() {
  const navItems = [
    { href: "/home", label: "Overview", active: true },
    { href: "/dashboard", label: "Dashboard" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Tasks" },
    { href: "#", label: "Calendar" },
    { href: "#", label: "Settings" },
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

  // Glass effect styles
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
        className="w-64 border-r border-white/10"
        style={{ backgroundColor: "rgba(10, 10, 15, 0.8)" }}
      >
        <div className="p-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              D
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Central Hub</h1>
              <p className="text-xs text-gray-400">Mission Control</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center rounded-lg px-4 py-3 text-sm transition ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-white">Overview</h2>
          <p className="text-gray-400">Welcome back. Here's what's happening.</p>
        </header>

        {/* Stats Grid */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} style={glassCard}>
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
                    className="flex items-center justify-between rounded-lg border border-white/5 p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div>
                      <p className="font-medium text-white">{task.title}</p>
                      <p className="text-sm text-gray-500">{task.status}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        task.priority === "High"
                          ? "bg-red-500/20 text-red-400"
                          : task.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
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
                <button style={glassButton} className="w-full text-left hover:bg-white/20">+ New Task</button>
                <button style={glassButton} className="w-full text-left hover:bg-white/20">+ New Project</button>
                <button style={glassButton} className="w-full text-left hover:bg-white/20">Create Doc</button>
                <button style={glassButton} className="w-full text-left hover:bg-white/20">Create Sheet</button>
              </div>
            </div>

            <div style={{ ...glassPanel, marginTop: "1rem" }}>
              <h3 className="mb-4 text-lg font-semibold text-white">System Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">API</span>
                  <span className="text-green-400">● Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Database</span>
                  <span className="text-green-400">● Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Sync</span>
                  <span className="text-blue-400">↻ Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
