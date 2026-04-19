"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "@/components/Img";
import { galleryImages } from "@/data/gallery";

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

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    index: number;
  } | null>(null);

  const openLightbox = (img: { src: string; alt: string }, index: number) =>
    setLightbox({ ...img, index });

  const closeLightbox = () => setLightbox(null);

  const navigate = (dir: 1 | -1) => {
    if (!lightbox) return;
    const next =
      (lightbox.index + dir + galleryImages.length) % galleryImages.length;
    setLightbox({
      src: galleryImages[next].src,
      alt: galleryImages[next].alt,
      index: next,
    });
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-brand-ink overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-2/3 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 10% 80%, rgba(188,2,2,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="wrapper relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-red text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
          >
            Behind The Scenes
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none tracking-tight"
            >
              GAL<span className="text-brand-red">LERY</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-muted text-sm font-sans max-w-lg leading-relaxed"
          >
            Behind-the-scenes and on-set moments from our productions.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-3" />
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="bg-brand-ink py-16 md:py-20">
        <div className="wrapper">
          {/* Masonry-style grid using columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <FadeUp key={img.src} delay={i * 0.04} className="break-inside-avoid">
                <button
                  onClick={() => openLightbox(img, i)}
                  className="block w-full group relative overflow-hidden"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      i % 5 === 0 || i % 7 === 0
                        ? "aspect-[3/4]"
                        : i % 3 === 0
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-brand-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      <div className="w-12 h-12 border border-white/50 flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <p className="text-muted-2 text-[10px] tracking-[0.15em] uppercase font-sans mt-2 text-left px-1">
                    {img.alt}
                  </p>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-brand-ink/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-surface-3 text-brand-white hover:border-brand-red hover:text-brand-red transition-colors z-10"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Nav left */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-surface-3 text-brand-white hover:border-brand-red hover:text-brand-red transition-colors z-10"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Nav right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-surface-3 text-brand-white hover:border-brand-red hover:text-brand-red transition-colors z-10"
              aria-label="Next"
            >
              →
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] w-full mx-16 md:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full max-h-[80vh]"
                style={{ objectFit: "contain" }}
              />
              <p className="text-muted text-xs font-sans tracking-[0.15em] uppercase mt-4 text-center">
                {lightbox.alt}
              </p>
              <p className="text-muted-2 text-[10px] font-sans text-center mt-1">
                {lightbox.index + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
