"use client";
import { motion } from "motion/react"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <>
      {/* NAVBAR */}
      {/* FIX: Removed 'isolate' which causes touch event bugs on mobile Safari */}
      <nav className="fixed top-0 left-0 w-full h-[10vh] px-6 flex items-center justify-between bg-black text-white z-[90000]">
        
        {/* Logo */}
        <h3 className="font-semibold text-lg relative z-[90001]">
          <span className="text-emerald-500 font-bold">M</span>
          AdnanSiddiqui
          <span className="text-emerald-500 font-bold">.dev</span>
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 relative z-[90001]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Icon */}
        {/* FIX: Added 'relative', 'pointer-events-auto', and a specific higher z-index to the button itself */}
        <button
          type="button"
          className="md:hidden relative z-[90005] p-3 -mr-3 cursor-pointer pointer-events-auto touch-manipulation"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          {menu ? <X  size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menu && (
        <div className="fixed top-[10vh] left-0 w-full bg-black text-white z-[89999] shadow-2xl border-t border-zinc-800 pointer-events-auto">
          <ul className="flex flex-col items-center py-6">
            <li className="w-full">
              <Link href="/" onClick={closeMenu} className="block w-full py-5 text-center text-lg active:bg-zinc-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="w-full">
                
              <Link href="/about" onClick={closeMenu} className="block w-full py-5 text-center text-lg active:bg-zinc-900 transition-colors">
                About
              </Link>
            </li>
            <li className="w-full">
              <Link href="/projects" onClick={closeMenu} className="block w-full py-5 text-center text-lg active:bg-zinc-900 transition-colors">
                Projects
              </Link>
            </li>
            <li className="w-full">
              <Link href="/contact" onClick={closeMenu} className="block w-full py-5 text-center text-lg active:bg-zinc-900 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;