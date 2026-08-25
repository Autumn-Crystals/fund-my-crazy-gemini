import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/fmci";
import { cn } from "@/lib/utils";

export function StickyRegister() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 flex justify-center transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <Button asChild variant="hero" size="pill" className="w-full shadow-lift sm:w-auto">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
          REGISTER NOW — ₹50 <ArrowRight className="arrow size-4" />
        </a>
      </Button>
    </div>
  );
}
