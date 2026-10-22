"use client";

import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#invitation", label: "Invitation" },
  { href: "#details", label: "Details" },
  { href: "#dress-code", label: "Dress Code" },
  { href: "#entourage", label: "Entourage" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#fdf8f5]/90 backdrop-blur-md shadow-sm border-b border-[#bfa15f]/25 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
        aria-label="Main Navigation"
      >
        {/* Monogram Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-script text-3xl sm:text-4xl text-[#783832] transition-colors"
        >
          <span>K</span>
          <Heart className="w-3.5 h-3.5 text-[#bfa15f] fill-[#d9aba6] group-hover:scale-125 transition-transform" />
          <span>J</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#664338] hover:text-[#783832] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#bfa15f] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Quick RSVP CTA on Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#rsvp"
            className="px-5 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#783832] to-[#a66a64] text-white shadow-sm hover:shadow-md hover:from-[#5a2722] hover:to-[#8f423d] transition-all transform hover:-translate-y-0.5 border border-[#bfa15f]/50"
          >
            RSVP
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#bfa15f]/40 bg-white/70 text-[#783832] shadow-sm lg:hidden hover:bg-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[#bfa15f]/20 bg-[#fdf8f5]/95 backdrop-blur-xl px-6 py-6 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <ul className="flex flex-col divide-y divide-[#bfa15f]/15">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#783832] hover:text-[#bfa15f] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 pt-3">
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-[#783832] text-white shadow-md border border-[#bfa15f]/50"
            >
              Respond to Invitation (RSVP)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
