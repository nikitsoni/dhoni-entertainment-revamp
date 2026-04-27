"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "@/components/Img";
import Link from "next/link";
import { founders, team } from "@/data/team";
import MarqueeStrip from "@/components/Marquee";

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

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-brand-ink overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(188,2,2,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="wrapper relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-red text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
          >
            The Team
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight"
            >
              WHO
              <br />
              <span className="text-brand-red">ARE</span> WE
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-muted text-base md:text-lg font-playfair italic max-w-xl"
          >
            "A bunch of mavericks who want to tell stories that matter."
          </motion.p>
        </div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-3" />
      </section>

      <MarqueeStrip
        bg="bg-surface-2"
        textColor="text-muted"
        slow
        items={[
          "Feature Films",
          "Documentaries",
          "Web Series",
          "Short Films",
          "Commercials",
          "Original Content",
        ]}
      />

      {/* ── FOUNDERS ── */}
      <section className="bg-brand-ink py-28 md:py-40">
        <div className="wrapper">
          <div className="mb-16">
            <FadeUp>
              <p className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
                Leadership
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight">
                FOUNDERS
              </h2>
            </FadeUp>
          </div>

          <div className="flex flex-col gap-0">
            {founders.map((founder, i) => (
              <FadeUp key={founder.name} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-surface-3 ${
                    i === founders.length - 1 ? "border-b" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-4/5 lg:aspect-auto lg:min-h-150 overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-surface flex flex-col justify-center p-10 md:p-16 lg:p-20 ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <span className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
                      {founder.designation}
                    </span>
                    <h3 className="font-playfair font-bold text-4xl md:text-5xl text-brand-white leading-tight mb-8">
                      {founder.name}
                    </h3>
                    <div className="w-12 h-px bg-brand-red mb-8" />
                    <div
                      className="text-muted text-base font-sans leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{
                        __html: founder.description.replace(
                          /<br\/>/g,
                          "</p><p class='mt-4'>"
                        ),
                      }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-surface py-28 md:py-40 border-t border-surface-3">
        <div className="wrapper">
          <div className="mb-16">
            <FadeUp>
              <p className="text-brand-red text-[10px] tracking-[0.35em] uppercase font-sans mb-4">
                The Crew
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight">
                THE TEAM
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <TeamCard member={member} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND VALUES ── */}
      <section className="bg-brand-ink border-t border-surface-3 py-28 md:py-40">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-playfair font-black text-4xl md:text-5xl lg:text-6xl text-brand-white leading-none tracking-tight">
                MIND
                <br />
                <span className="text-brand-red">OVER</span>
                <br />
                MATTER
              </h2>
            </FadeUp>
            <div>
              <FadeUp delay={0.2}>
                <p className="text-brand-white/80 text-lg font-sans leading-relaxed mb-6 font-light">
                  Our ethos isn&apos;t just a tagline — it&apos;s a way of
                  working. Every project we take on demands more thought, more
                  care, and more intention than the last.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-muted text-base font-sans leading-relaxed mb-10">
                  From documentary filmmaking to feature films and brand
                  content, we approach each story with the conviction that the
                  right narrative, told right, can change minds.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 bg-brand-red text-white text-[11px] tracking-[0.25em] uppercase font-sans px-8 py-4 hover:bg-brand-red-hover transition-colors duration-300 group"
                >
                  See Our Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TeamCard({ member }: { member: (typeof team)[0] }) {
  return (
    <div className="bg-surface-2 border border-surface-3 overflow-hidden group hover:border-brand-red/30 transition-colors duration-300">
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      </div>

      {/* Info */}
      <div className="p-7">
        <span className="text-brand-red text-[9px] tracking-[0.3em] uppercase font-sans mb-2 block">
          {member.designation}
        </span>
        <h3 className="font-playfair font-bold text-2xl text-brand-white mb-4">
          {member.name}
        </h3>
        <div className="w-8 h-px bg-brand-red mb-5" />
        <div
          className="text-muted text-sm font-sans leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: member.description
              .replace(/<br\/><br\/>/g, " ")
              .replace(/<br\/>/g, " "),
          }}
        />

        {/* Favorites */}
        {(member.movies || member.shows) && (
          <div className="mt-6 pt-5 border-t border-surface-3 space-y-2">
            {member.movies && (
              <div>
                <span className="text-muted-2 text-[9px] tracking-[0.2em] uppercase font-sans block mb-1">
                  Fav Films
                </span>
                <span className="text-muted text-xs font-sans">
                  {member.movies}
                </span>
              </div>
            )}
            {member.shows && (
              <div>
                <span className="text-muted-2 text-[9px] tracking-[0.2em] uppercase font-sans block mb-1">
                  Fav Shows
                </span>
                <span className="text-muted text-xs font-sans">
                  {member.shows}
                </span>
              </div>
            )}
          </div>
        )}

        {/* LinkedIn */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-muted text-[10px] tracking-[0.2em] uppercase font-sans hover:text-brand-red transition-colors group"
          >
            LinkedIn
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
