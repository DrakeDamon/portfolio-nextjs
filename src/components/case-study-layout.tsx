import React from 'react'
import Badge from './ui/badge'
import Button from './ui/button'
import Card from './ui/card'
import Link from 'next/link'

interface Metric {
  label: string
  value: string
  description: string
}

interface CaseStudyLayoutProps {
  title: string
  summary: string
  role: string
  dates: string
  stack: string[]
  metrics: Metric[]
  links?: {
    repo?: string
    demo?: string
    dashboard?: string
  }
  children: React.ReactNode
  previousCase?: { title: string; slug: string }
  nextCase?: { title: string; slug: string }
}

export function CaseStudyLayout({
  title,
  summary,
  role,
  dates,
  stack,
  metrics,
  links,
  children,
  previousCase,
  nextCase
}: CaseStudyLayoutProps) {
  const sections = [
    { id: 'problem', title: 'Problem' },
    { id: 'constraints', title: 'Constraints' },
    { id: 'architecture', title: 'Architecture' },
    { id: 'pipeline-implementation', title: 'Pipeline Implementation' },
    { id: 'results-impact', title: 'Results & Impact' },
    { id: 'cost-performance', title: 'Cost & Performance' },
    { id: 'what-id-improve-next', title: "What I'd Improve Next" }
  ]

  return (
    <article className="container mx-auto max-w-4xl px-6 py-12">
      {/* Impact Strip */}
      <div className="mb-12">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">{summary}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Role: {role}</span>
            <span>•</span>
            <span>{dates}</span>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        {links && (
          <div className="flex flex-wrap gap-4 mb-8">
            {links.repo && (
              <Button href={links.repo} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">
                View Code
              </Button>
            )}
            {links.demo && (
              <Button href={links.demo} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">
                Live Demo
              </Button>
            )}
            {links.dashboard && (
              <Button href={links.dashboard} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">
                Dashboard
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Table of Contents */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contents</h2>
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline py-1"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {children}
      </div>

      {/* Navigation */}
      {(previousCase || nextCase) && (
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            {previousCase ? (
              <Link href={`/projects/${previousCase.slug}`} className="text-left">
                <div className="text-sm text-gray-500 dark:text-gray-400">Previous</div>
                <div className="text-blue-600 dark:text-blue-400 hover:underline">
                  {previousCase.title}
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextCase ? (
              <Link href={`/projects/${nextCase.slug}`} className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Next</div>
                <div className="text-blue-600 dark:text-blue-400 hover:underline">
                  {nextCase.title}
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}