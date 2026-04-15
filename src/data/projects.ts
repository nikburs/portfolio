export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  context: string; // Where/when it was built
  highlights: string[]; // Key features / bullet points
  tags: string[]; // Tech stack / skill tags
  status: "completed" | "in-progress" | "archived";
  github?: string; // Optional — leave undefined to hide the button
  demo?: string; // Optional — leave undefined to hide the button
  image?: string; // Optional — path like "/projects/vapt-automator.png"
  featured?: boolean; // Shows a highlight badge
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI VAPT Automator",
    subtitle: "Automated Vulnerability Assessment & Reporting Tool",
    description:
      "An internal tool built during my internship at KPMG Philippines that streamlines the vulnerability assessment reporting workflow. The app ingests a Nessus CSV export, runs AI-assisted validation on each finding, executes Windows terminal commands to verify vulnerabilities live, and auto-captures terminal screenshots as evidence — then packages everything into a formatted KPMG Excel report ready for internal use.",
    context: "KPMG (R.G. Manabat & Co.) · Technology Risk Consulting · 2025–2026",
    highlights: [
      "Parses and validates Nessus CSV scan outputs using AI to filter false positives and classify severity",
      "Executes automated Windows terminal commands to actively verify reported vulnerabilities",
      "Captures terminal screenshots programmatically and attaches them as evidence in the report",
      "Generates a structured KPMG-formatted Excel report aligned with internal reporting standards",
      "Reduced manual reporting effort significantly, accelerating the advisory team's workflow",
    ],
    tags: [
      "Python",
      "AI Integration",
      "Nessus",
      "Vulnerability Assessment",
      "Excel Automation",
      "Screenshot Capture",
      "VAPT",
      "Security Reporting",
    ],
    status: "completed",
    featured: true,
    // github: "https://github.com/...",  // Uncomment and fill in when ready
    // demo: "https://...",               // Uncomment and fill in when ready
    // image: "/projects/vapt-automator.png", // Add a screenshot here if you have one
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HOW TO ADD A NEW PROJECT — just copy the block below, uncomment it,
  // and fill in your details. All fields marked with ? are optional.
  // ─────────────────────────────────────────────────────────────────────────
  //
  // {
  //   id: 2,
  //   title: "Your Project Title",
  //   subtitle: "One-line description",
  //   description: "A few sentences about what the project does and why you built it.",
  //   context: "Personal Project · 2026",
  //   highlights: [
  //     "Key feature or achievement #1",
  //     "Key feature or achievement #2",
  //   ],
  //   tags: ["React", "TypeScript", "Node.js"],
  //   status: "completed",        // "completed" | "in-progress" | "archived"
  //   featured: false,
  //   github: "https://github.com/your-username/your-repo",
  //   demo: "https://your-demo-link.vercel.app",
  //   image: "/projects/your-screenshot.png",
  // },
];
