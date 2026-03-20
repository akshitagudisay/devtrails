import { useState } from "react";
import { CloudRain, TrendingDown, CheckCircle2, Loader2, Fingerprint, Zap } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

type ClaimStep = "idle" | "detecting" | "verifying" | "trust" | "credited";

const Claims = () => {
  const [step, setStep] = useState<ClaimStep>("idle");

  const simulate = () => {
    setStep("detecting");
    setTimeout(() => setStep("verifying"), 1400);
    setTimeout(() => setStep("trust"), 2800);
    setTimeout(() => setStep("credited"), 4000);
  };

  const reset = () => setStep("idle");

  const isAfter = (target: ClaimStep) => {
    const order: ClaimStep[] = ["idle", "detecting", "verifying", "trust", "credited"];
    return order.indexOf(step) > order.indexOf(target);
  };

  return (
    <div className="min-h-screen container max-w-md mx-auto py-10 flex flex-col gap-6 items-center">
      <AnimatedCard className="text-center">
        <h1 className="text-2xl font-bold">Claim Simulation</h1>
        <p className="text-muted-foreground text-sm mt-1">See how automatic parametric payouts work</p>
      </AnimatedCard>

      {step === "idle" && (
        <AnimatedCard delay={80} className="w-full flex flex-col items-center gap-6 pt-4">
          <div className="w-20 h-20 rounded-full bg-info/10 flex items-center justify-center">
            <CloudRain className="w-10 h-10 text-info" />
          </div>
          <button
            onClick={simulate}
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.97] transition-all"
          >
            Trigger Parametric Event (Rainfall &gt; Threshold)
          </button>
          <p className="text-xs text-muted-foreground text-center">
            This simulates a heavy rainfall event crossing the parametric threshold, triggering an automatic payout.
          </p>
        </AnimatedCard>
      )}

      {step !== "idle" && (
        <div className="w-full flex flex-col gap-4">
          {/* Step 1: Detection */}
          <div
            className={`rounded-2xl border p-4 flex items-center gap-3 transition-all duration-500 ${
              step === "detecting" ? "bg-info/5 border-info/30 animate-fade-up" : "bg-card"
            }`}
          >
            <CloudRain className="w-5 h-5 shrink-0 text-info" />
            <div className="flex-1">
              <p className="text-sm font-medium">Heavy rainfall detected</p>
              <p className="text-xs text-muted-foreground">Mumbai — 48mm in 2 hours (threshold: 30mm)</p>
            </div>
            {step === "detecting" && <Loader2 className="w-4 h-4 animate-spin text-info" />}
            {isAfter("detecting") && <CheckCircle2 className="w-4 h-4 text-success" />}
          </div>

          {/* Step 2: Income disruption */}
          {(step === "verifying" || isAfter("verifying")) && (
            <div
              className={`rounded-2xl border p-4 flex items-center gap-3 animate-fade-up ${
                step === "verifying" ? "bg-warning/5 border-warning/30" : "bg-card"
              }`}
            >
              <TrendingDown className="w-5 h-5 shrink-0 text-warning" />
              <div className="flex-1">
                <p className="text-sm font-medium">Income disruption verified</p>
                <p className="text-xs text-muted-foreground">Estimated ₹350 below daily average</p>
              </div>
              {step === "verifying" && <Loader2 className="w-4 h-4 animate-spin text-warning" />}
              {isAfter("verifying") && <CheckCircle2 className="w-4 h-4 text-success" />}
            </div>
          )}

          {/* Step 3: Trust validation */}
          {(step === "trust" || isAfter("trust")) && (
            <div
              className={`rounded-2xl border p-4 flex items-center gap-3 animate-fade-up ${
                step === "trust" ? "bg-primary/5 border-primary/30" : "bg-card"
              }`}
            >
              <Fingerprint className="w-5 h-5 shrink-0 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Trust score evaluated</p>
                <p className="text-xs text-muted-foreground">Score: 92/100 — Instant payout eligible</p>
              </div>
              {step === "trust" && <Loader2 className="w-4 h-4 animate-spin text-primary" />}
              {isAfter("trust") && <CheckCircle2 className="w-4 h-4 text-success" />}
            </div>
          )}

          {/* Step 4: Payout */}
          {step === "credited" && (
            <div className="rounded-2xl border-2 border-success/40 bg-success/5 p-5 text-center animate-scale-in">
              <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-success animate-check-pop" />
              </div>
              <p className="text-lg font-bold text-foreground">₹350 credited instantly</p>
              <p className="text-xs text-muted-foreground mt-1">Sent to your linked UPI account — zero clicks required</p>
            </div>
          )}

          {step === "credited" && (
            <button
              onClick={reset}
              className="mt-2 w-full rounded-lg border bg-card text-foreground font-medium py-2.5 text-sm hover:bg-muted active:scale-[0.97] transition-all animate-fade-up"
            >
              Run Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Claims;