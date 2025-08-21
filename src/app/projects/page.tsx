import { allCaseStudies } from 'content-collections'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ProjectsPage() {
  const publishedCaseStudies = allCaseStudies.filter(study => study.published)

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Deep dives into production data engineering solutions with measurable business impact.
        </p>
      </div>
      
      <div className="space-y-8">
        {publishedCaseStudies.map((study) => (
          <Card key={study.slug}>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">{study.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Role: {study.role}</span>
                <span>•</span>
                <span>{study.dates}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">{study.summary}</p>
              
              {/* Key Metrics */}
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Key Results:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technology Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button>
                  <Link href={`/projects/${study.slug}`}>
                    Read Case Study
                  </Link>
                </Button>
                {study.links?.repo && (
                  <Button variant="outline">
                    <a href={study.links.repo} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
                {study.links?.demo && (
                  <Button variant="outline">
                    <a href={study.links.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}