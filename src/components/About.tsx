"use client";

import { useEffect, useRef } from "react";
import { personalInfo, education } from "@/data/resume";

export default function About() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-16">
          <span className="font-mono text-cyber-cyan text-sm">01.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            ABOUT ME
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div className="section-animate">
            <div className="cyber-card p-6 md:p-8">
              <div className="font-mono text-xs text-cyber-cyan mb-4 tracking-widest">
                // PROFESSIONAL SUMMARY
              </div>
              <p className="text-cyber-text leading-relaxed text-sm md:text-base">
                {personalInfo.summary}
              </p>

              <div className="mt-8 pt-6 border-t border-cyber-border grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-xs text-cyber-muted mb-1">
                    EMAIL
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-xs text-cyber-cyan hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <div className="font-mono text-xs text-cyber-muted mb-1">
                    PHONE
                  </div>
                  <span className="font-mono text-xs text-cyber-text">
                    {personalInfo.phone}
                  </span>
                </div>
                <div>
                  <div className="font-mono text-xs text-cyber-muted mb-1">
                    LOCATION
                  </div>
                  <span className="font-mono text-xs text-cyber-text">
                    Mabalacat, PH
                  </span>
                </div>
                <div>
                  <div className="font-mono text-xs text-cyber-muted mb-1">
                    CREDLY
                  </div>
                  <a
                    href={personalInfo.credly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-cyber-cyan hover:underline"
                  >
                    View Badges →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="section-animate">
            <div className="cyber-card p-6 md:p-8 h-full">
              <div className="font-mono text-xs text-cyber-cyan mb-4 tracking-widest">
                // EDUCATION
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center border border-cyber-border shrink-0"
                  style={{ background: "rgba(0,212,255,0.05)" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="1.5"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-body font-semibold text-base mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-cyber-cyan text-sm font-mono">
                    {education.institution}
                  </p>
                  <p className="text-cyber-muted text-xs font-mono mt-1">
                    {education.location} · {education.period}
                  </p>
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-cyber-muted mb-3">
                  RELEVANT AREAS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.relevantAreas.map((area) => (
                    <span key={area} className="skill-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
