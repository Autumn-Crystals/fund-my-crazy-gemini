import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT, REGISTER_URL } from "@/lib/fmci";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground py-14 text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Sparkles className="size-5" />
            </span>
            <p className="font-display text-2xl font-bold">FUND MY CRAZY IDEA</p>
          </div>
          <p className="mt-4 text-sm font-semibold text-background/70">
            Google Student Ambassador / Gemini
          </p>
          <p className="mt-1 text-sm font-semibold text-background/70">GID: {EVENT.gid}</p>
          <p className="mt-1 text-sm font-semibold text-background/70">
            {EVENT.date} · {EVENT.time} · {EVENT.platform}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <Button asChild variant="hero" size="xl">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              REGISTER NOW <ArrowRight className="arrow size-5" />
            </a>
          </Button>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-background/60">
            Registration fee: {EVENT.fee}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-background/15 px-4 pt-6 text-xs text-background/50 sm:px-6 lg:px-8">
        © 2026 Fund My Crazy Idea — a campus edition of the Google Gemini student innovation
        challenge.
      </div>
    </footer>
  );
}
