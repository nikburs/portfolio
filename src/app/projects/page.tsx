import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Franz Gil Sevilla",
  description:
    "Cybersecurity and automation projects built by Franz Gil Sevilla.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-cyber-border bg-cyber-bg/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-cyber-muted hover:text-cyber-cyan transition-colors tracking-widest uppercase"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="font-mono text-cyber-cyan text-sm font-medium tracking-widest">
            <span className="text-cyber-muted">[</span>
            FGS
            <span className="text-cyber-muted">]</span>
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-cyber-cyan text-sm">~/projects</span>
            <div className="h-px bg-cyber-border flex-1 max-w-xs" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-4">
            PROJECTS
          </h1>
          <p className="font-mono text-sm text-cyber-muted max-w-2xl leading-relaxed">
            A collection of cybersecurity tools and automation projects.
            Each one built to solve a real problem.
          </p>
        </div>

        {/* Project count */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-cyber-muted">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
          <span className="w-1 h-1 rounded-full bg-cyber-muted" />
          <span className="font-mono text-xs text-cyber-green">
            {projects.filter((p) => p.status === "completed").length} completed
          </span>
          {projects.filter((p) => p.status === "in-progress").length > 0 && (
            <>
              <span className="w-1 h-1 rounded-full bg-cyber-muted" />
              <span className="font-mono text-xs text-amber-400">
                {projects.filter((p) => p.status === "in-progress").length} in
                progress
              </span>
            </>
          )}
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <section className="mb-16">
            <div className="font-mono text-xs text-cyber-muted mb-6 tracking-widest uppercase">
              // Featured
            </div>
            <div className="grid gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Other projects */}
        {rest.length > 0 && (
          <section>
            <div className="font-mono text-xs text-cyber-muted mb-6 tracking-widest uppercase">
              // All Projects
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Empty state — shown when only featured exists */}
        {rest.length === 0 && featured.length > 0 && (
          <div className="cyber-card p-8 text-center">
            <p className="font-mono text-xs text-cyber-muted">
              More projects coming soon.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-cyber-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs text-cyber-muted">
            © {new Date().getFullYear()} Franz Gil Sevilla
          </span>
          <Link
            href="/"
            className="font-mono text-xs text-cyber-cyan hover:underline"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
