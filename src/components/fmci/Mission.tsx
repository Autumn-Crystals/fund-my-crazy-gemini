import { Reveal, Eyebrow } from "./Section";

const STEPS = [
  { n: "01", t: "PICK", d: "Choose one of the six categories." },
  { n: "02", t: "THINK CRAZY", d: "Come up with an idea that reimagines the way your city works." },
  { n: "03", t: "PITCH", d: "Explain your idea in just 60 seconds." },
  {
    n: "04",
    t: "BUILD WITH GEMINI",
    d: "Use Google Gemini to brainstorm, visualize and bring your concept to life.",
  },
  { n: "05", t: "SUBMIT", d: "Complete the registration and submission process." },
];

export function Mission() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Your mission</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[0.92]">
            60 SECONDS.
            <br />
            ONE CRAZY IDEA.
            <br />
            <span className="text-primary">MAKE US BELIEVE.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="group card-surface h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="inline-grid size-14 place-items-center rounded-2xl bg-accent font-display text-2xl font-bold text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-primary px-6 py-10 text-center text-primary-foreground sm:py-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary-foreground/70">
              You get exactly
            </p>
            <p className="font-display text-[clamp(4rem,18vw,11rem)] font-bold leading-[0.85] text-accent">
              60
            </p>
            <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">
              Seconds
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
