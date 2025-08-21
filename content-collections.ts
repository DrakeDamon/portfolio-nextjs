import { defineCollection, defineConfig } from 'content-collections'
import { z } from 'zod'

const caseStudies = defineCollection({
  name: 'caseStudies',
  directory: 'content/case-studies',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    role: z.string(),
    dates: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string()
    })),
    links: z.object({
      repo: z.string().optional(),
      demo: z.string().optional(),
      dashboard: z.string().optional()
    }).optional(),
    heroImage: z.string().optional(),
    published: z.boolean().default(true)
  }),
  transform: (document, context) => ({
    ...document,
    url: `/projects/${document.slug}`
  })
})

export default defineConfig({
  collections: [caseStudies]
})