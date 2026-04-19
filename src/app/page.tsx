"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MarqueeStrip from "@/components/Marquee";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.featured);

const pressNames = [
  "ESPN",
  "Hindustan Times",
  "NDTV",
  "Times of India",
  "India Today",
  "Outlook",
  "The Hindu",
  "Mid-day",
  "Mumbai Mirror",
  "Deccan Chronicle",
  "Indian Express",
  "News18",
  "Zee News",
  "Economic Times",
  "Pinkvilla",
  "Behindwoods",
  "Film Companion",
];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  return (
    <Link href="/projects" className="block group">
      <div
        className={`relative overflow-hidden bg-surface-2 ${
          large ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={
            large
              ? "(max-width: 768px) 100vw, 58vw"
              : "(max-width: 768px) 100vw, 42vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block text-[9px] tracking-[0.3em] uppercase font-sans text-brand-red/80 border border-brand-red/30 px-3 py-1 mb-3">
            {project.type}
          </span>
          <h3
            className={`font-playfair font-bold text-brand-white leading-tight mb-2 ${
              large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 overflow-hidden h-0 group-hover:h-5 transition-all duration-500">
            <span className="text-muted text-xs font-sans">
              {project.language}
            </span>
            {project.genre && (
              <>
                <span className="text-muted-2 text-xs">·</span>
                <span className="text-muted text-xs font-sans">
                  {project.genre}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-ink overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(188,2,2,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
          <div className="w-px h-20 bg-surface-3" />
          <span className="text-muted-2 text-[9px] tracking-[0.35em] uppercase font-sans writing-vertical">
            Est. 2018
          </span>
          <div className="w-px h-20 bg-surface-3" />
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
          <div className="w-px h-20 bg-surface-3" />
          <span className="text-muted-2 text-[9px] tracking-[0.35em] uppercase font-sans writing-vertical">
            Mumbai · India
          </span>
          <div className="w-px h-20 bg-surface-3" />
        </div>

        <div className="relative z-10 text-center px-4 select-none">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-muted text-[10px] tracking-[0.45em] uppercase font-sans mb-12"
          >
            Dhoni Entertainment — Est. 2018
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black leading-[0.82] tracking-[-0.02em] text-brand-white"
              style={{ fontSize: "clamp(44px, 10vw, 110px)" }}
            >
              MIND
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black leading-[0.82] tracking-[-0.02em] text-brand-white"
              style={{ fontSize: "clamp(44px, 10vw, 110px)" }}
            >
              OVER
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.61, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black leading-[0.82] tracking-[-0.02em] text-brand-red"
              style={{ fontSize: "clamp(44px, 10vw, 110px)" }}
            >
              MATTER
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-muted text-sm font-sans mt-10 tracking-[0.12em] leading-relaxed max-w-md mx-auto"
          >
            A production company co-founded by
            <br />
            MS Dhoni &amp; Sakshi Singh Dhoni
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="flex items-center justify-center gap-5 mt-10"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-brand-red text-white text-[11px] tracking-[0.25em] uppercase font-sans px-8 py-4 hover:bg-brand-red-hover transition-colors duration-300 group"
            >
              Our Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 border border-surface-3 text-brand-white/60 text-[11px] tracking-[0.25em] uppercase font-sans px-8 py-4 hover:border-brand-white/40 hover:text-brand-white transition-all duration-300"
            >
              About Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-muted-2 text-[9px] tracking-[0.35em] uppercase font-sans">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-brand-red to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── PURPOSE ── */}
      <section className="bg-surface py-28 md:py-40">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeUp delay={0}>
                <p className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-5">
                  Our Mission
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl text-brand-white leading-tight tracking-tight">
                  OUR
                  <br />
                  <span className="text-brand-red">PUR</span>POSE
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="mt-10 w-20 h-px bg-brand-red" />
              </FadeUp>
            </div>

            <div className="lg:col-span-7 lg:pt-16">
              <FadeUp delay={0.25}>
                <p className="text-brand-white/85 text-lg md:text-xl font-sans leading-relaxed mb-8 font-light">
                  At Dhoni Entertainment, we believe that mass communication is
                  a superpower and should be used responsibly. With this
                  superpower, we want to spread awareness and foster positivity
                  in society through various forms of entertainment.
                </p>
              </FadeUp>
              <FadeUp delay={0.35}>
                <p className="text-muted text-base font-sans leading-relaxed mb-12">
                  Founded by MS Dhoni and Sakshi Dhoni, we bring the same
                  relentless spirit that defines a champion — to every story we
                  tell.
                </p>
              </FadeUp>
              <FadeUp delay={0.45}>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-3 text-brand-white text-[11px] tracking-[0.25em] uppercase font-sans border border-surface-3 px-8 py-4 hover:border-brand-red hover:text-brand-red transition-all duration-300 group"
                >
                  Meet the Team
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        className="bg-brand-ink border-y border-surface-3"
      >
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-3">
            {[
              { number: "9+", label: "Productions" },
              { number: "276+", label: "Press Features" },
              { number: "5+", label: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center py-16 px-8"
              >
                <p className="font-playfair font-black text-6xl md:text-7xl text-brand-white leading-none mb-3">
                  {stat.number}
                </p>
                <p className="text-muted text-[10px] tracking-[0.3em] uppercase font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="bg-brand-ink py-28 md:py-40">
        <div className="wrapper">
          <div className="flex items-end justify-between mb-14">
            <div>
              <FadeUp delay={0}>
                <p className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
                  Selected Work
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl text-brand-white leading-none tracking-tight">
                  OUR PROJECTS
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-muted text-[11px] tracking-[0.2em] uppercase font-sans hover:text-brand-red transition-colors group"
              >
                View All
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
            {featuredProjects[0] && (
              <FadeUp delay={0.1} className="lg:col-span-7 lg:row-span-2">
                <ProjectCard project={featuredProjects[0]} large />
              </FadeUp>
            )}
            {featuredProjects.slice(1, 3).map((proj, i) => (
              <FadeUp key={proj.title} delay={0.2 + i * 0.1} className="lg:col-span-5">
                <ProjectCard project={proj} />
              </FadeUp>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-white text-[11px] tracking-[0.2em] uppercase font-sans border border-surface-3 px-8 py-4"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="bg-surface py-28 md:py-36 border-t border-surface-3">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <FadeUp delay={0}>
                <p className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
                  Media
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl text-brand-white leading-none tracking-tight">
                  IN THE NEWS
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-muted text-[11px] tracking-[0.2em] uppercase font-sans hover:text-brand-red transition-colors group self-start md:self-end"
              >
                276+ Articles
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
            {pressNames.map((name, i) => (
              <FadeUp key={name} delay={i * 0.04}>
                <div className="border border-surface-3 px-6 py-5 flex items-center justify-center hover:border-brand-red/40 hover:bg-surface-2 transition-all duration-300 -m-px">
                  <span className="text-muted text-[11px] tracking-[0.15em] uppercase font-sans text-center">
                    {name}
                  </span>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={pressNames.length * 0.04}>
              <Link
                href="/news"
                className="border border-brand-red/30 bg-brand-red/5 px-6 py-5 flex items-center justify-center hover:bg-brand-red/10 transition-all duration-300 -m-px group"
              >
                <span className="text-brand-red text-[11px] tracking-[0.15em] uppercase font-sans text-center">
                  +259 More →
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
