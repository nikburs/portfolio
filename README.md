# Franz Gil Sevilla — Cybersecurity Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, deployed on **Vercel**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Bebas Neue (display), Outfit (body), JetBrains Mono (code)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, animations, CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
├── components/
│   ├── Navbar.tsx         # Fixed navigation with active section tracking
│   ├── Hero.tsx           # Hero with matrix rain canvas + typewriter
│   ├── About.tsx          # Summary, contact info, education
│   ├── Experience.tsx     # Timeline of work experience
│   ├── Skills.tsx         # Skill categories grid
│   ├── Certifications.tsx # Badge grid with hover effects
│   └── Contact.tsx        # Contact links + footer
└── data/
    └── resume.ts          # All resume data (single source of truth)
public/
└── badges/                # Certification badge images
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables required.

## ✏️ Updating Content

All personal information lives in **`src/data/resume.ts`**. Edit that file to update:
- Personal info (name, email, phone, location)
- Work experience
- Education details
- Skills
- Certifications

To add new badge images, place `.png` files in `public/badges/` and reference them in `resume.ts`.
