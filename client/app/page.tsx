
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skill";
import Image from "next/image";

export default function Home() {
  return (
   <>
<Hero/>
<About/>
<Experience/>
<Projects/>
<Skills/>
<Contact/>
   </>
  );
}
