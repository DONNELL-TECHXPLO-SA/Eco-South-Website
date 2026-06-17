import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Project Gallery — Eco South Partnership",
  description: "A curated selection of spatial plans, GIS visualisations, community engagements, and infrastructure assessments from across South Africa.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
