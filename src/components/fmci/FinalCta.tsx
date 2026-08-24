import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/fmci";
import { Reveal } from "./Section";

export function FinalCta() {
  return (
    <section id="register" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-accent-gradient px-6 py-14 text-center text-accent-foreground shadow-lift sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.2rem,7.5vw,5rem)] font-bold leading-[0.92]">
              READY TO FUND YOUR CRAZY?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-snug opacity-80">
              Your ordinary idea might be someone else's extraordinary future.
            </p>
            <Button
              asChild
              size="xxl"
              className="mt-9 bg-foreground font-extrabold text-background shadow-lift transition-all duration-200 hover:-translate-y-1 hover:bg-foreground/90 [&_.arrow]:transition-transform hover:[&_.arrow]:translate-x-1"
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                REGISTER NOW <ArrowRight className="arrow size-5" />
              </a>
            </Button>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.25em] opacity-75">
              Registration Fee: ₹50
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
