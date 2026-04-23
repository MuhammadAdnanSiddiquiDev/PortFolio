'use client'
import Link from "next/link";
import { motion } from "motion/react"
import { Menu, MenuIcon } from "lucide-react";
const Navbar = () => {
  return (
    <motion.nav initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1}}  className = "z-50 bg-neutral-950 flex fixed md:justify-center items-center px-30 h-[10vh] w-full py-4">
      <div className="flex md:justify-between gap-40 py-4 px-4 md:items-center rounded-full  md:border md:border-gray-700">
      <h3 className =" text-md"><span className="font-bold text-emerald-500">M</span>AdnanSiddiqui</h3>
     <MenuIcon size={24} className="md:hidden block right-2 absolute cursor-pointer" />
        <ul className = "flex md:flex-row flex-col md:bg-transparent bg-emerald-900 w-full left-0 md:px-0 md:py-0 px-6 py-5 md:h-fit h-[90vh]  gap-8 md:static absolute top-[10vh]  text-sm">
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
