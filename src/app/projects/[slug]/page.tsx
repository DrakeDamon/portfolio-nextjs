import { allCaseStudies } from '@/data/case-studies'
import { CaseStudyLayout } from '@/components/case-study-layout'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allCaseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const caseStudy = allCaseStudies.find((study) => study.slug === params.slug)
  
  if (!caseStudy) {
    return {}
  }

  return {
    title: `${caseStudy.title} | David Damon`,
    description: caseStudy.summary,
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = allCaseStudies.find((study) => study.slug === params.slug)
  
  if (!caseStudy) {
    notFound()
  }

  // Find previous and next case studies
  const currentIndex = allCaseStudies.findIndex((study) => study.slug === params.slug)
  const previousCase = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : undefined
  const nextCase = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : undefined

  return (
    <CaseStudyLayout
      title={caseStudy.title}
      summary={caseStudy.summary}
      role={caseStudy.role}
      dates={caseStudy.dates}
      stack={caseStudy.stack}
      metrics={caseStudy.metrics}
      links={caseStudy.links}
      previousCase={previousCase ? { title: previousCase.title, slug: previousCase.slug } : undefined}
      nextCase={nextCase ? { title: nextCase.title, slug: nextCase.slug } : undefined}
    >
      <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
    </CaseStudyLayout>
  )
}