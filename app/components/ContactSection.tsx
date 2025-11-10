import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-50">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="mailto:justinpmarcos@gmail.com"
            className="px-6 py-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Email Me
          </Link>
          <Link
            href="https://github.com/marcos-njp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/niño-marcos/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  )
}
