"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import spatial1 from "@/assets/gallery-spatial-1.jpg";
import spatial2 from "@/assets/gallery-spatial-2.jpg";
import gis1 from "@/assets/gallery-gis-1.jpg";
import community1 from "@/assets/gallery-community-1.jpg";
import infra1 from "@/assets/gallery-infra-1.jpg";
import infra2 from "@/assets/gallery-infra-2.jpg";
import transport1 from "@/assets/gallery-transport-1.jpg";

type Category = "Spatial Planning" | "GIS & Data" | "Community" | "Transport" | "Infrastructure";

const PROJECTS: Array<{
  img: string;
  category: Category;
  title: string;
  location: string;
  year: string;
}> = [
  { img: spatial1.src, category: "Spatial Planning", title: "Metropolitan Development Framework", location: "Sandton North", year: "2025" },
  { img: gis1.src, category: "GIS & Data", title: "Land-Use Heatmap Visualisation", location: "Gauteng", year: "2025" },
  { img: community1.src, category: "Community", title: "Participatory Planning Workshop", location: "Rural Node, EC", year: "2024" },
  { img: spatial2.src, category: "Spatial Planning", title: "Wetland-Edge Residential Plan", location: "Eastern Cape", year: "2024" },
  { img: infra2.src, category: "Infrastructure", title: "Bulk Services Cross-Section Study", location: "Port Elizabeth", year: "2024" },
  { img: infra1.src, category: "Infrastructure", title: "Heritage Precinct Revitalisation", location: "East London", year: "2023" },
  { img: transport1.src, category: "Transport", title: "BRT Corridor Streetscape", location: "Sandton CBD", year: "2024" },
];

const TABS: Array<"All" | Category> = ["All", "Spatial Planning", "GIS & Data", "Community", "Transport", "Infrastructure"];

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => active === "All" || p.category === active).filter((p) =>
      [p.title, p.location, p.category].join(" ").toLowerCase().includes(q.toLowerCase()),
    );
  }, [active, q]);

  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="container-page pt-20 pb-10">
          <span className="eyebrow">Our Work</span>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl">Project Gallery</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A curated selection of spatial plans, GIS visualisations, community
            engagements, and infrastructure assessments from across South Africa.
          </p>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => {
                const isActive = active === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className={[
                      "rounded-full px-5 py-2.5 text-sm font-medium transition",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-secondary text-foreground/75 hover:bg-accent hover:text-primary",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none ring-primary/40 transition focus:ring-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masonry-ish grid */}
      <section className="bg-background">
        <div className="container-page pb-24">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground">
              No projects match — try a different filter.
            </div>
          ) : (
            <div className="grid auto-rows-[280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => {
                const tall = i % 5 === 0 || i % 5 === 3;
                return (
                  <article
                    key={p.title}
                    className={[
                      "group relative overflow-hidden rounded-2xl bg-ink",
                      tall ? "row-span-2" : "",
                    ].join(" ")}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-6 text-white">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-glow">
                        {p.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">{p.title}</h3>
                      <p className="mt-1 text-xs text-white/70">
                        {p.location} · {p.year}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
