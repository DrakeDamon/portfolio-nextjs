import { Button } from "./ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          DAVID DAMON
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          DATA ENGINEER | GCP + DATABRICKS | BIGQUERY | MLflow | dbt | Terraform
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Cloud‑first, AI‑accelerated data engineer who builds production ETL/ELT on GCP and Databricks, 
          tracks models with MLflow, and surfaces results via APIs and UIs. I optimize reliability, observability, and cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg">
            <a 
              href="https://www.linkedin.com/in/drakedamon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a 
              href="https://github.com/DrakeDamon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>Tampa, FL • (316) 609-8566 • dddamon06@gmail.com</p>
        </div>
      </div>
    </section>
  )
}