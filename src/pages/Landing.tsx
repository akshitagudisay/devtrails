import { Link } from "react-router-dom";
import { ShieldCheck, Zap, MapPin, CloudRain, Sun, Wind, ArrowRight, Eye, CreditCard, Lock } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const steps = [
  { icon: CreditCard, title: "Subscribe", desc: "Choose a plan that fits your city and work hours. Starting at ₹15/week." },
  { icon: Eye, title: "Monitor", desc: "Our AI tracks weather, pollution, and disruption risks hyperlocally in real-time." },
  { icon: Zap, title: "Auto Payout", desc: "When thresholds are crossed, your payout is credited instantly — zero clicks." },
];

const features = [
  { icon: MapPin, title: "Hyperlocal Pricing", desc: "Premiums adjusted to your exact area's risk profile — no one-size-fits-all." },
  { icon: Zap, title: "Zero-Click Claims", desc: "No forms, no calls, no waiting. Payouts trigger automatically when events occur." },
  { icon: Lock, title: "Fraud Protection", desc: "Behavioral AI validates activity patterns to keep the system fair and trustworthy." },
];

const risks = [
  { icon: CloudRain, label: "Heavy Rain", stat: "₹300 payout" },
  { icon: Sun, label: "Extreme Heat", stat: "₹200 payout" },
  { icon: Wind, label: "High Pollution", stat: "₹250 payout" },
];

const Landing = () => (
  <div className="min-h-screen flex flex-col">
    {/* Hero */}
    <section className="container max-w-3xl mx-auto pt-20 pb-16 px-4 text-center">
      <AnimatedCard>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full px-3 py-1 mb-6">
          <ShieldCheck className="w-3.5 h-3.5" /> AI-Powered Parametric Insurance
        </span>
      </AnimatedCard>
      <AnimatedCard delay={80}>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-balance">
          Protect Your Weekly Income
        </h1>
      </AnimatedCard>
      <AnimatedCard delay={140}>
        <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto text-pretty">
          AI-powered parametric insurance for delivery workers. Automatic payouts when rain, heat, or pollution disrupts your earnings.
        </p>
      </AnimatedCard>
      <AnimatedCard delay={200}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-7 py-3 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97] transition-all"
          >
            Get Covered <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg border bg-card font-medium px-7 py-3 text-base text-foreground hover:bg-muted active:scale-[0.97] transition-all"
          >
            View Demo
          </Link>
        </div>
      </AnimatedCard>
    </section>

    {/* Risk Cards */}
    <section className="container max-w-3xl mx-auto pb-16 px-4">
      <AnimatedCard delay={280}>
        <div className="grid grid-cols-3 gap-3">
          {risks.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2 rounded-2xl bg-card border p-5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{r.label}</span>
              <span className="text-xs text-muted-foreground">{r.stat}</span>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </section>

    {/* How it Works */}
    <section className="bg-card border-y py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <AnimatedCard>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">How It Works</h2>
        </AnimatedCard>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <AnimatedCard key={s.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                  <h3 className="text-base font-bold">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

    {/* Key Features */}
    <section className="container max-w-3xl mx-auto py-16 px-4">
      <AnimatedCard>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why TrustRide</h2>
      </AnimatedCard>
      <div className="grid sm:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedCard key={f.title} delay={i * 100}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>

    {/* Workflow */}
    <section className="bg-card border-y py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <AnimatedCard>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">The TrustRide Flow</h2>
        </AnimatedCard>
        <AnimatedCard delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            {["You work", "System monitors", "Disruption detected", "Trust validated", "Payout credited"].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full whitespace-nowrap">{label}</span>
                {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:block" />}
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>

    {/* CTA */}
    <section className="container max-w-3xl mx-auto py-16 px-4 text-center">
      <AnimatedCard>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to ride with confidence?</h2>
        <p className="text-muted-foreground mb-6">Join thousands of delivery partners who never worry about bad weather again.</p>
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-8 py-3.5 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97] transition-all"
        >
          Get Covered Now <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedCard>
    </section>

    {/* Footer */}
    <footer className="border-t py-6">
      <div className="container max-w-3xl mx-auto px-4 text-center text-xs text-muted-foreground">
        © 2026 TrustRide. AI-powered parametric insurance.
      </div>
    </footer>
  </div>
);

export default Landing;