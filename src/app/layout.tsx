import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franz Gil Sevilla | Cybersecurity Portfolio",
  description:
    "Detail-oriented Cybersecurity student specializing in network defense, vulnerability assessment, and cloud security. Technology Risk Consulting Intern at KPMG Philippines.",
  keywords: [
    "cybersecurity",
    "portfolio",
    "Franz Gil Sevilla",
    "network security",
    "ethical hacking",
    "vulnerability assessment",
    "KPMG",
    "Philippines",
  ],
  authors: [{ name: "Franz Gil Sevilla" }],
  openGraph: {
    title: "Franz Gil Sevilla | Cybersecurity Portfolio",
    description:
      "Cybersecurity student & Technology Risk Consulting Intern at KPMG Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
