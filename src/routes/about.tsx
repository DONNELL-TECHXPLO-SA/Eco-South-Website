import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStory from "@/assets/about-story.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Eco South Partnership" },
      { name: "description", content: "Two decades refining a practice that treats every blueprint as a contract with the future. Our story, vision, mission and team." },
      { property: "og:title", content: "About Us — Eco South Partnership" },
      { property: "og:description", content: "At the centre of the built environment — our story, vision and specialist leadership." },
      { property: "og:image", content: aboutHero },
      { name: "twitter:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { img: team1, name: "Dr. Elias Thorne", role: "Managing Partner", tag: "Leadership" },
  { img: team2, name: "Sarah Mbeki", role: "Lead Urbanist", tag: "Spatial Planning" },
  { img: team3, name: "Marcus Chen", role: "Systems Director", tag: "Technical Data" },
  { img: team4, name: "Noni Gwala", role: "Community Principal", tag: "Social Engineering" },
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
              <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
                To define the global gold standard for restorative urbanism —
                where built structures act as regenerative anchors for both
                human communities and natural ecosystems.
              </p>
            </div>
            <div className="bg-ink p-10 sm:p-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">Our Mission</span>
              <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
                To provide technically rigorous consultancy that synthesises
                data-driven spatial planning with social engineering to create
                resilient, equitable, and sustainable habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background">
        <div className="container-page py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">The Partnership</span>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Specialist Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A multidisciplinary team uniting urban design, geospatial science,
              technical engineering and community practice.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <article key={m.name} className="group relative overflow-hidden rounded-3xl bg-ink">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-flex rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {m.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-white/75">{m.role}</p>
                </div>
              </article>
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
