"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/resume";

const typewriterStrings = [
  "Network Defense",
  "Vulnerability Assessment",
  "Cloud Security",
  "Ethical Hacking",
  "Technology Risk",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = typewriterStrings[stringIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplayText(current.slice(0, charIndex - 1));
          if (charIndex === 0) {
            setDeleting(false);
            setStringIndex((s) => (s + 1) % typewriterStrings.length);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? 50 : 90
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  // Matrix rain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF";

    const draw = () => {
      ctx.fillStyle = "rgba(5, 8, 16, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 212, 255, 0.15)";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix rain background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, var(--bg) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">

        {/* Profile photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Animated cyan ring */}
            <div
              className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{
                background:
                  "conic-gradient(var(--cyan), var(--green), var(--cyan))",
                padding: "2px",
                borderRadius: "9999px",
              }}
            />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyber-bg z-10">
              <Image
                src="/images/profile.jpg"
                alt="Franz Gil Sevilla"
                fill
                className="object-cover object-center"
                sizes="128px"
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-cyber-green border-2 border-cyber-bg z-20 animate-pulse" />
          </div>
        </div>

        {/* Name */}
        <h1
          className="glitch font-display text-6xl md:text-8xl lg:text-9xl text-white mb-2 tracking-wider"
          data-text="FRANZ GIL"
          style={{ lineHeight: 1 }}
        >
          FRANZ GIL
        </h1>
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 tracking-wider"
          style={{
            lineHeight: 1,
            background: "linear-gradient(135deg, var(--cyan), var(--green))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SEVILLA
        </h1>

        {/* Typewriter subtitle */}
        <div className="font-mono text-lg md:text-xl text-cyber-muted mb-4 h-8">
          <span className="text-cyber-cyan">&gt;</span>{" "}
          <span className="text-cyber-text">{displayText}</span>
          <span className="inline-block w-2 h-5 bg-cyber-cyan ml-0.5 animate-blink" />
        </div>

        {/* Location */}
        <p className="font-mono text-sm text-cyber-muted mb-12 tracking-wider">
          📍 {personalInfo.location}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#experience" className="cyber-btn">
            <span>View Experience</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="cyber-btn"
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
          >
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-cyber-muted tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cyber-cyan to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
