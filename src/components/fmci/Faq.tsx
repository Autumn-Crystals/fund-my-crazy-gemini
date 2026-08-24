import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[0.95]">
            QUESTIONS? <span className="text-primary">ANSWERED.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
