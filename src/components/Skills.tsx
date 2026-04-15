"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/resume";

const skillCategories = [
  {
    key: "technical",
    label: "Technical",
    icon: "⚙",
    color: "var(--cyan)",
    items: skills.technical,
  },
  {
    key: "cybersecurity",
    label: "Cybersecurity",
    icon: "🛡",
    color: "var(--green)",
    items: skills.cybersecurity,
  },
  {
    key: "tools",
    label: "Tools",
    icon: "🔧",
    color: "#a78bfa",
    items: skills.tools,
  },
  {
    key: "professional",
    label: "Professional",
    icon: "◈",
    color: "#f59e0b",
    items: skills.professional,
  },
  {
    key: "ai",
    label: "AI & Automation",
    icon: "◉",
    color: "#ec4899",
    items: skills.ai,
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".section-animate").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-16">
          <span className="font-mono text-cyber-cyan text-sm">03.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            SKILLS
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="section-animate cyber-card p-6">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-lg"
                  style={{ color: cat.color }}
                  aria-hidden
                >
                  {cat.icon}
                </span>
                <h3
                  className="font-mono text-sm font-medium tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag cursor-default"
                    style={
                      {
                        "--hover-color": cat.color,
                      } as React.CSSProperties
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
