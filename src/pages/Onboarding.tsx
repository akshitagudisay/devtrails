import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, MapPin, Bike, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"];
const platforms = ["Zomato", "Swiggy", "Dunzo", "Blinkit", "Zepto", "Other"];

const riskData: Record<string, { level: string; premium: number; coverage: number; color: string }> = {
  Mumbai: { level: "High", premium: 35, coverage: 2800, color: "text-danger" },
  Delhi: { level: "High", premium: 40, coverage: 3000, color: "text-danger" },
  Bangalore: { level: "Medium", premium: 25, coverage: 2000, color: "text-warning" },
  Hyderabad: { level: "Medium", premium: 22, coverage: 1800, color: "text-warning" },
  Chennai: { level: "High", premium: 38, coverage: 2500, color: "text-danger" },
  Pune: { level: "Low", premium: 15, coverage: 1000, color: "text-success" },
  Kolkata: { level: "Medium", premium: 28, coverage: 2200, color: "text-warning" },
};

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "quote">("form");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [platform, setPlatform] = useState("");
  const [hours, setHours] = useState(8);

  const canSubmit = name.trim() && city && platform;
  const risk = riskData[city] || riskData.Bangalore;

  // Adjust premium slightly by hours
  const adjustedPremium = Math.round(risk.premium * (hours >= 10 ? 1.2 : hours <= 4 ? 0.8 : 1));
  const adjustedCoverage = Math.round(risk.coverage * (hours >= 10 ? 1.15 : hours <= 4 ? 0.85 : 1));

  return (
    <div className="min-h-screen container max-w-md mx-auto py-10 flex flex-col gap-6">
      {step === "form" ? (
        <>
          <AnimatedCard>
            <h1 className="text-2xl font-bold">Let's get you covered</h1>
            <p className="text-muted-foreground text-sm mt-1">Takes less than a minute</p>
          </AnimatedCard>

          <AnimatedCard delay={80} className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium flex items-center gap-1.5">
                <User className="w-4 h-4 text-muted-foreground" /> Your Name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ravi Kumar"
                className="rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-muted-foreground" /> City
              </span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none"
              >
                <option value="">Select city</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-muted-foreground" /> Platform
              </span>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlatform(p)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all active:scale-[0.96] ${
                      platform === p
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card text-foreground hover:border-primary/40"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-muted-foreground" /> Working hours/day: <strong>{hours}h</strong>
              </span>
              <input
                type="range"
                min={2}
                max={14}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2h</span><span>14h</span>
              </div>
            </label>

            <button
              disabled={!canSubmit}
              onClick={() => setStep("quote")}
              className="mt-2 w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97] transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              Get My Quote
            </button>
          </AnimatedCard>
        </>
      ) : (
        <AnimatedCard className="flex flex-col items-center text-center gap-6 pt-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Hey {name} 👋</p>
            <h2 className="text-2xl font-bold mt-1">Your TrustRide Plan</h2>
          </div>

          {/* Risk Level */}
          <div className="w-full rounded-xl border bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Risk Level
              </span>
              <span className={`text-sm font-bold ${risk.color}`}>{risk.level}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Based on {city} weather & pollution data</p>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-card border p-4 text-center">
              <p className="text-xs text-muted-foreground">Weekly Premium</p>
              <p className="text-2xl font-bold text-primary mt-1">₹{adjustedPremium}</p>
            </div>
            <div className="rounded-xl bg-card border p-4 text-center">
              <p className="text-xs text-muted-foreground">Coverage</p>
              <p className="text-2xl font-bold text-foreground mt-1">₹{adjustedCoverage.toLocaleString()}</p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>✓ Auto-payout on rain, heat & pollution events</p>
            <p>✓ AI-verified claims in under 60 seconds</p>
            <p>✓ Cancel anytime, no questions asked</p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97] transition-all"
          >
            Activate Policy
          </button>
        </AnimatedCard>
      )}
    </div>
  );
};

export default Onboarding;