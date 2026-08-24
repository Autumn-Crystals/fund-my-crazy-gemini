import { Trophy, Rocket, Star } from "lucide-react";
import { Reveal, Eyebrow } from "./Section";
import { useInView, useCountUp } from "@/hooks/use-reveal";

const TIERS = [
  { tier: "TIER 1 — TOP 3", people: "3 Participants", amount: "₹20,00,000", each: "each" },
  { tier: "TIER 2 — NEXT 4", people: "4 Participants", amount: "₹7,00,000", each: "each" },
  { tier: "TIER 3 — LAST 3", people: "3 Participants", amount: "₹4,00,000", each: "each" },
];

function TotalCounter() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const value = useCountUp(10000000, inView, 1800);
  return (
    <div ref={ref} className="text-center">
      <p className="text-sm font-extrabold uppercase tracking-[0.35em] text-accent-foreground/70">
        Total
      </p>
      <p className="font-display text-[clamp(2.6rem,11vw,8rem)] font-bold leading-[0.9] tabular-nums text-accent-foreground">
        ₹{value.toLocaleString("en-IN")}
      </p>
    </div>
  );
}

export function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>National prize pool</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.4rem,8vw,6rem)] font-bold leading-[0.9]">
            10 STUDENTS. <span className="text-primary">₹1 CRORE.</span>
          </h2>
          <p className="mt-5 text-lg font-semibold text-muted-foreground">
            For the ones who see what could be.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.tier} delay={i * 100}>
              <article className="h-full rounded-[2rem] border-2 border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-lift">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                  {t.tier}
                </p>
                <p className="mt-3 text-sm font-semibold text-muted-foreground">{t.people}</p>
                <p className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-none">
                  {t.amount}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  {t.each}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-accent-gradient px-6 py-12 shadow-lift sm:py-16">
            <TotalCounter />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-4 rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-soft">
              <Rocket className="mt-1 size-8 shrink-0 text-accent" />
              <div>
                <h3 className="font-display text-2xl font-bold">TOP 50 PARTICIPANTS</h3>
                <p className="mt-2 text-primary-foreground/80">
                  Get the opportunity to build and develop your idea with Google Gemini.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full items-start gap-4 rounded-[2rem] border-2 border-border bg-card p-8 shadow-soft">
              <Star className="mt-1 size-8 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl font-bold">NATIONAL WINNER</h3>
                <p className="mt-2 text-muted-foreground">
                  Get the opportunity to take your idea to the next level.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const CAMPUS = [
  {
    medal: "🥇",
    place: "1ST PLACE",
    amount: "₹5,000",
    sub: "E-VOUCHER",
    extra: "+ a chance to compete for a Google Pixel Phone",
    featured: true,
  },
  { medal: "🥈", place: "2ND PLACE", amount: "₹2,000", sub: "E-VOUCHER", extra: "", featured: false },
  { medal: "🥉", place: "3RD PLACE", amount: "₹1,000", sub: "E-VOUCHER", extra: "", featured: false },
];

export function CampusPrizes() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Campus prizes</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[0.96]">
            AND YES… <span className="text-primary">YOUR CAMPUS HAS PRIZES TOO.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CAMPUS.map((c, i) => (
            <Reveal key={c.place} delay={i * 110}>
              <article
                className={`h-full rounded-[2rem] p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${
                  c.featured
                    ? "bg-accent-gradient text-accent-foreground md:-mt-4 md:pb-12"
                    : "border-2 border-border bg-card"
                }`}
              >
                <span className="text-5xl" aria-hidden>
                  {c.medal}
                </span>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.25em] opacity-80">
                  {c.place}
                </p>
                <p className="mt-3 font-display text-[clamp(2.2rem,7vw,3.5rem)] font-bold leading-none">
                  {c.amount}
                </p>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.25em]">{c.sub}</p>
                {c.extra && <p className="mt-4 text-sm font-semibold leading-snug">{c.extra}</p>}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-2xl bg-card px-5 py-4 text-center text-sm font-semibold text-muted-foreground shadow-soft">
            <Trophy className="size-4 shrink-0 text-primary" />
            Campus prizes are separate from the national ₹1 crore prize pool.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
