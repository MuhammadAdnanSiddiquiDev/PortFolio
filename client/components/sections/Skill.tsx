"use client";
import { motion } from "motion/react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Prisma", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma", "VS Code"] },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0.1)}
          className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-3"
        >
          What I Work With
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              {...fadeUp(0.2 + i * 0.1)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="text-emerald-500 font-semibold text-sm tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-zinc-800 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 border border-zinc-700 rounded-full text-sm text-zinc-300 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;