import { Reveal, Eyebrow } from "./Section";
import ideaStudents from "@/assets/idea-students.png";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow>The idea</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-bold leading-[0.98]">
            WHAT IS FUND MY <span className="text-primary">CRAZY IDEA?</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A student-focused innovation challenge. Take one unconventional idea, rethink an aspect of
            your city or community, visualize it with Google Gemini — and pitch it.
          </p>
          <div className="mt-7 rounded-3xl border-l-8 border-accent bg-accent-soft p-6 sm:p-7">
            <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
              Your idea doesn't have to sound normal.
              <br />
              It has to make people believe it could change something.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[2.5rem] bg-primary-soft p-6 shadow-soft sm:p-10">
            <img
              src={ideaStudents}
              alt="Students brainstorming crazy ideas around a glowing spark"
              loading="lazy"
              width={1200}
              height={912}
              className="w-full animate-float-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
