import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { href: "/about-us", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "In the News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/dhoni.entertainment/",
    label: "Instagram",
  },
  { href: "https://twitter.com/dhoniltd", label: "Twitter / X" },
  {
    href: "https://www.facebook.com/msdhonientertainment.india",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/dhoni-entertainment/",
    label: "LinkedIn",
  },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-3">
      <div className="wrapper pt-20 pb-10">
        {/* Big CTA row */}
        <div className="border-b border-surface-3 pb-16 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-muted text-xs tracking-[0.3em] uppercase font-sans mb-4">
                Est. 2018 · Mumbai
              </p>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-brand-white leading-none">
                Mind Over<br />
                <span className="text-brand-red">Matter.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase font-sans bg-brand-red text-white px-10 py-5 hover:bg-brand-red-hover transition-colors duration-300 self-start md:self-end group"
            >
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/img/de-logo.png"
                alt="Dhoni Entertainment"
                width={100}
                height={100}
                className="rounded-sm"
              />
            </Link>
            <p className="text-muted text-sm font-playfair italic">
              Mind Over Matter
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm font-sans hover:text-brand-white transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@msdhonientertainment.com"
                className="text-muted text-sm font-sans hover:text-brand-white transition-colors duration-200 break-all"
              >
                contact@msdhonientertainment.com
              </a>
              <a
                href="tel:+917304507781"
                className="text-muted text-sm font-sans hover:text-brand-white transition-colors duration-200"
              >
                +91 73045 07781
              </a>
              <p className="text-muted-2 text-sm font-sans leading-relaxed">
                207, Adani Inspire Hub,
                <br />
                Andheri West,
                <br />
                Mumbai 400053
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-muted-2 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Follow Us
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-sm font-sans hover:text-brand-red transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-3 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted-2 text-xs font-sans">
            © {new Date().getFullYear()} Dhoni Entertainment Pvt. Ltd. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-2 text-xs font-sans hover:text-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
