import { ArrowRight } from "lucide-react";
import { THEMES, REGISTER_URL } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";
import { Button } from "@/components/ui/button";

export function Themes() {
  return (
    <section id="themes" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Six themes</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[0.96]">
            SIX WAYS TO REIMAGINE YOUR CITY. <span className="text-primary">PICK ONE.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:border-accent hover:shadow-lift">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary-soft transition-transform duration-500 group-hover:scale-150"
                  aria-hidden
                />
                <span className="relative grid size-16 place-items-center rounded-2xl bg-primary text-3xl shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  {t.emoji}
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold leading-tight sm:text-2xl">
                  {t.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <p className="relative mt-3 max-h-0 overflow-hidden text-sm font-semibold leading-relaxed text-primary opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {t.more}
                </p>
                <Button asChild variant="hero" size="pill" className="relative mt-6 h-10 px-5 text-xs">
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                    EXPLORE <ArrowRight className="arrow size-4" />
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
