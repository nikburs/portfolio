"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { certifications } from "@/data/resume";
import { personalInfo } from "@/data/resume";

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <section
      id="certifications"
      ref={ref}
      className="py-24 px-6 grid-bg"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="section-animate flex items-center gap-4 mb-6">
          <span className="font-mono text-cyber-cyan text-sm">04.</span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
            CERTIFICATIONS
          </h2>
          <div className="flex-1 h-px bg-cyber-border max-w-xs" />
        </div>

        <div className="section-animate mb-12">
          <p className="font-mono text-sm text-cyber-muted">
            Industry certifications from leading technology providers.{" "}
            <a
              href={personalInfo.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-cyan hover:underline"
            >
              Verify on Credly →
            </a>
          </p>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="section-animate cyber-card p-5 cursor-pointer"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderColor:
                  hoveredId === cert.id
                    ? `${cert.color}66`
                    : "var(--border)",
                boxShadow:
                  hoveredId === cert.id
                    ? `0 0 25px ${cert.color}22`
                    : "none",
              }}
            >
              {/* Badge image */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={cert.badge}
                  alt={cert.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-cyber-text text-xs font-body font-medium leading-snug mb-2">
                  {cert.name}
                </h3>
                <span
                  className="font-mono text-xs"
                  style={{ color: cert.color }}
                >
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
