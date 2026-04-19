"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { newsItems } from "@/data/news";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const PAGE_SIZE = 60;

export default function NewsPage() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const visible = newsItems.slice(0, shown);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-brand-ink overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 90% 30%, rgba(188,2,2,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="wrapper relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-red text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
          >
            Press &amp; Media
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight"
            >
              IN THE
              <br />
              <span className="text-brand-red">NEWS</span>
            </motion.h1>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-8"
          >
            <div>
              <p className="font-playfair font-black text-5xl md:text-6xl text-brand-white leading-none">
                276+
              </p>
              <p className="text-muted text-[10px] tracking-[0.25em] uppercase font-sans mt-2">
                Articles &amp; Features
              </p>
            </div>
            <div className="w-px h-16 bg-surface-3" />
            <div>
              <p className="font-playfair font-black text-5xl md:text-6xl text-brand-white leading-none">
                50+
              </p>
              <p className="text-muted text-[10px] tracking-[0.25em] uppercase font-sans mt-2">
                Publications
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-3" />
      </section>

      {/* ── NEWS GRID ── */}
      <section className="bg-brand-ink py-16 md:py-24">
        <div className="wrapper">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0">
            {visible.map((item, i) => (
              <FadeUp key={`${item.link}-${i}`} delay={(i % 12) * 0.03}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-surface-3 px-4 py-5 hover:border-brand-red/50 hover:bg-surface-2 transition-all duration-200 group -m-px min-h-[80px] flex items-center justify-center"
                >
                  <span className="text-muted text-[10px] tracking-[0.12em] uppercase font-sans text-center leading-relaxed group-hover:text-brand-white transition-colors duration-200 line-clamp-2">
                    {item.brand}
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>

          {/* Load more */}
          {shown < newsItems.length && (
            <div className="mt-16 text-center">
              <FadeUp>
                <button
                  onClick={() => setShown((s) => Math.min(s + PAGE_SIZE, newsItems.length))}
                  className="inline-flex items-center gap-3 border border-surface-3 text-brand-white text-[11px] tracking-[0.25em] uppercase font-sans px-10 py-5 hover:border-brand-red hover:text-brand-red transition-all duration-300 group"
                >
                  Load More
                  <span className="text-muted group-hover:text-brand-red transition-colors">
                    ({newsItems.length - shown} remaining)
                  </span>
                </button>
              </FadeUp>
            </div>
          )}

          {shown >= newsItems.length && (
            <div className="mt-10 text-center">
              <p className="text-muted-2 text-xs font-sans tracking-[0.15em] uppercase">
                All {newsItems.length} articles shown
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
