import Card from '@/components/ui/card'
import Chip from '@/components/ui/chip'
import Badge from '@/components/ui/badge'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "R", "Java"]
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "PySpark", "Databricks", "Apache Kafka", "Apache Airflow", "Pandas", "Delta Lake", "Data Lakehouse"]
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Google Cloud Platform", "Azure", "Snowflake", "BigQuery", "Redshift"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "CI/CD", "Linux", "Shell Scripting"]
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "MLflow", "Feature Engineering", "Model Deployment"]
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs", "GraphQL", "HTML5", "CSS3"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch", "ClickHouse"]
  },
  {
    title: "Analytics & BI",
    skills: ["Tableau", "Power BI", "Looker", "Apache Superset", "Jupyter", "dbt", "Metabase"]
  }
]

const certifications = [
  "AWS Certified Solutions Architect",
  "AWS Certified Data Engineer",
  "Google Cloud Professional Data Engineer",
  "Databricks Certified Data Engineer Associate",
  "Snowflake SnowPro Core Certification"
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