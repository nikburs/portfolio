"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/resume";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.8-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Credly",
    value: "View Badges & Certifications",
    href: personalInfo.credly,
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".section-animate").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-16">
          <span className="font-mono text-cyber-cyan text-sm">06.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            CONTACT
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div className="section-animate">
            <h3 className="font-display text-3xl text-white tracking-wider mb-4">
              LET&apos;S CONNECT
            </h3>
            <p className="text-cyber-muted leading-relaxed mb-8 text-sm md:text-base">
              I&apos;m actively seeking entry-level opportunities in
              cybersecurity and technology risk. If you have an opening or
              just want to talk security, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Cybersecurity Analyst", "SOC Analyst", "Security Engineer", "Technology Risk"].map(
                (role) => (
                  <span key={role} className="skill-tag">
                    {role}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="section-animate flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="cyber-card flex items-center gap-4 p-5 group"
              >
                <div className="text-cyber-cyan group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-cyber-muted mb-0.5 uppercase tracking-widest">
                    {link.label}
                  </div>
                  <div className="text-cyber-text text-sm font-body truncate">
                    {link.value}
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--muted)"
                  strokeWidth="2"
                  className="shrink-0 group-hover:stroke-cyber-cyan transition-colors group-hover:translate-x-1 duration-200"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-cyber-border flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-cyber-muted">
          © {new Date().getFullYear()} Franz Gil Sevilla
        </span>
        <span className="font-mono text-xs text-cyber-muted">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </section>
  );
}
