"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";


const titles = ["Full Stack Developer", "Frontend Developer"];

const TypeWriter = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    if (!deleting && displayed === current) {
      const pause = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <>
      {/* Screen reader only text for accessibility */}
      <span className="sr-only">{titles[titleIndex]}</span>
      
      {/* Visual text hidden from screen readers to prevent noisy readouts */}
      <span className="text-emerald-500" aria-hidden="true">
        {displayed}
        <span className="animate-pulse">|</span>
      </span>
    </>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const }, // Notice 'as const'
});

// Custom X icon (Lucide stopped supporting brand logos, so the library lacks 'X')


const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        {...fadeUp(0.1)}
        className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-4"
      >
        Hey there, I&apos;m
      </motion.p>

      <motion.h1
        {...fadeUp(0.25)}
        className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
      >
        Muhammad Adnan Siddiqui
      </motion.h1>

      <motion.h2
        {...fadeUp(0.4)}
        className="text-xl md:text-3xl font-medium text-zinc-300 mb-6 h-10"
      >
        <TypeWriter />
      </motion.h2>

      <motion.p
        {...fadeUp(0.55)}
        className="max-w-xl text-zinc-400 text-base md:text-lg leading-relaxed mb-10"
      >
        I build fast, accessible, and beautiful web experiences. Passionate
        about clean code, great UI, and turning ideas into production-ready
        products.
      </motion.p>

      <motion.div
        {...fadeUp(0.7)}
        className="flex flex-wrap gap-4 justify-center mb-12"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors duration-200"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-zinc-600 hover:border-emerald-500 hover:text-emerald-500 rounded-full transition-colors duration-200"
        >
          Contact Me
        </Link>
      </motion.div>

    </section>
  );
};

export default Hero;