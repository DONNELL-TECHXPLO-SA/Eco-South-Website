import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-new.png";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink text-ink-foreground">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary-glow to-transparent" />
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.src} alt="Eco South Partnership" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
            Balancing architectural precision with environmental stewardship.
            A consultancy dedicated to high-stakes urban development and
            ecological integrity across Southern Africa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink-foreground/60">
            <span className="rounded-full border border-white/15 px-3 py-1.5">SACPLAN Registered</span>
            <span className="rounded-full border border-white/15 px-3 py-1.5">SAGI Member</span>
            <span className="rounded-full border border-white/15 px-3 py-1.5">CESA Affiliate</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="text-ink-foreground/80 transition hover:text-primary-glow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Offices</h4>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-primary-glow flex-shrink-0" />
              <div>
                <span>138 West Street, Workshop 17, Sandton, 2031</span>
                <span className="block mt-2">ERF 183, Ntlakwe Village, Amanikwe Location, Bizana, 4800</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary-glow" />
              <span>067 055 4646</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary-glow" />
              <span>mawethup@ecosouth.net.za</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Eco South Partnership. All rights reserved.  Developed by <a href="https://www.techxplo.co.za" className='text-primary-glow hover:underline font-bold'>TechXplo</a></p>
          <p className="uppercase tracking-[0.18em]">Sandton · Eastern Cape · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
