"use client";

import { useState, type FormEvent } from "react";
import { Clock, Leaf, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if configuration is missing or holds default placeholders
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id_here" ||
      templateId === "your_template_id_here" ||
      publicKey === "your_public_key_here" ||
      serviceId.trim() === "" ||
      templateId.trim() === "" ||
      publicKey.trim() === ""
    ) {
      console.warn(
        "EmailJS is not fully configured yet. Please update your .env file with service, template, and public key IDs."
      );
      toast.info("Demo Mode: Form works, but EmailJS keys are not yet configured.", {
        description: "Please set your template, service, and public keys in .env when ready.",
        duration: 8000,
      });

      // Simulate successful submission for presentation/testing purposes
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
      setSending(false);
      setTimeout(() => setSent(false), 5000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(() => {
        toast.success("Message sent successfully!", {
          description: "Thank you for getting in touch. We will respond shortly.",
        });
        setSent(true);
        (e.currentTarget as HTMLFormElement).reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error("Failed to send message via EmailJS:", error);
        toast.error("Failed to send message.", {
          description: "Please check your network connection or try again later.",
        });
      })
      .finally(() => {
        setSending(false);
      });
  }

  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="container-page py-20 text-center">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            Let's build the next chapter <span className="text-primary">— together.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Tell us about your project, locality and timeline. We respond within two working days.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page grid gap-8 pb-24 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className={fieldCls}
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className={fieldCls}
                  />
                </Field>
              </div>
              <Field label="Organisation">
                <input
                  name="org"
                  placeholder="Municipality, firm, or community body"
                  autoComplete="organization"
                  className={fieldCls}
                />
              </Field>
              <Field label="How can we help?">
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, locality, and timeline…"
                  className={`${fieldCls} resize-none`}
                />
              </Field>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-glow disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
              {sent && (
                <p className="rounded-xl bg-accent px-4 py-3 text-sm font-medium text-primary">
                  Thanks — we'll be in touch shortly.
                </p>
              )}
            </form>
          </div>

          {/* Info card */}
          <aside className="relative overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground sm:p-10">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--primary-glow)_60%,transparent),transparent_60%)]" />
            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary-glow">
                <Leaf className="h-5 w-5" />
              </span>
              <h2 className="mt-6 text-3xl font-bold">Eco South Partnership</h2>
              <p className="mt-1 text-sm text-ink-foreground/65">Reg: 2014/08434/08</p>

              <ul className="mt-10 space-y-7">
                <Info icon={MapPin} label="Locations">
                  138 West Street, Workshop 17, Sandton, 2031<br/><br/>
                  ERF 183, Ntlakwe Village, Amanikwe Location, Bizana, 4800
                </Info>
                <Info icon={Phone} label="Cell">067 055 4646</Info>
                <Info icon={Mail} label="Email">mawethup@ecosouth.net.za</Info>
                <Info icon={Clock} label="Hours">Mon – Fri · 08:00 – 17:00</Info>
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-xs text-ink-foreground/70">
                <div>
                  <p className="font-semibold text-white">Sandton</p>
                  <p>Johannesburg</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Bizana</p>
                  <p>Eastern Cape</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

const fieldCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Info({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/8 text-primary-glow">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-foreground/55">{label}</p>
        <p className="mt-1 text-base">{children}</p>
      </div>
    </li>
  );
}
