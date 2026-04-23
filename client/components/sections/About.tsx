"use client";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const About = () => {
  return (
    <section id="about" className="w-full bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0.1)}
          className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-3"
        >
          About Me
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div {...fadeUp(0.3)} className="space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m Muhammad Adnan Siddiqui, a passionate Full Stack Developer
              based in Bhiwandi, Maharashtra. I love crafting clean, performant, and
              user-focused digital experiences.
            </p>
            <p>
              Currently pursuing my BCA at Amity University Online, I specialize in modern web stacks including React, Next.js, and Tailwind CSS. I bring
              ideas to life — from concept to deployment.
            </p>
            <p>
              When I&apos;m not on my MacBook building applications or launching AI automation services, you can usually find me maintaining my discipline at the gym.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.4)}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Modern Web Stacks", value: "React" },
              { label: "Degree Path", value: "BCA" },
              { label: "Focus", value: "Next.js" },
              { label: "Current City", value: "Bhiwandi" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
              >
                <p className="text-2xl font-bold text-emerald-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;