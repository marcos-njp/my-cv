# Niño Justin Marcos - Portfolio Website

A modern, responsive portfolio website showcasing my work, skills, and experience as a web developer and IT student at St. Paul University Philippines.

![Portfolio Preview](./docs/screenshots/hero-light.png)

## 🤖 AI-Assisted Development with v0.dev

This portfolio was developed with assistance from **v0.dev by Vercel** and **Windsurf IDE with Cascade AI**, leveraging AI to accelerate development while maintaining full control over the codebase.

### AI Generation Approach

1. **Initial Design Concept**: Started with v0.dev to generate the base portfolio layout and component structure
2. **Component Architecture**: Used AI to help refactor into modular, reusable React components
3. **Styling & Theming**: AI-assisted implementation of dark/light mode with Tailwind CSS
4. **Code Optimization**: Iterative improvements with AI suggestions for best practices
5. **Responsive Design**: AI-guided mobile-first approach ensuring cross-device compatibility

### Why AI-Assisted Development?

- ⚡ **Faster Prototyping**: Quickly iterate on design ideas and implementations
- 🎯 **Best Practices**: AI suggests modern React patterns and TypeScript conventions
- 🔧 **Problem Solving**: Instant help with debugging and optimization
- 📚 **Learning**: Understand new concepts through AI explanations and examples

## 🚀 Features

- ✨ **Modern Design**: Clean, professional UI with smooth scroll animations
- 🌗 **Dark/Light Mode**: Persistent theme toggle with localStorage
- 📱 **Fully Responsive**: Mobile-first design optimized for all screen sizes
- ⚡ **Fast Performance**: Built with Next.js 15.2.4 for optimal speed
- 🎨 **Component-Based**: Modular architecture for easy maintenance
- 🔗 **Real Projects**: Links to actual GitHub repositories
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Font**: Geist (Google Fonts)
- **Deployment**: Vercel-ready
- **Version Control**: Git & GitHub

## 📋 Sections

### 1. **Hero Section**
- Name and title with animated scroll indicator
- Current status and location
- Quick skills overview
- Smooth scroll navigation to projects

### 2. **Projects Section**
- **Person Search App**: Next.js 15.5 with OAuth authentication, Prisma, PostgreSQL
- **AI Agent Dev Setup**: Development environment verification for AI workshops
- **Movie App**: Laravel-based web application
- All cards are clickable and link to GitHub repositories

### 3. **Experience & Education**
- Bachelor of Science in Information Technology (2023 - Present)
- Technical skills organized by category:
  - Frontend: React, Next.js, TypeScript, Tailwind CSS
  - Backend: Node.js, Laravel, PHP, Prisma
  - Database: PostgreSQL, MySQL, MongoDB
  - Tools: Git, VS Code, GitHub Copilot, Claude
  - Auth: Auth.js, OAuth 2.0, JWT
  - Other: REST APIs, Vercel, Neon

### 4. **Contact Section**
- Email: justinpmarcos@gmail.com
- GitHub: [@marcos-njp](https://github.com/marcos-njp)
- LinkedIn: [Niño Marcos](https://www.linkedin.com/in/niño-marcos/)

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
