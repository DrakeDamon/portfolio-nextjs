import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'David Damon | Data Engineer — GCP · Databricks · BigQuery · dbt · MLflow · Terraform',
  description: 'Cloud-first, AI-accelerated data engineer who builds production ETL/ELT on GCP & Databricks, tracks models with MLflow, and ships results to UIs and APIs—optimized for reliability, observability, and cost.',
  keywords: 'Data Engineer, GCP, Google Cloud Platform, Databricks, BigQuery, dbt, MLflow, Terraform, Python, SQL, ETL, ELT, Machine Learning, Data Warehouse',
  authors: [{ name: 'David Damon' }],
  openGraph: {
    title: 'David Damon | Data Engineer',
    description: 'Cloud-first data engineer specializing in GCP, Databricks, and production ML pipelines.',
    url: 'https://daviddamon.dev',
    siteName: 'David Damon Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Damon | Data Engineer',
    description: 'Cloud-first data engineer specializing in GCP, Databricks, and production ML pipelines.',
  },
}

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "David Damon",
  "alternateName": "Drake Damon",
  "jobTitle": "Data Engineer",
  "email": "mailto:dddamon06@gmail.com",
  "telephone": "+1-316-609-8566",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/drakedamon",
    "https://github.com/DrakeDamon"
  ],
  "knowsAbout": ["Data Engineering", "GCP", "Databricks", "BigQuery", "dbt", "MLflow", "Terraform", "Python", "SQL"],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Friends University"
    },
    {
      "@type": "EducationalOrganization", 
      "name": "Flatiron School"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}