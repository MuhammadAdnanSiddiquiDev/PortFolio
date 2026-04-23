"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const text = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 100); // speed control

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex h-[90vh] justify-center z-10 items-center">
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl text-emerald-500 font-bold"
        >
          Muhammad Adnan Siddiqui
        </motion.h3>
        <motion.span
          className="text-2xl font-semibold text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.span>

        <div className="mt-8">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            animate={{ opacity: 1, y: 0 }}
            className=" cursor-pointer bg-emerald-600 text-white py-2 px-4 rounded-full hover:bg-emerald-700  transition-colors"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
