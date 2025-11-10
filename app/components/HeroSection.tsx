export default function HeroSection() {
  return (
    <header className="min-h-screen flex items-center relative">
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono tracking-wider">PORTFOLIO / 2025</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-gray-50">
              Niño Justin
              <br />
              <span className="text-gray-500 dark:text-gray-400">Marcos</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Web Developer crafting digital experiences at the intersection of
              <span className="text-gray-900 dark:text-gray-50"> design</span>,
              <span className="text-gray-900 dark:text-gray-50"> technology</span>, and
              <span className="text-gray-900 dark:text-gray-50"> user experience</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div>Philippines</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">CURRENTLY</div>
            <div className="space-y-2">
              <div className="text-gray-900 dark:text-gray-50">Student</div>
              <div className="text-gray-600 dark:text-gray-300">@ St. Paul University Philippines</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2023 — Present</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">SKILLS</div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <svg
          className="w-6 h-6 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </header>
  )
}
