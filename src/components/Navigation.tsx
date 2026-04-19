"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about-us", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-ink/95 backdrop-blur-md border-b border-surface-3"
            : "bg-transparent"
        }`}
      >
        <div className="wrapper py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10 shrink-0">
            <Image
              src="/img/de-logo.png"
              alt="Dhoni Entertainment"
              width={75}
              height={75}
              className="rounded-sm"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.22em] uppercase font-sans transition-all duration-200 relative group ${
                  pathname === link.href
                    ? "text-brand-white"
                    : "text-muted hover:text-brand-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[60] relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-[1.5px] bg-brand-white origin-center transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-brand-white transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-brand-white origin-center transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-ink flex flex-col"
          >
            <div className="h-1 w-full bg-brand-red shrink-0" />

            <div className="flex-1 flex flex-col justify-center px-8 pb-16 overflow-auto">
              <nav>
                <ul className="flex flex-col gap-6 mb-16">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-5xl font-playfair font-bold leading-tight transition-colors duration-200 hover:text-brand-red ${
                          pathname === link.href
                            ? "text-brand-red"
                            : "text-brand-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-surface-3 pt-8">
                <a
                  href="mailto:contact@msdhonientertainment.com"
                  className="block text-muted text-sm font-sans hover:text-brand-white transition-colors mb-1"
                >
                  contact@msdhonientertainment.com
                </a>
                <a
                  href="tel:+917304507781"
                  className="block text-muted text-sm font-sans hover:text-brand-white transition-colors"
                >
                  +91 73045 07781
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
