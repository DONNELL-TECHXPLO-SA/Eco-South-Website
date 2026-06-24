import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStory from "@/assets/Our Story.jpeg";

// Client Logos
import logoHarmony from "@/assets/Harmony_logo.svg";
import logoUmzimvubu from "@/assets/umzimvubu-Logo.png";
import logoAnda from "@/assets/anda-logo1.png";
import logoHda from "@/assets/HDA-Logo-Black.png";
import logoJpc from "@/assets/Joburg Property Company.png";
import logoUmanyano from "@/assets/Umanyano.png";
import logoLesedi from "@/assets/Lesedi.png";
import logoJda from "@/assets/jda.png";
import logoSbd from "@/assets/sbd.png";
import logoMatjhabeng from "@/assets/matjhabeng.png";

export const metadata = {
  title: "About Us — Eco South Partnership",
  description: "Our story, vision, mission and team of town planners, spatial designers, and social facilitators.",
};

const CLIENTS = [
  { img: logoHda, name: "Housing Development Agency (HDA)" },
  { img: logoJpc, name: "Joburg Property Company" },
  { img: logoHarmony, name: "Harmony Gold" },
  { img: logoUmzimvubu, name: "Umzimvubu Local Municipality" },
  { img: logoAnda, name: "Alfred Nzo Development Agency (ANDA)" },
  { img: logoUmanyano, name: "Umanyano" },
  { img: logoLesedi, name: "Lesedi Local Municipality" },
  { img: logoJda, name: "Johannesburg Development Agency (JDA)" },
  { img: logoSbd, name: "SBD" },
  { img: logoMatjhabeng, name: "Matjhabeng Local Municipality" },
];

export default function AboutPage() {
  return (
    <SiteLayout overHero>
      {/* Hero */}
      <section className="relative isolate h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={aboutHero.src}
          alt="Aerial cityscape at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/35 to-ink/75" />
        <div className="container-page relative flex h-full flex-col items-center justify-center pt-24 text-center text-white">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-glow">
            About Eco South Partnership
          </span>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            At the Centre of the <span className="text-primary-glow">Built Environment.</span>
          </h1>
          <div className="mt-7 h-[3px] w-16 rounded-full bg-primary-glow" />
        </div>
      </section>

      {/* Our story */}
      <section className="bg-background">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={aboutStory.src}
                alt="Office window onto city skyline with blueprints on desk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">The Evolution</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Our Story</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Eco South Partnership operates on a unique dual-locality model,
              bridging the high-velocity urban complexity of Sandton with the
              profound environmental heritage of the Eastern Cape.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Founded on the principle that spatial equity and ecological
              integrity are inseparable, we have spent two decades refining a
              practice that treats every blueprint as a contract with the future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-page py-24">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
            <div className="bg-ink p-10 sm:p-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">Our Vision</span>
              <p className="mt-6 text-xl font-semibold leading-relaxed sm:text-2xl text-white/95">
                To be a reliable and strategic think-tank and credible rural and urban partner that influences, lobbies, advises, incubates, researches and implements rural and peri-urban policy developmental programmes in order to change the face of cities, town centres and villages of South Africa.
              </p>
            </div>
            <div className="bg-ink p-10 sm:p-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">Our Mission</span>
              <p className="mt-6 text-xl font-semibold leading-relaxed sm:text-2xl text-white/95">
                To serve as a strategic partner at the centre of the built environment, driving spatial and socio-economic transformation through customised, practical and implementable development solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Organogram Section */}
      <section className="bg-background border-t border-border">
        <div className="container-page py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The Partnership Structure</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Our Specialist Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A multidisciplinary practice structured to bridge high-level spatial vision with practical project implementation.
            </p>
          </div>

          <div className="mt-20 flex flex-col items-center">
            {/* Level 1: Mawethu (Director) */}
            <div className="flex flex-col items-center">
              <div className="group relative rounded-2xl border border-primary/20 bg-card p-6 md:p-8 text-center shadow-soft transition-all duration-300 hover:border-primary hover:shadow-elevated max-w-md">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Leadership
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground">Mawethu Pepu</h3>
                <p className="text-sm font-semibold text-primary mt-1">Director / Principal Professional Planner</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">SACPLAN Registered</p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Oversees all high-level project frameworks, ensuring every spatial intervention is legally robust, ethically grounded, and strategically aligned.
                </p>
              </div>
            </div>

            {/* Vertical connector line (Level 1 -> Level 2) */}
            <div className="h-10 w-px bg-primary/25 md:h-12"></div>

            {/* Level 2: Two Directors Side-by-Side */}
            <div className="relative w-full max-w-4xl">
              {/* Horizontal line for desktop branching (top) */}
              <div className="hidden md:block absolute top-0 left-[calc(25%-8px)] right-[calc(25%-8px)] h-px bg-primary/25"></div>
              
              <div className="grid gap-8 md:grid-cols-2 md:py-8">
                {/* Director 1 (Left branch) */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical branch line for desktop (top) */}
                  <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                  
                  <div className="group w-full max-w-sm rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-soft transition-all duration-300 hover:border-primary hover:shadow-elevated">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Leadership
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-foreground">Luyolo Joja</h3>
                    <p className="text-sm font-semibold text-primary mt-1">Director</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Coordinates strategic community engagement and project synchronization across regional operations.
                    </p>
                  </div>

                  {/* Vertical branch line for desktop (bottom) */}
                  <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                </div>

                {/* Director 2 (Right branch) */}
                <div className="flex flex-col items-center relative mt-8 md:mt-0">
                  {/* Vertical branch line for desktop (top) */}
                  <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                  
                  <div className="group w-full max-w-sm rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-soft transition-all duration-300 hover:border-primary hover:shadow-elevated">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Leadership
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-foreground">Nothemba Pepu</h3>
                    <p className="text-sm font-semibold text-primary mt-1">Director</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Leads participatory stakeholder forums and drives peri-urban social development planning.
                    </p>
                  </div>

                  {/* Vertical branch line for desktop (bottom) */}
                  <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                </div>
              </div>

              {/* Horizontal line for desktop branching (bottom) */}
              <div className="hidden md:block absolute bottom-0 left-[calc(25%-8px)] right-[calc(25%-8px)] h-px bg-primary/25"></div>
            </div>

            {/* Vertical connector line (Level 2 -> Level 3) */}
            <div className="h-10 w-px bg-primary/25 md:h-12"></div>

            {/* Level 3: Two functional areas (Town Planning and Social Facilitation) */}
            <div className="relative w-full max-w-5xl">
              {/* Horizontal line for desktop branching */}
              <div className="hidden md:block absolute top-0 left-[calc(25%-12px)] right-[calc(25%-12px)] h-px bg-primary/25"></div>

              <div className="grid gap-12 md:grid-cols-2 md:pt-8">
                {/* Column 1: Town Planning */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical branch line for desktop */}
                  <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                  
                  <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-soft relative overflow-hidden transition-all duration-300 hover:shadow-elevated">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary border-b border-primary/10 pb-3 mb-6">
                      Town Planning Core
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: "Nelisiwe Ngcobo", role: "Town Planner", details: "Land use management, Policy formulation, and compliance " },
                        { name: "Siyabonga Ncube", role: "Town Planner", details: "GIS mapping, Land Use Management, Policy Formulation and compliance " },
                        { name: "Simphiwe Mnguni", role: "Town Planner", details: "Urban design, Land use management policy formulation, and compliance, Operations management" },
                      ].map((m) => (
                        <div key={m.name} className="group p-4 rounded-xl border border-border/60 bg-background/50 hover:bg-background hover:border-primary/20 transition-all duration-300">
                          <h4 className="font-semibold text-foreground text-sm">{m.name}</h4>
                          <p className="text-[11px] font-medium text-primary mt-0.5">{m.role}</p>
                          <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{m.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Social Facilitation */}
                <div className="flex flex-col items-center relative mt-12 md:mt-0">
                  {/* Vertical branch line for desktop */}
                  <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/25"></div>
                  
                  <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-soft relative overflow-hidden transition-all duration-300 hover:shadow-elevated">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600"></div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 border-b border-emerald-600/10 pb-3 mb-6">
                      Social Facilitation Core
                    </h3>
                    <div className="space-y-4">
                      {[
                        { name: "Zimasa Ncobela", role: "Social Facilitator", details: "Community Engagement & Participatory Forums" },
                        { name: "Ndumiso Pepu", role: "Social Facilitator", details: "Stakeholder Relations & Field Operations" },
                      ].map((m) => (
                        <div key={m.name} className="group p-4 rounded-xl border border-border/60 bg-background/50 hover:bg-background hover:border-emerald-600/20 transition-all duration-300">
                          <h4 className="font-semibold text-foreground text-sm">{m.name}</h4>
                          <p className="text-[11px] font-medium text-emerald-700 mt-0.5">{m.role}</p>
                          <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">{m.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-background border-t border-border">
        <div className="container-page py-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="eyebrow">Trusted Partners</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Our Clients</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We collaborate with leading public agencies, private entities, and municipalities across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="group flex items-center justify-center p-6 h-28 transition-all duration-300"
              >
                <img
                  src={c.img.src}
                  alt={c.name}
                  title={c.name}
                  loading="lazy"
                  className="max-h-18 max-w-[95%] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <h3 className="text-3xl font-bold sm:text-4xl">Work with the partnership.</h3>
              <p className="mt-2 text-white/85">From Sandton to the Eastern Cape — we'd love to hear from you.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
