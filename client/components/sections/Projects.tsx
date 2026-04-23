"use client";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Agentozy Agency Platform",
    description:
      "A modular, enterprise-grade landing page for an AI automation agency, focused on clean UI architecture and high performance.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    live: "https://example.com",
  },
  {
    title: "Aqua Hai Branding",
    description:
      "End-to-end visual identity design, including business card mockups and brand assets for a local water startup.",
    tags: ["Figma", "UI/UX", "Branding"],
    live: "https://example.com",
  },
  {
    title: "Dev Portfolio",
    description:
      "This portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Fully responsive and accessible.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    live: "https://example.com",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUp(0.1)}
          className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-3"
        >
          What I&apos;ve Built
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(0.2 + i * 0.1)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-emerald-500/40 transition-colors duration-300"
            >
              <div className="w-full h-44 bg-zinc-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
                  Project Preview
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-500 transition-colors duration-200"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;