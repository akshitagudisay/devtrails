import { ShieldCheck, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/policy", label: "Policy" },
  { to: "/claims", label: "Claims" },
  { to: "/admin", label: "Analytics" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-card/80 border-b">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span>TrustRide</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/onboarding"
            className="ml-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-lg hover:opacity-90 active:scale-[0.97] transition-all"
          >
            Get Covered
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 rounded-md hover:bg-muted"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-card animate-slide-down">
          <div className="container py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/onboarding"
              onClick={() => setOpen(false)}
              className="mt-1 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center"
            >
              Get Covered
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;