import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header overHero={overHero} />
      <main className={overHero ? "" : "pt-20"}>{children}</main>
      <Footer />
    </div>
  );
}
