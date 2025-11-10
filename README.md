# Niño Justin Marcos - Portfolio Website

A modern, responsive portfolio website showcasing my work, skills, and experience as a web developer and IT student at St. Paul University Philippines.

## 🚀 Features

- ✨ **Modern Design**: Clean, minimalist UI with smooth animations
- 🌗 **Dark/Light Mode**: Persistent theme toggle with system preference detection
- 📱 **Fully Responsive**: Mobile-first design optimized for all screen sizes
- ⚡ **Fast Performance**: Built with Next.js 15.2.4 and React 19
- 🎨 **Component-Based**: Modular architecture with reusable components
- 🔗 **Interactive Projects**: Clickable project cards linking to GitHub repositories
- 🎯 **Professional Layout**: Single-page design with smooth section transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Components**: Shadcn UI (Radix UI primitives)
- **Font**: Geist
- **Deployment**: Vercel-ready

## 📋 Portfolio Sections

### 1. Hero Section
- Professional introduction with name and title
- Current status as IT student at St. Paul University Philippines
- Quick overview of technical competencies
- Animated scroll indicator for smooth navigation

### 2. Projects Section
Featured projects with live GitHub links:
- **Person Search - OAuth Secured Edition**: Next.js 15.5 app with Google OAuth, Prisma ORM, PostgreSQL, and Auth.js
- **AI Agent Dev Setup**: Development environment verification for AI Agent workshop (Node.js, Git, VS Code, GitHub Copilot, Claude Desktop, MCP)
- **Movie App**: Laravel-based web application with PHP and MySQL

### 3. Experience & Education
- **Education**: Bachelor of Science in Information Technology (2023 - Present)
- **Technical Skills**:
  - **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Shadcn UI
  - **Backend**: Node.js, Laravel, PHP, Prisma
  - **Database**: PostgreSQL, MySQL, MongoDB
  - **Tools**: Git, VS Code, GitHub Copilot, Claude Desktop
  - **Authentication**: Auth.js, OAuth 2.0, JWT
  - **Design**: Adobe Photoshop, Illustrator, Premiere Pro, Lightroom, Figma
  - **Other**: REST APIs, Vercel, Neon, C++, Java, Python

### 4. Contact Section
- **Email**: justinpmarcos@gmail.com
- **GitHub**: [@marcos-njp](https://github.com/marcos-njp)
- **LinkedIn**: [Niño Marcos](https://www.linkedin.com/in/niño-marcos/)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marcos-njp/my-cv.git
cd my-cv
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
pnpm run build
pnpm run start
```

## 🎨 Project Structure

```
my-cv/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   │   ├── HeroSection.tsx  # Hero/intro section
│   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   ├── ExperienceSection.tsx  # Education & skills
│   │   ├── ContactSection.tsx  # Contact links
│   │   └── Footer.tsx       # Footer component
│   ├── hooks/
│   │   └── useTheme.ts      # Custom theme hook
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── favicon.ico          # Site favicon
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   ├── images/              # Profile and school images
│   │   ├── profile.png
│   │   └── spup.png
│   ├── logos/               # Technology logos
│   │   ├── java.png
│   │   ├── laravel.png
│   │   ├── mysql.png
│   │   ├── php.png
│   │   ├── python.png
│   │   └── typescript.png
│   └── icon.svg             # Site icon
├── components.json          # Shadcn UI configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
└── README.md
```

## 🌗 Dark/Light Mode Implementation

The theme system uses:
- **localStorage** for persistence across sessions
- **Custom React Hook** (`useTheme`) for state management
- **Tailwind CSS** dark mode classes (`dark:`)
- **System preference detection** on first visit
- **Inline script in layout.tsx** to prevent flash on page load

```typescript
// From useTheme.ts hook
const savedTheme = localStorage.getItem("theme-preference")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark)
setIsDark(shouldBeDark)
document.documentElement.classList.toggle("dark", shouldBeDark)

// From layout.tsx - prevents flash on page load
const isDark = localStorage.getItem('theme-preference') === 'dark' || 
  (!localStorage.getItem('theme-preference') && window.matchMedia('(prefers-color-scheme: dark)').matches);
document.documentElement.classList.toggle('dark', isDark);
```

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** interactive elements with proper spacing
- **Optimized typography** for readability on all devices

## ✨ Key Features Implementation

### 1. Animated Scroll Indicator
- Bouncing arrow animation on hero section
- Smooth scroll to projects section
- Built with Tailwind CSS animations

### 2. Clickable Project Cards
- Entire card is clickable (not just icon)
- Hover effects with shadow and color transitions
- Opens GitHub repositories in new tab
- GitHub icon indicator

### 3. Fixed Theme Toggle
- Always accessible in top-right corner
- Smooth icon transitions (sun/moon)
- Shadow effect for visual depth
- Persists user preference

### 4. Component-Based Architecture
- Separation of concerns for maintainability
- Reusable components across the application
- TypeScript for type safety
- Clean and organized code structure

## 🎯 Customization Guide

### Update Projects
Edit `app/components/ProjectsSection.tsx`:
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description here",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/username/repo",
  },
]
```

### Update Personal Info
- **Hero Section**: Edit `app/components/HeroSection.tsx` for name, title, and introduction
- **Skills & Education**: Edit `app/components/ExperienceSection.tsx` for technical skills and education
- **Contact Info**: Edit `app/components/ContactSection.tsx` for email and social links

### Modify Theme Colors
Edit `app/globals.css` CSS variables or update Tailwind classes in components:
```css
/* Example: Change primary colors */
.dark {
  --background: 0 0% 5%;
  --foreground: 0 0% 95%;
}
```

### Add New Sections
Create a new component in `app/components/` and import it in `app/page.tsx`:
```typescript
import NewSection from "./components/NewSection"

// Add to the main component
<NewSection />
```

## 📧 Contact

- **Email**: justinpmarcos@gmail.com
- **GitHub**: [@marcos-njp](https://github.com/marcos-njp)
- **LinkedIn**: [Niño Marcos](https://www.linkedin.com/in/niño-marcos/)

---

© 2025 Niño Justin Marcos. All rights reserved.
