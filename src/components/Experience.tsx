"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/resume";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".section-animate").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 grid-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-16">
          <span className="font-mono text-cyber-cyan text-sm">02.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-cyan-dim to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="section-animate relative">
                {/* Dot */}
                <div
                  className="absolute -left-8 top-6 w-3 h-3 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: idx === 0 ? "var(--cyan)" : "var(--border)",
                    backgroundColor:
                      idx === 0 ? "var(--cyan)" : "var(--bg)",
                    boxShadow:
                      idx === 0 ? "0 0 12px rgba(0,212,255,0.6)" : "none",
                  }}
                />

                <div className="cyber-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-body font-semibold text-lg">
                        {exp.role}
                      </h3>
                      {exp.department && (
                        <span className="font-mono text-xs text-cyber-muted">
                          {exp.department}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-cyber-cyan border border-cyber-border px-3 py-1 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="font-mono text-sm font-medium"
                      style={{
                        color: idx === 0 ? "var(--cyan)" : "var(--text)",
                      }}
                    >
                      {exp.company}
                    </span>
                    <span className="text-cyber-muted text-xs">·</span>
                    <span className="font-mono text-xs text-cyber-muted">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-cyber-cyan mt-1 text-xs shrink-0">
                          ▸
                        </span>
                        <span className="text-cyber-text text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
