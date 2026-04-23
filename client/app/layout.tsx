import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

export const metadata: Metadata = {
  title: "Muhammad Adnan Siddiqui - Portfolio",
  description: "Welcome to my portfolio! I'm Muhammad Adnan Siddiqui, a passionate software developer with expertise in web development , and software engineering. Explore my projects, skills, and experience to see how I can contribute to your next project or team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="bg-neutral-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
