import { allCaseStudies } from '@/data/case-studies'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from 'next/link'

export default function ProjectsPage() {
  const publishedCaseStudies = allCaseStudies.filter(study => study.published)

  return (
    <div className="container mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deep dives into production data engineering solutions with measurable business impact.
        </p>
      </div>
      
      <div className="space-y-8">
        {publishedCaseStudies.map((study, index) => (
          <Card key={study.slug} className="group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{study.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{study.role}</span>
                    <span>•</span>
                    <span>{study.dates}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{study.summary}</p>
              
              {/* Key Metrics */}
              <div>
                <h3 className="font-semibold mb-4">Key Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-secondary/30 rounded-xl border border-border/50 hover:bg-secondary/50 transition-colors">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div>
                <h3 className="font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href={`/projects/${study.slug}`} className="flex items-center gap-2">
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                {study.links?.repo && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={study.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {study.links?.demo && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={study.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
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