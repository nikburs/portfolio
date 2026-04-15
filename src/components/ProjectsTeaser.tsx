"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsTeaser() {
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

  const featured = projects.find((p) => p.featured) ?? projects[0];

  if (!featured) return null;

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-16">
          <span className="font-mono text-cyber-cyan text-sm">04.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            PROJECTS
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        {/* Featured project card */}
        <div className="section-animate cyber-card p-6 md:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="font-mono text-xs px-2 py-0.5 border"
              style={{
                borderColor: "var(--cyan)",
                color: "var(--cyan)",
                background: "rgba(0,212,255,0.07)",
              }}
            >
              ★ FEATURED
            </span>
            <span className="font-mono text-xs text-cyber-muted">
              {featured.context}
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-white tracking-wider mb-2">
            {featured.title}
          </h3>
          <p className="font-mono text-sm text-cyber-cyan mb-5">
            {featured.subtitle}
          </p>
          <p className="text-cyber-text text-sm leading-relaxed mb-6 max-w-3xl">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {featured.tags.slice(0, 6).map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
            {featured.tags.length > 6 && (
              <span className="skill-tag text-cyber-muted">
                +{featured.tags.length - 6} more
              </span>
            )}
          </div>

          <Link
            href="/projects"
            className="cyber-btn inline-flex"
          >
            View Full Project Details →
          </Link>
        </div>

        {/* All projects CTA */}
        <div className="section-animate flex items-center justify-between">
          <span className="font-mono text-xs text-cyber-muted">
            {projects.length} project{projects.length !== 1 ? "s" : ""} total
          </span>
          <Link
            href="/projects"
            className="font-mono text-xs text-cyber-cyan hover:underline tracking-widest uppercase"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
