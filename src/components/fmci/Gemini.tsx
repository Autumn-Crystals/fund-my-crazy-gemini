import { Lightbulb, Sparkles, Image as ImageIcon, Mic, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Section";

const FLOW = [
  { icon: Lightbulb, label: "IDEA" },
  { icon: Sparkles, label: "GEMINI" },
  { icon: ImageIcon, label: "VISUAL" },
  { icon: Mic, label: "PITCH" },
];

export function Gemini() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28 lg:rounded-[4rem]">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Built with Gemini</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2rem,6vw,4.25rem)] font-bold leading-[0.95]">
            YOUR IDEA. <span className="text-accent">GEMINI.</span> A WHOLE NEW CITY.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Use Google Gemini to brainstorm your idea and visualize what your future concept could
            look like. Gemini isn't an optional add-on here — it's part of the challenge, and 20% of
            your score.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {FLOW.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-36 rounded-3xl bg-primary-foreground/10 px-4 py-6 ring-1 ring-primary-foreground/20 transition-transform duration-300 hover:-translate-y-1.5">
                  <Icon className="mx-auto size-7 text-accent" />
                  <p className="mt-3 font-display text-base font-bold tracking-wide">{label}</p>
                </div>
                {i < FLOW.length - 1 && (
                  <ArrowRight className="hidden size-6 text-accent sm:block" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
