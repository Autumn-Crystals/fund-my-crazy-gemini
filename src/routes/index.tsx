import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/fmci/Nav";
import { Hero } from "@/components/fmci/Hero";
import { About } from "@/components/fmci/About";
import { Mission } from "@/components/fmci/Mission";
import { Themes } from "@/components/fmci/Themes";
import { Gemini } from "@/components/fmci/Gemini";
import { Prizes, CampusPrizes } from "@/components/fmci/Prizes";
import { Scoring } from "@/components/fmci/Scoring";
import { EventDetails } from "@/components/fmci/EventDetails";
import { FinalCta } from "@/components/fmci/FinalCta";
import { Faq } from "@/components/fmci/Faq";
import { Footer } from "@/components/fmci/Footer";
import { StickyRegister } from "@/components/fmci/StickyRegister";

const TITLE = "Fund My Crazy Idea — Campus Innovation Challenge, 30 Aug 2026";
const DESCRIPTION =
  "Pitch one crazy idea in 60 seconds, build it with Google Gemini and win big. 30 August 2026, 7 PM on Google Meet. Registration ₹50.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Mission />
        <Themes />
        <Gemini />
        <Prizes />
        <CampusPrizes />
        <Scoring />
        <EventDetails />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <StickyRegister />
    </div>
  );
}
