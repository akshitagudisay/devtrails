import { ShieldCheck, CloudRain, AlertTriangle, Wallet, Fingerprint, Activity, Zap } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const Dashboard = () => {
  const trustScore = 92;

  return (
    <div className="min-h-screen container max-w-lg mx-auto py-8 flex flex-col gap-5">
      <AnimatedCard>
        <h1 className="text-xl font-bold">Your Dashboard</h1>
        <p className="text-muted-foreground text-sm">Everything looks good, Ravi 👍</p>
      </AnimatedCard>

      {/* Active Policy */}
      <AnimatedCard delay={60}>
        <div className="rounded-2xl bg-primary text-primary-foreground p-5 shadow-lg shadow-primary/15">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold text-sm">Active Policy</span>
            </div>
            <span className="text-xs opacity-80 font-mono">TR-2026-4821</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs opacity-80">Premium</p>
              <p className="text-lg font-bold">₹25/wk</p>
            </div>
            <div>
              <p className="text-xs opacity-80">Coverage</p>
              <p className="text-lg font-bold">₹2,000</p>
            </div>
            <div>
              <p className="text-xs opacity-80">Days Left</p>
              <p className="text-lg font-bold">5</p>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Risk Alerts */}
      <AnimatedCard delay={140}>
        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span className="font-semibold text-sm">Risk Alerts</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 rounded-lg bg-warning/10 p-3">
              <CloudRain className="w-4 h-4 text-warning mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Heavy rain expected tomorrow</p>
                <p className="text-xs text-muted-foreground">Mumbai region — 85% probability</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-muted p-3">
              <AlertTriangle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">High pollution risk</p>
                <p className="text-xs text-muted-foreground">AQI forecast: 280 — Thursday</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Earnings Protected */}
      <AnimatedCard delay={220}>
        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm">Earnings Protected</span>
          </div>
          <p className="text-3xl font-bold text-foreground">₹1,200</p>
          <p className="text-xs text-muted-foreground mt-1">Protected this month across 3 events</p>
        </div>
      </AnimatedCard>

      {/* Trust Score */}
      <AnimatedCard delay={300}>
        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-center gap-2 mb-4">
            <Fingerprint className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm">Trust Score</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${trustScore} ${100 - trustScore}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                {trustScore}%
              </span>
            </div>
            <div>
              <p className="text-sm font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-success" /> High Trust — Instant Payout Eligible
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                System validates behavior, movement patterns, and activity to prevent GPS spoofing.
              </p>
              <span className="inline-block mt-2 text-[11px] font-medium bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5">
                Verified User
              </span>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Fraud Detection */}
      <AnimatedCard delay={380}>
        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm">Fraud Detection</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Trust Score</span>
                <span className="font-semibold">{trustScore}/100</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${trustScore}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-success/10 p-2.5">
              <ShieldCheck className="w-4 h-4 text-success shrink-0" />
              <span className="text-xs font-medium text-foreground">No anomalies detected</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI checks behaviour, movement patterns, and activity logs to prevent GPS spoofing and ensure fair payouts.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Dashboard;