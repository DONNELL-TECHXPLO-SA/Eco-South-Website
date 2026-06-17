import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact — Eco South Partnership",
  description: "Brief us on a municipality, development, or community project. Offices in Sandton and the Eastern Cape.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
