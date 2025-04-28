'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Louis Swaans"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="heading mb-4">Louis Swaans</h1>
              <p className="subheading mb-4">Full Stack Developer & IT Specialist</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2" />
                <a href="tel:+32479016294" className="hover:text-primary">+32 479 016 294</a>
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/khasugha" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/louis-swaans-519b602a1/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:swaanslouis@qq.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg">
                Computers have been my passion since I was a young child, studying a variety of topics and making various projects. From writing websites to assembling computers and setting up networks, I've always been fascinated by the endless possibilities of technology.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 
                  'TypeScript', 
                  'Node.js', 
                  'Python', 
                  'C#', 
                  'ASP.NET', 
                  'SQL', 
                  'Git', 
                  'Docker', 
                  'Network Setup', 
                  'Computer Building', 
                  'Virtualization', 
                  'Hardware Troubleshooting', 
                  'System Administration'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <h2 className="heading mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Personal CV Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern, responsive CV website built with Next.js, TypeScript, and Tailwind CSS. Features include dark mode and a clean, professional design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/khasugha/swaanslouis"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frontline Games Webshop</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A basic webshop built with Flask and Python, featuring user authentication, product management, and shopping cart functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'Flask', 'SQL', 'HTML/CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/khasugha/frontline-games"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Asteroids Game</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A classic Asteroids game recreated in Unity, featuring smooth controls, particle effects, and score tracking. Built with C# and Unity's game engine.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['C#', 'Unity', 'Game Development', 'ShaderLab'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/khasugha/Asteroids"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading mb-8">Professional Availability</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8">
              Open to new opportunities in software development and IT consulting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:swaanslouis@qq.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/louis-swaans-519b602a1/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
            <div className="mt-6 text-gray-600 dark:text-gray-400">
              <p className="flex items-center justify-center">
                <FaPhone className="mr-2" />
                <a href="tel:+32479016294" className="hover:text-primary">+32 479 016 294</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 