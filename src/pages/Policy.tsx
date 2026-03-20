import { CloudRain, Sun, Wind, ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const coverages = [
  {
    icon: CloudRain,
    title: "Heavy Rain",
    payout: "₹300",
    trigger: "Rainfall > 30mm in 2 hours",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    icon: Sun,
    title: "Extreme Heat",
    payout: "₹200",
    trigger: "Temperature > 42°C",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: Wind,
    title: "High Pollution",
    payout: "₹250",
    trigger: "AQI > 300",
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
];

const Policy = () => (
  <div className="min-h-screen container max-w-lg mx-auto py-8 flex flex-col gap-5">
    <AnimatedCard>
      <h1 className="text-xl font-bold">Coverage & Policy Details</h1>
      <p className="text-muted-foreground text-sm mt-1">What you're protected against</p>
    </AnimatedCard>

    {/* Active Policy Summary */}
    <AnimatedCard delay={60}>
      <div className="rounded-2xl bg-primary text-primary-foreground p-5 shadow-lg shadow-primary/15">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-semibold text-sm">Policy TR-2026-4821</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div>
            <p className="text-xs opacity-80">Status</p>
            <p className="font-bold">Active</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Premium</p>
            <p className="font-bold">₹25/wk</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Max Cover</p>
            <p className="font-bold">₹2,000</p>
          </div>
        </div>
      </div>
    </AnimatedCard>

    {/* Coverage Breakdown */}
    <AnimatedCard delay={140}>
      <h2 className="text-base font-bold mb-3">Coverage Breakdown</h2>
    </AnimatedCard>
    {coverages.map((c, i) => (
      <AnimatedCard key={c.title} delay={180 + i * 80}>
        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
              <c.icon className={`w-5 h-5 ${c.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold">{c.title}</h3>
                <span className="text-base font-bold text-primary">{c.payout}</span>
              </div>
              <p className="text-xs text-muted-foreground">Payout per event</p>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-muted p-2.5">
                <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                <span className="text-xs font-medium text-foreground">Trigger: {c.trigger}</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>
    ))}

    {/* Parametric Explainer */}
    <AnimatedCard delay={450}>
      <div className="rounded-2xl bg-muted p-5">
        <h3 className="text-sm font-bold mb-2">What is parametric insurance?</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Unlike traditional insurance, parametric policies pay out automatically when predefined conditions are met (e.g., rainfall exceeds a threshold). No claims process, no paperwork — just instant payouts when you need them most.
        </p>
      </div>
    </AnimatedCard>
  </div>
);

export default Policy;