"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, ProjectTypes } from "@/data/projects";

const typeFilters = Object.values(ProjectTypes);

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>(ProjectTypes.ALL);

  const filtered =
    activeFilter === ProjectTypes.ALL
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-brand-ink overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(188,2,2,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="wrapper relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-red text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
          >
            Selected Work
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight"
            >
              SHOW<span className="text-brand-red">CASE</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-muted text-sm font-sans max-w-lg leading-relaxed"
          >
            Films, documentaries, web series, short films, and advertisements
            — stories told with conviction.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-3" />
      </section>

      {/* ── FILTERS + GRID ── */}
      <section className="bg-brand-ink py-16 md:py-24">
        <div className="wrapper">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-14">
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`text-[10px] tracking-[0.25em] uppercase font-sans px-5 py-2.5 border transition-all duration-250 ${
                  activeFilter === type
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-surface-3 text-muted hover:border-muted hover:text-brand-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-muted-2 text-xs font-sans tracking-[0.15em] uppercase mb-10">
            {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
          </p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={`${project.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  const primaryLink =
    project.ctaLink?.[0] || project.link !== "#" ? project.link : null;

  return (
    <div
      className="bg-surface-2 border border-surface-3 overflow-hidden group hover:border-brand-red/30 transition-colors duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2/90 via-surface-2/10 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-brand-red/15"
        />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block text-[9px] tracking-[0.3em] uppercase font-sans text-white bg-brand-ink/80 border border-surface-3 px-3 py-1.5">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-3 mb-3">
          {project.language && (
            <span className="text-muted-2 text-[9px] tracking-[0.2em] uppercase font-sans">
              {project.language}
            </span>
          )}
          {project.genre && (
            <>
              <span className="text-surface-3 text-xs">·</span>
              <span className="text-muted-2 text-[9px] tracking-[0.2em] uppercase font-sans">
                {project.genre}
              </span>
            </>
          )}
        </div>
        <h3 className="font-playfair font-bold text-xl md:text-2xl text-brand-white leading-tight mb-3">
          {project.title}
        </h3>
        <p className="text-muted text-sm font-sans leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-surface-3">
          {project.ctaLink && project.ctaLink.length > 0 ? (
            project.ctaLink.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-brand-white border border-surface-3 px-5 py-2.5 hover:border-brand-red hover:text-brand-red transition-all duration-250 group"
              >
                {project.ctaText}
                {project.ctaLink && project.ctaLink.length > 1 && i === 1
                  ? " 2"
                  : ""}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))
          ) : (
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-sans text-muted border border-surface-3 px-5 py-2.5 cursor-default">
              {project.ctaText}
            </span>
          )}
          {project.rDate && (
            <span className="text-muted-2 text-xs font-sans self-center">
              {project.rDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
