"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 bg-brand-ink overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(188,2,2,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="wrapper relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-red text-[10px] tracking-[0.4em] uppercase font-sans mb-5"
          >
            Get In Touch
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-black leading-none tracking-tight text-brand-white"
              style={{ fontSize: "clamp(44px, 9vw, 96px)" }}
            >
              LET&apos;S
              <br />
              <span className="text-brand-red">TALK</span>
            </motion.h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-3" />
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="bg-brand-ink py-24 md:py-40">
        <div className="wrapper">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <p className="text-muted text-sm font-sans leading-relaxed mb-14 max-w-md">
                Got a project idea, collaboration proposal, or just want to
                say hello? We&apos;d love to hear from you.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-10">
              {/* Email */}
              <FadeUp delay={0.1}>
                <div className="border-t border-surface-3 pt-8">
                  <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-3">
                    Email Us
                  </p>
                  <a
                    href="mailto:contact@msdhonientertainment.com"
                    className="font-playfair font-bold text-2xl md:text-3xl text-brand-white hover:text-brand-red transition-colors duration-300 break-all"
                  >
                    contact@msdhonientertainment.com
                  </a>
                </div>
              </FadeUp>

              {/* Phone */}
              <FadeUp delay={0.2}>
                <div className="border-t border-surface-3 pt-8">
                  <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-3">
                    Call Us
                  </p>
                  <a
                    href="tel:+917304507781"
                    className="font-playfair font-bold text-2xl md:text-3xl text-brand-white hover:text-brand-red transition-colors duration-300"
                  >
                    +91 73045 07781
                  </a>
                </div>
              </FadeUp>

              {/* Address */}
              <FadeUp delay={0.3}>
                <div className="border-t border-surface-3 pt-8">
                  <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-3">
                    Visit Us
                  </p>
                  <address className="not-italic text-brand-white/80 text-lg font-sans leading-relaxed">
                    207, Adani Inspire Hub,
                    <br />
                    Andheri West,
                    <br />
                    Mumbai 400053
                  </address>
                </div>
              </FadeUp>

              {/* Social */}
              <FadeUp delay={0.4}>
                <div className="border-t border-surface-3 pt-8">
                  <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
                    Follow Our Journey
                  </p>
                  <div className="flex flex-wrap gap-5">
                    {[
                      {
                        label: "Instagram",
                        href: "https://www.instagram.com/dhoni.entertainment/",
                      },
                      {
                        label: "Twitter",
                        href: "https://twitter.com/dhoniltd",
                      },
                      {
                        label: "Facebook",
                        href: "https://www.facebook.com/msdhonientertainment.india",
                      },
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/dhoni-entertainment/",
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-[11px] tracking-[0.2em] uppercase font-sans border border-surface-3 px-5 py-3 hover:border-brand-red hover:text-brand-red transition-all duration-250"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM MARQUEE ── */}
      <div className="bg-brand-red overflow-hidden py-5">
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {Array.from({ length: 8 }, (_, i) => (
            <span
              key={i}
              className="inline-flex items-center text-white text-sm font-playfair font-bold italic tracking-wide"
            >
              <span className="px-8">Mind Over Matter</span>
              <span className="text-white/40 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
