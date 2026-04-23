"use client";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Founder & Lead Developer",
    company: "Agentozy (AI Automation Agency)",
    period: "2025 – Present",
    description:
      "Developing modular, enterprise-grade landing pages and AI service integrations to help businesses automate workflows using modern web technologies.",
  },
  {
    role: "Computer Educator",
    company: "Panini International School",
    period: "2026",
    description:
      "Prepared comprehensive technical curriculums and delivered highly engaging demo classes, bridging the gap between complex software concepts and fundamental learning.",
  },
  {
    role: "Freelance Brand & Web Designer",
    company: "Aqua Hai",
    period: "2025 – 2026",
    description:
      "Spearheaded the visual identity for a new local water brand, including conceptualizing brand names, designing mockups, and delivering print-ready business assets.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          {...fadeUp(0.1)}
          className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-3"
        >
          My Journey
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.2 + i * 0.15)}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.75 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-zinc-950" />

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-500 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-zinc-500 text-sm bg-zinc-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;