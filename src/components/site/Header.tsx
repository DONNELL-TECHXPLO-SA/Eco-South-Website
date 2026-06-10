import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-new.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Eco South Partnership" className="h-9 w-auto" />
          <span
            className={[
              "hidden text-[15px] font-bold tracking-tight sm:inline",
              transparent ? "text-white" : "text-foreground",
            ].join(" ")}
          >
            Eco South <span className="text-primary-glow">Partnership</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/75 hover:text-foreground",
              ].join(" ")}
              activeProps={{
                className: transparent
                  ? "rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/15"
                  : "rounded-full px-4 py-2 text-sm font-semibold text-primary bg-accent",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-glow md:inline-flex"
          >
            Get In Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              transparent
                ? "bg-white/10 text-white"
                : "bg-secondary text-foreground",
            ].join(" ")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/80 hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-md px-2 py-3 text-base font-semibold text-primary bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
