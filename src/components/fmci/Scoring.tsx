import { SCORING } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";
import { useInView, useCountUp } from "@/hooks/use-reveal";

function ScoreCard({ pct, title, desc, i }: { pct: number; title: string; desc: string; i: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const value = useCountUp(pct, inView, 1200 + i * 120);

  return (
    <div ref={ref}>
      <article className="group relative h-full overflow-hidden rounded-[2rem] border-2 border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lift">
        <p className="font-display text-[clamp(3rem,9vw,4.5rem)] font-bold leading-none tabular-nums text-primary">
          {value}%
        </p>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-accent-gradient transition-[width] duration-1000 ease-out"
            style={{ width: `${value * 3.2}%` }}
          />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </article>
    </div>
  );
}

export function Scoring() {
  return (
    <section id="scoring" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Scoring criteria</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[0.95]">
            FIVE THINGS. <span className="text-primary">THAT'S ALL IT TAKES.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The strongest ideas are shortlisted based on five things.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCORING.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <ScoreCard {...s} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
