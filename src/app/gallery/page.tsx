"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import img0865 from "@/assets/IMG_0865.jpeg";
import img0889 from "@/assets/IMG_0889.jpeg";
import img1041 from "@/assets/IMG_1041.jpeg";
import img5399 from "@/assets/IMG_5399.jpg";
import img6363 from "@/assets/IMG_6363.jpeg";
import img6680 from "@/assets/IMG_6680.jpeg";
import img6767 from "@/assets/IMG_6767.jpeg";
import img6828 from "@/assets/IMG_6828.jpeg";
import img7081 from "@/assets/IMG_7081.jpeg";

const PROJECTS = [
  { img: img0865.src, category: "Spatial Planning", title: "Strategic Spatial Framework", location: "Sandton District, GP", year: "2025" },
  { img: img0889.src, category: "GIS & Data", title: "Advanced GIS Mapping", location: "Eastern Cape Hub", year: "2025" },
  { img: img1041.src, category: "Community", title: "Social Facilitation Engagement", location: "Mthatha Region, EC", year: "2024" },
  { img: img5399.src, category: "Infrastructure", title: "Sub-Surface Mapping Survey", location: "Nelson Mandela Bay, EC", year: "2024" },
  { img: img6363.src, category: "Spatial Planning", title: "Urban Regeneration Plan", location: "East London CBD, EC", year: "2025" },
  { img: img6680.src, category: "Rural Development", title: "Rural Spatial Development", location: "Amadiba Coast, EC", year: "2024" },
  { img: img6767.src, category: "GIS & Data", title: "GIS Spatial Data Analytics", location: "Gauteng Region", year: "2024" },
  { img: img6828.src, category: "Community", title: "Participatory Stakeholder Forum", location: "Buffalo City, EC", year: "2023" },
  { img: img7081.src, category: "Transport", title: "Integrated Transport Corridor", location: "Johannesburg Metro, GP", year: "2024" },
];

export default function GalleryPage() {
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
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background">
        <div className="container-page pb-24">
          <div className="grid auto-rows-[280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => {
              const tall = i % 5 === 0 || i % 5 === 3;
              return (
                <article
                  key={p.title + i}
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
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

