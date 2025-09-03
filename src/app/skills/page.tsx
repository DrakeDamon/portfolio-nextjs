import Card from '@/components/ui/card'
import Chip from '@/components/ui/chip'
import Badge from '@/components/ui/badge'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Azure Data Platform",
    skills: [
      "Azure",
      "Azure Data Factory",
      "ADLS Gen2",
      "Databricks",
      "Delta Lake",
      "dbt",
      "Azure Monitor",
      "Service Principal (OAuth)",
      "Secret Scopes"
    ]
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "PySpark", "Pandas", "Medallion Architecture", "Data Contracts"]
  },
  {
    title: "Cloud & Ops",
    skills: ["GitHub Actions", "ARM Templates", "Docker", "Linux", "CI/CD", "Alerting"]
  },
  {
    title: "ML & Serving",
    skills: ["scikit-learn", "XGBoost", "MLflow", "Feature Engineering"]
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "REST APIs"]
  },
  {
    title: "Warehouses & BI",
    skills: ["BigQuery", "PostgreSQL", "Looker Studio", "Great Expectations", "Jupyter"]
  }
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Databricks Certified Data Engineer Associate"
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Skills & Technologies</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Technical expertise across the modern data stack, cloud platforms, and software development lifecycle.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <h2 className="text-2xl font-semibold mb-6 text-emerald-400">{category.title}</h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Professional Certifications</h2>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <Badge key={cert}>{cert}</Badge>
          ))}
        </div>
      </Card>
    </div>
  )
}
