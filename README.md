# Niño Justin Marcos - Portfolio Website

A modern, responsive portfolio website showcasing my work, skills, and experience as a web developer and IT student at St. Paul University Philippines.

![Portfolio Preview](./docs/screenshots/hero-light.png)

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
- **Theme**: next-themes for dark/light mode
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
git clone https://github.com/marcos-njp/mycv-portfolio-wk2.git
cd mycv-portfolio-wk2
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
mycv-portfolio-wk2/
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
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (30 lines!)
├── public/                  # Static assets
├── docs/
│   └── screenshots/         # Portfolio screenshots
└── README.md
```

## 🌗 Dark/Light Mode Implementation

The theme system uses:
- **localStorage** for persistence
- **Custom React Hook** (`useTheme`) for state management
- **Tailwind CSS** dark mode classes
- **System preference detection** on first visit

```typescript
// Example from useTheme.ts
const savedTheme = localStorage.getItem("theme-preference")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark)
```

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly** interactive elements
- **Optimized typography** for readability on all devices

## ✨ Key Features Implementation

### 1. Animated Scroll Indicator
- Bouncing arrow on hero section
- Smooth scroll to projects section
- Built with Tailwind animations

### 2. Clickable Project Cards
- Entire card is clickable (not just icon)
- Hover effects with shadow and color transitions
- Opens GitHub repos in new tab

### 3. Fixed Theme Toggle
- Always accessible in top-right corner
- Smooth icon transitions
- Shadow effect for depth

### 4. Component-Based Architecture
- Separation of concerns
- Easy to maintain and update
- Reusable across projects

## 🎯 Customization Guide

### Update Projects
Edit `app/components/ProjectsSection.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["Tech", "Stack"],
    link: "https://github.com/username/repo",
  },
]
```

### Update Personal Info
- **Hero**: `app/components/HeroSection.tsx`
- **Skills**: `app/components/ExperienceSection.tsx`
- **Contact**: `app/components/ContactSection.tsx`

### Modify Theme Colors
Edit `app/globals.css` CSS variables or Tailwind classes in components.

## 📸 Screenshots

### Light Mode
![Light Mode](./docs/screenshots/hero-light.png)
![Projects Light](./docs/screenshots/projects-light.png)

### Dark Mode
![Dark Mode](./docs/screenshots/hero-dark.png)
![Projects Dark](./docs/screenshots/projects-dark.png)

### Mobile Responsive
![Mobile View](./docs/screenshots/mobile-view.png)

## 📧 Contact

- **Email**: justinpmarcos@gmail.com
- **GitHub**: [@marcos-njp](https://github.com/marcos-njp)
- **LinkedIn**: [Niño Marcos](https://www.linkedin.com/in/niño-marcos/)

## 🙏 Acknowledgments

- **v0.dev by Vercel** - AI-powered UI generation
- **Windsurf IDE** - AI-assisted development environment
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework

## 📄 License

© 2025 Niño Justin Marcos. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and AI assistance**
