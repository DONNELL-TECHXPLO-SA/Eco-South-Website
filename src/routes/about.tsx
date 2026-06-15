import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStory from "@/assets/Our Story.jpeg";
import teamMawethu from "@/assets/team-mawethu.png";
import teamNelisiwe from "@/assets/team-nelisiwe.png";
import teamSimphiwe from "@/assets/team-simphiwe.png";
import teamSiyabonga from "@/assets/team-siyabonga.png";
import teamNothemba from "@/assets/team-nothemba.png";
import teamZimasa from "@/assets/team-zimasa.png";
import teamLuyolo from "@/assets/team-luyolo.png";
import teamNdumiso from "@/assets/team-ndumiso.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Eco South Partnership" },
      { name: "description", content: "Our story, vision, mission and team of town planners, spatial designers, and social facilitators." },
      { property: "og:title", content: "About Us — Eco South Partnership" },
      { property: "og:description", content: "At the centre of the built environment — our story, vision and specialist leadership." },
      { property: "og:image", content: aboutHero },
      { name: "twitter:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const LEADERSHIP_TEAM = [
  {
    img: teamMawethu,
    name: "Mawethu Pepu",
    role: "Principal Professional Planner",
    tag: "Leadership & Strategic Direction",
    credentials: "SACPLAN Registered",
    bio: "Oversees all high-level project frameworks, ensuring every spatial intervention is legally robust, ethically grounded, and strategically aligned with national and provincial development goals."
  }
];

const PLANNING_TEAM = [
  { img: teamNelisiwe, name: "Nelisiwe Ngcobo", role: "Town Planner", details: "Statutory Applications, Urban Design & Frameworks, Policy Analysis" },
  { img: teamSimphiwe, name: "Simphiwe Mnguni", role: "Town Planner", details: "Statutory Applications, Urban Design & Frameworks, Policy Analysis" },
  { img: teamSiyabonga, name: "Siyabonga Ncube", role: "Town Planner", details: "Statutory Applications, Urban Design & Frameworks, Policy Analysis" }
];

const SOCIAL_TEAM = [
  { img: teamNothemba, name: "Nothemba Pepu", role: "Community & Social Facilitation" },
  { img: teamZimasa, name: "Zimasa Ncobela", role: "Community & Social Facilitation" },
  { img: teamLuyolo, name: "Luyolo Joja", role: "Community & Social Facilitation" },
  { img: teamNdumiso, name: "Ndumiso Pepu", role: "Community & Social Facilitation" }
];

function AboutPage() {
  return (
    <SiteLayout overHero>
      {/* Hero */}
      <section className="relative isolate h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={aboutHero}
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
                src={aboutStory}
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

      {/* Team */}
      <section className="bg-background border-t border-border">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">The Partnership</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Our Specialist Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A multidisciplinary practice combining strategic planning, urban design, and social facilitation.
            </p>
          </div>

          {/* Leadership & Strategic Direction */}
          <div className="mt-16">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary border-b border-primary/20 pb-3 mb-8">
              Leadership & Strategic Direction
            </h3>
            {LEADERSHIP_TEAM.map((m) => (
              <div key={m.name} className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-12 md:p-10 items-center shadow-sm">
                <div className="md:col-span-4 overflow-hidden rounded-2xl aspect-[4/5] shadow-elevated">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {m.tag}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {m.credentials}
                    </span>
                  </div>
                  <h4 className="mt-4 text-3xl font-bold text-foreground">{m.name}</h4>
                  <p className="text-lg font-medium text-primary mt-1">{m.role}</p>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spatial Planning & Design Core */}
          <div className="mt-20">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary border-b border-primary/20 pb-3 mb-8">
              Spatial Planning & Design Core
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PLANNING_TEAM.map((m) => (
                <article key={m.name} className="group relative overflow-hidden rounded-3xl bg-ink shadow-md">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="inline-flex rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      {m.role}
                    </span>
                    <h4 className="mt-3 text-xl font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/70 mt-1.5 leading-relaxed">{m.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Social Engineering & Field Operations */}
          <div className="mt-20">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary border-b border-primary/20 pb-3 mb-8">
              Social Engineering & Field Operations
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SOCIAL_TEAM.map((m) => (
                <article key={m.name} className="group relative overflow-hidden rounded-3xl bg-ink shadow-md">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="inline-flex rounded-full bg-primary/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Field Operations
                    </span>
                    <h4 className="mt-3 text-lg font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/75 mt-1">{m.role}</p>
                  </div>
                </article>
              ))}
            </div>
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
              to="/contact"
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
