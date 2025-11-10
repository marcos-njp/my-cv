const skillCategories = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Laravel", "PHP", "Prisma"] },
  { category: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Tools", skills: ["Git", "VS Code", "GitHub Copilot", "Claude"] },
  { category: "Auth", skills: ["Auth.js", "OAuth 2.0", "JWT"] },
  { category: "Other", skills: ["REST APIs", "Vercel", "Neon"] },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-50">Experience & Education</h2>

        <div className="space-y-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-50">Education</h3>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 space-y-8">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">Bachelor of Science in Information Technology</h4>
                    <p className="text-gray-600 dark:text-gray-300">St. Paul University Philippines</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023 — Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Studying modern web development, software engineering, and AI technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-50">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillCategories.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-gray-50 mb-2 text-sm">{item.category}</h4>
                  <ul className="space-y-1">
                    {item.skills.map((skill) => (
                      <li key={skill} className="text-xs text-gray-600 dark:text-gray-400">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
