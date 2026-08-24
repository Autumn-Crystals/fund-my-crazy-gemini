import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/fmci";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Themes", href: "#themes" },
  { label: "Prizes", href: "#prizes" },
  { label: "Scoring", href: "#scoring" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-xl" : "bg-background/70 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" />
          </span>
          <span className="font-display text-lg font-bold leading-none tracking-tight sm:text-xl">
            FUND MY CRAZY
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="hero"
            size="pill"
            className="hidden h-11 px-6 text-sm sm:inline-flex"
          >
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              REGISTER NOW <ArrowRight className="arrow size-4" />
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button asChild variant="hero" size="pill" className="mt-3 w-full">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              REGISTER NOW <ArrowRight className="arrow size-4" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
