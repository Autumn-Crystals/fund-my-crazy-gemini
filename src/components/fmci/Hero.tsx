import { ArrowRight, ArrowDown, Calendar, Clock, Video, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL, EVENT } from "@/lib/fmci";
import heroCity from "@/assets/hero-city.png";

const FACTS = [
  { icon: Calendar, label: EVENT.date },
  { icon: Clock, label: "7:00 PM ONWARDS" },
  { icon: Video, label: EVENT.platform },
  { icon: IndianRupee, label: "REGISTRATION FEE: ₹50" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient pb-24 pt-28 text-primary-foreground sm:pb-32 sm:pt-32 lg:rounded-b-[4rem]"
    >
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-accent/25 blur-3xl animate-pulse-ring"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8">
        <div className="animate-rise-in text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] ring-1 ring-primary-foreground/25">
            A Google Gemini Student Initiative
          </span>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,9vw,5.6rem)] font-bold leading-[0.92]">
            <span className="block text-accent drop-shadow-[0_8px_0_oklch(0.62_0.16_66)]">FUND MY</span>
            <span className="block text-accent drop-shadow-[0_8px_0_oklch(0.62_0.16_66)]">
              CRAZY IDEA
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-snug text-primary-foreground/95 sm:text-xl lg:mx-0">
            Got a wild idea hiding behind your ordinary identity? It's time to unleash your superpower.
          </p>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/75 lg:mx-0">
            Pick your wildest idea. Pitch it in 60 seconds. Build it with Google Gemini. And get a
            chance to win BIG.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button asChild variant="hero" size="xl">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                REGISTER NOW <ArrowRight className="arrow size-5" />
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#how-it-works">
                SEE HOW IT WORKS <ArrowDown className="size-5" />
              </a>
            </Button>
          </div>

          <ul className="mt-9 grid grid-cols-2 gap-2.5 sm:gap-3 lg:max-w-xl">
            {FACTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-2xl bg-primary-foreground/10 px-3.5 py-3 text-left text-xs font-bold uppercase tracking-wide ring-1 ring-primary-foreground/15 sm:text-sm"
              >
                <Icon className="size-4 shrink-0 text-accent" />
                <span className="leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise-in [animation-delay:150ms]">
          <div className="animate-float-soft overflow-hidden rounded-[2.5rem] ring-4 ring-primary-foreground/25 shadow-lift">
            <img
              src={heroCity}
              alt="Illustration of a futuristic student-imagined city with monorails, domes and flying pods"
              width={1600}
              height={1008}
              className="w-full"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rotate-[-4deg] rounded-2xl bg-accent px-5 py-3 text-accent-foreground shadow-lift sm:left-8">
            <p className="font-display text-2xl font-bold leading-none">₹1 Crore*</p>
            <p className="text-[11px] font-bold uppercase tracking-widest">National prize pool</p>
          </div>
        </div>
      </div>
    </section>
  );
}
