import { Users, FileCheck, AlertTriangle, Wallet, TrendingUp } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const metrics = [
  { icon: Users, label: "Total Users", value: "2,847", change: "+12.3%", color: "text-primary" },
  { icon: FileCheck, label: "Claims Processed", value: "1,234", change: "+8.7%", color: "text-success" },
  { icon: AlertTriangle, label: "Fraud Flagged", value: "23", change: "-4.1%", color: "text-danger" },
  { icon: Wallet, label: "Weekly Payouts", value: "₹4.2L", change: "+15.6%", color: "text-warning" },
];

const weeklyPayouts = [
  { week: "W1", amount: 28000 },
  { week: "W2", amount: 35000 },
  { week: "W3", amount: 42000 },
  { week: "W4", amount: 31000 },
  { week: "W5", amount: 38000 },
  { week: "W6", amount: 45000 },
  { week: "W7", amount: 52000 },
  { week: "W8", amount: 41000 },
];

const claimsByType = [
  { type: "Rain", count: 487 },
  { type: "Heat", count: 312 },
  { type: "Pollution", count: 198 },
  { type: "Other", count: 47 },
];

const Admin = () => (
  <div className="min-h-screen container max-w-3xl mx-auto py-8 flex flex-col gap-5">
    <AnimatedCard>
      <h1 className="text-xl font-bold">Analytics Dashboard</h1>
      <p className="text-muted-foreground text-sm">Platform performance overview</p>
    </AnimatedCard>

    {/* Metric Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {metrics.map((m, i) => (
        <AnimatedCard key={m.label} delay={i * 60}>
          <div className="rounded-2xl bg-card border p-4">
            <m.icon className={`w-5 h-5 ${m.color} mb-2`} />
            <p className="text-2xl font-bold">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
            <span className={`inline-flex items-center gap-0.5 text-[11px] font-semibold mt-1.5 ${
              m.change.startsWith("+") ? "text-success" : "text-danger"
            }`}>
              <TrendingUp className="w-3 h-3" /> {m.change}
            </span>
          </div>
        </AnimatedCard>
      ))}
    </div>

    {/* Weekly Payouts Chart */}
    <AnimatedCard delay={280}>
      <div className="rounded-2xl bg-card border p-5">
        <h2 className="text-sm font-bold mb-4">Weekly Payouts (₹)</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyPayouts}>
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 3, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AnimatedCard>

    {/* Claims by Type */}
    <AnimatedCard delay={360}>
      <div className="rounded-2xl bg-card border p-5">
        <h2 className="text-sm font-bold mb-4">Claims by Type</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={claimsByType}>
              <XAxis dataKey="type" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AnimatedCard>
  </div>
);

export default Admin;