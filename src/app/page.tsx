import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="scan-overlay">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsTeaser />
      <Certifications />
      <Contact />
    </main>
  );
}
