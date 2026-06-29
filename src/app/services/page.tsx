import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Database,
  Users,
  Briefcase,
  Layers,
  Route,
  FileCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import service1 from "@/assets/service-1-spatial.jpg";
import service2 from "@/assets/service-2-gis.jpg";
import service3 from "@/assets/service-3-infra.jpg";
import service4 from "@/assets/service-4-social.jpeg";
import service6 from "@/assets/service-6-rural.jpg";
import service7 from "@/assets/service-7-pm.jpg";
import serviceTransport from "@/assets/transport.jpeg";

export const metadata = {
  title: "Services — Eco South Partnership",
  description: "Seven service pillars: spatial planning, GIS analytics, development & social facilitation, practice consulting, survey tech & sub-surface mapping, transport planning, and conveyancing support.",
};

const SERVICES = [
  {
    icon: Compass,
    image: service1,
    title: "Strategic Spatial Framework, Town Planning, Urban Design and Architectural Services",
    items: [
      "Statutory Planning & Land Use Management (rezonings, subdivisions, township establishments)",
      "Township Economies & Integration",
      "Urban Regeneration Consulting",
    ],
  },
  {
    icon: Database,
    image: service2,
    title: "Advanced GIS Services & Spatial Data Analytics",
    items: [
      "Spatial Modelling & Site Selection",
      "Mapping & High-End Visualisation",
      "Data Acquisition & Database Management",
    ],
  },
  {
    icon: Users,
    image: service4,
    title: "Development, Social Facilitation & Participatory Creation",
    items: [
      "Social Facility & Infrastructure Planning",
      "Capacity Building",
      "Community Engagement & Conflict Resolution",
    ],
  },
  {
    icon: Briefcase,
    image: service6,
    title: "Economic Development & Practice Consulting",
    items: [
      "Investment Facilitation",
      "Sustainable Local Economies",
      "Market Analysis & Strategy",
    ],
  },
  {
    icon: Layers,
    image: service3,
    title: "Survey Technology, Infrastructure Intelligence & Sub-Surface Mapping",
    items: [
      "Non-intrusive underground infrastructure and geological assessment",
      "Supports land-use applications and development risk mitigation",
    ],
  },
  {
    icon: Route,
    image: serviceTransport,
    title: "Transport Planning",
    items: [
      "Integration, accessibility and economic inclusion",
      "Movement networks that support spatial transformation and local economic development",
    ],
  },
  {
    icon: FileCheck,
    image: service7,
    title: "Conveyancing Support Services",
    items: [
      "Legal land administration and property transfer and registration of title deeds",
      "Facilitating statutory compliance for land-use planning and development approvals",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Page header */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--primary-glow)_50%,transparent),transparent_60%),radial-gradient(circle_at_80%_60%,color-mix(in_oklab,var(--primary)_60%,transparent),transparent_55%)]" />
        <div className="container-page relative py-24 lg:py-32">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">
            — Our Capabilities
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            Our Core Service Service Pillars
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Expert consultancy integrating technical rigor with environmental
            stewardship. We navigate complex urban and rural landscapes through
            a framework of sustainable excellence.
          </p>
        </div>
      </section>

      {/* Service stack — alternating text + image */}
      <section className="bg-background">
        <div className="container-page space-y-24 py-24 lg:space-y-32 lg:py-32">
          {SERVICES.map((s, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={s.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-lg text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-primary/40" />
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                      {s.title}
                    </h2>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85">
                        <span className="mt-1 text-primary">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
                  <div className="overflow-hidden rounded-2xl shadow-elevated">
                    <img
                      src={s.image.src}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 sm:p-12 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Brief us on your next project.</h3>
              <p className="mt-2 text-muted-foreground">
                We work with municipalities, developers and community bodies across South Africa.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
