"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your email service (Resend, EmailJS, Formspree etc.)
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          {...fadeUp(0.1)}
          className="text-emerald-500 text-sm font-medium tracking-widest uppercase mb-3"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          {...fadeUp(0.3)}
          className="text-zinc-400 text-base mb-10 leading-relaxed"
        >
          Have a project in mind or just want to say hi? My inbox is always
          open. I&apos;ll get back to you as soon as possible.
        </motion.p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center"
          >
            <p className="text-emerald-400 text-lg font-semibold mb-1">
              Message sent!
            </p>
            <p className="text-zinc-400 text-sm">
              Thanks for reaching out. I&apos;ll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            {...fadeUp(0.4)}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Muhammad Adnan"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder:text-zinc-600"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="adnan@example.com"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-sm mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors duration-200 placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors duration-200"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;