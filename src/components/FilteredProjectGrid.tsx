"use client"

import { useMemo } from "react"
import { allCaseStudies, CaseStudy } from "@/data/case-studies"
import ProjectSpotlight from "@/components/ProjectSpotlight"
import ProjectMiniCard from "@/components/ProjectMiniCard"
import Button from "@/components/ui/button"

interface FilteredProjectGridProps {
  activeCategory: string
}

export default function FilteredProjectGrid({ activeCategory }: FilteredProjectGridProps) {
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return allCaseStudies.filter(project => project.published)
    }
    return allCaseStudies.filter(project => 
      project.published && project.category === activeCategory
    )
  }, [activeCategory])

  const spotlightProject = filteredProjects[0]
  const miniProjects = filteredProjects.slice(1, 3)

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-400">No projects found in this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {spotlightProject && (
        <ProjectSpotlight
          title={spotlightProject.title}
          subtitle={spotlightProject.summary}
          tags={spotlightProject.stack}
          caseStudyHref={`/projects/${spotlightProject.slug}`}
          repoHref={spotlightProject.links?.repo}
        />
      )}

      {miniProjects.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {miniProjects.map((project) => (
            <ProjectMiniCard
              key={project.slug}
              title={project.title}
              blurb={project.summary}
              tags={project.stack}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      )}

      {filteredProjects.length > 3 && (
        <div className="text-center">
          <p className="text-sm text-neutral-400 mb-4">
            Showing 3 of {filteredProjects.length} projects in this category
          </p>
          <Button href="/projects">View All Projects</Button>
        </div>
      )}
    </div>
  )
}



