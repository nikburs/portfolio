"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyber-border bg-cyber-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-cyber-cyan text-sm font-medium tracking-widest uppercase"
        >
          <span className="text-cyber-muted">[</span>
          FGS
          <span className="text-cyber-muted">]</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const section = link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === section
                      ? "text-cyber-cyan"
                      : "text-cyber-muted hover:text-cyber-text"
                  }`}
                >
                  {activeSection === section && (
                    <span className="text-cyber-cyan mr-1">›</span>
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Credly CTA */}
        <a
          href="https://www.credly.com/users/franz-sevilla"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex cyber-btn text-xs"
        >
          Credly Profile
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-cyber-cyan transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cyber-cyan transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cyber-cyan transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cyber-border bg-cyber-bg/95 backdrop-blur-md">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest text-cyber-muted hover:text-cyber-cyan transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
