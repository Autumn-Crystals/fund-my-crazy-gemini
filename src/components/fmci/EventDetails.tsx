import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT, REGISTER_URL } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";

const ITEMS = [
  { icon: "📅", label: "Date", value: EVENT.date },
  { icon: "⏰", label: "Time", value: EVENT.time },
  { icon: "💻", label: "Platform", value: EVENT.platform },
  { icon: "💳", label: "Registration", value: "₹50" },
];

export function EventDetails() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28 lg:rounded-[4rem]">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Save the date</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[0.92] text-accent">
            SAVE THE DATE
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={i * 90}>
              <div className="h-full rounded-3xl bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/20 transition-transform duration-300 hover:-translate-y-1.5">
                <span className="text-3xl" aria-hidden>
                  {it.icon}
                </span>
                <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary-foreground/60">
                  {it.label}
                </p>
                <p className="mt-1.5 font-display text-xl font-bold leading-tight">{it.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span className="rounded-full bg-accent px-6 py-2.5 font-display text-lg font-bold text-accent-foreground">
              GID: {EVENT.gid}
            </span>
            <Button asChild variant="heroGhost" size="pill">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                REGISTER NOW <ArrowRight className="arrow size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
