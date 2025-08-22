import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Data Engineering",
    skills: ["PySpark", "Spark", "Databricks (SQL Warehouse, Unity Catalog, Delta)", "Data Lakehouse patterns", "Pandas"]
  },
  {
    title: "GCP",
    skills: ["BigQuery (partition/cluster)", "Cloud Run Jobs", "Cloud Scheduler", "GCS", "Secret Manager", "Cloud Logging"]
  },
  {
    title: "Ops & Orchestration",
    skills: ["Docker", "GitHub Actions CI/CD", "dbt (Core)", "Terraform", "Makefile workflows", "health checks", "anomaly alerts"]
  },
  {
    title: "MLOps",
    skills: ["MLflow (registry, aliases)", "XGBoost", "scikit-learn pipelines", "feature engineering & calibration"]
  },
  {
    title: "APIs & Frontend",
    skills: ["Node/Express REST", "Next.js", "React for data entry & results"]
  },
  {
    title: "AI-Assisted Development",
    skills: ["ChatGPT/Claude for scaffolding/refactors/test templates/runbooks", "guardrails (linters, CI tests, schema checks)"]
  }
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Databricks Certified Data Engineer Associate"
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Skills & Technologies</h1>
        <p className="text-xl text-muted-foreground">
          Technical expertise across the modern data stack and cloud platforms.
        </p>
      </div>
      
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge key={cert} variant="default">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}