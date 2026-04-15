import Image from "next/image";
import { Project } from "@/data/projects";

const statusConfig = {
  completed: { label: "Completed", color: "var(--green)" },
  "in-progress": { label: "In Progress", color: "#f59e0b" },
  archived: { label: "Archived", color: "var(--muted)" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <article className="cyber-card flex flex-col h-full">
      {/* Project image (optional) */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden border-b border-cyber-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-surface to-transparent" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-3 flex-wrap">
            {project.featured && (
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
            )}
            <span
              className="font-mono text-xs px-2 py-0.5 border"
              style={{
                borderColor: status.color,
                color: status.color,
                background: "transparent",
              }}
            >
              {status.label}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-3xl text-white tracking-wider mb-1">
          {project.title}
        </h2>
        <p className="font-mono text-xs text-cyber-cyan mb-3">
          {project.subtitle}
        </p>
        <p className="font-mono text-xs text-cyber-muted mb-5">
          {project.context}
        </p>

        {/* Description */}
        <p className="text-cyber-text text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <div className="font-mono text-xs text-cyber-muted mb-3 tracking-widest uppercase">
            Key Highlights
          </div>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-cyber-cyan mt-0.5 text-xs shrink-0">▸</span>
                <span className="text-cyber-text text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links — pushed to bottom */}
        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-cyber-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn text-xs"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn text-xs"
                style={{ borderColor: "var(--green)", color: "var(--green)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
