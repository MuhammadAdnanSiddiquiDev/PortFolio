"use client";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[10vh] px-6 flex items-center  justify-around bg-black text-white z-90000">
        <h3 className="font-semibold text-lg relative z-90001">
          <span className="text-emerald-500 font-bold">M</span>
          AdnanSiddiqui
          <span className="text-emerald-500 font-bold">.dev</span>
        </h3>

        <ul className="hidden md:flex gap-8 relative z-90001">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button
          type="button"
          className="md:hidden relative z-90005 p-3 -mr-3 cursor-pointer pointer-events-auto touch-manipulation"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menu ? (
              <motion.span
                key="x"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[10vh] md:hidden left-0 w-full bg-black text-white z-89999 shadow-2xl border-t border-zinc-800 pointer-events-auto"
          >
            <ul className="flex flex-col items-center py-6">
              <li className="w-full">
                <Link href="/" onClick={closeMenu} className="block w-full py-5 text-center text-md active:bg-zinc-900 transition-colors">Home</Link>
              </li>
              <li className="w-full">
                <Link href="/about" onClick={closeMenu} className="block w-full py-5 text-center text-md active:bg-zinc-900 transition-colors">About</Link>
              </li>
              <li className="w-full">
                <Link href="/projects" onClick={closeMenu} className="block w-full py-5 text-center text-md active:bg-zinc-900 transition-colors">Projects</Link>
              </li>
              <li className="w-full">
                <Link href="/contact" onClick={closeMenu} className="block w-full py-5 text-center text-md active:bg-zinc-900 transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;