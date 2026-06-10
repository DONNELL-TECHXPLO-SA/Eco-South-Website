import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Compass,
  Database,
  Leaf,
  MapPin,
  Users,
  Workflow,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import service1 from "@/assets/service-1-spatial.jpg";
import service2 from "@/assets/service-2-gis.jpg";
import service3 from "@/assets/service-3-infra.jpg";
import service4 from "@/assets/service-4-social.jpg";
import service5 from "@/assets/service-5-env.jpg";
import service6 from "@/assets/service-6-rural.jpg";
import service7 from "@/assets/service-7-pm.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eco South Partnership" },
      { name: "description", content: "Seven service pillars: strategic spatial planning, GIS, urban infrastructure, social engineering, environmental stewardship, regional development, and project implementation." },
      { property: "og:title", content: "Our Core Service Pillars — Eco South Partnership" },
      { property: "og:description", content: "Expert consultancy integrating technical rigor with environmental stewardship." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Compass,
    image: service1,
    title: "Strategic Spatial Planning",
    items: [
      "Metropolitan and Regional Spatial Development Frameworks (MSDF/RSDF)",
      "Urban Design and Precision Master Planning",
      "Precinct Plans and Local Area Development Strategies",
    ],
  },
  {
    icon: Database,
    image: service2,
    title: "GIS & Spatial Data Analysis",
    items: [
      "Advanced Geospatial Modelling and Data Visualisation",
      "Land-Use Management Systems and Audits",
      "Infrastructure Asset Mapping and Condition Reporting",
    ],
  },
  {
    icon: Building2,
    image: service3,
    title: "Urban Infrastructure & Mobility",
    items: [
      "Bulk Services and Engineering Coordination",
      "Transit-Oriented Development and Mobility Corridors",
      "Public Realm and Streetscape Design",
    ],
  },
  {
    icon: Users,
    image: service4,
    title: "Social Engineering & Engagement",
    items: [
      "Community Participation and Co-design",
      "Equity Diagnostics and Stakeholder Facilitation",
      "Township Empowerment Programmes",
    ],
  },
  {
    icon: Leaf,
    image: service5,
    title: "Environmental Stewardship",
    items: [
      "Ecological Integrity Assessments",
      "Climate Resilience & Adaptation Planning",
      "Restorative Urbanism Strategy",
    ],
  },
  {
    icon: MapPin,
    image: service6,
    title: "Regional & Rural Development",
    items: [
      "Township Revitalisation Plans",
      "Rural Node Development and Tenure Studies",
      "Dual-Locality Coordination (Sandton + Eastern Cape)",
    ],
  },
  {
    icon: Workflow,
    image: service7,
    title: "Project Management & Implementation",
    items: [
      "Statutory Approvals and Compliance",
      "Multi-disciplinary Team Coordination",
      "Monitoring, Evaluation and Reporting",
    ],
  },
];

function ServicesPage() {
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
            Our Core Service Pillars
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Expert consultancy integrating technical rigor with environmental
            stewardship. We navigate complex urban and rural landscapes through
            a framework of sustainable excellence.
          </p>
        </div>
      </section>

      {/* Service stack */}
      <section className="bg-background">
        <div className="container-page py-20">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="grid gap-8 bg-card p-8 sm:p-10 lg:grid-cols-[120px_1fr_1.4fr] lg:gap-12"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-6">
                  <span className="font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{s.title}</h2>
                </div>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              to="/contact"
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
