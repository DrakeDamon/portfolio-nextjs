import Card from '@/components/ui/card'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import Chip from '@/components/ui/chip'
import Metric from '@/components/ui/metric'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Earthquakes Lakehouse (Azure)",
      summary: "ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) with dbt marts (eq_daily_metrics, eq_top100) and Azure Monitor alerts.",
      role: "Data Engineer",
      dates: "2024",
      metrics: [
        { label: "ADF Schedule", value: "18:00" },
        { label: "Medallion", value: "B/S/G" },
        { label: "Quality", value: "dbt tests" },
        { label: "Alerts", value: "Azure Monitor" }
      ],
      stack: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions", "Azure Monitor"],
      slug: "earthquakes-lakehouse",
      caseStudyHref: "https://github.com/DrakeDamon/azure-mini-quake/blob/main/README.md",
      codeHref: "https://github.com/DrakeDamon/azure-mini-quake"
    },
    {
      title: "Taxi Lakehouse (Azure)",
      summary: "End-to-end ADF Copy to ADLS, Databricks Bronze/Silver, and dbt Gold fact fct_taxi_daily with failure email alerts.",
      role: "Data Engineer",
      dates: "2024",
      metrics: [
        { label: "ADF Schedule", value: "06:00" },
        { label: "Layers", value: "Bronze/Silver" },
        { label: "Gold", value: "fct_taxi_daily" },
        { label: "Alerts", value: "Email" }
      ],
      stack: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions"],
      slug: "taxi-lakehouse",
      caseStudyHref: "https://github.com/DrakeDamon/azure-mini-taxi/blob/main/README.md",
      codeHref: "https://github.com/DrakeDamon/azure-mini-taxi"
    },
    {
      title: "SEC EDGAR Financials Warehouse",
      summary: "Built a production-style lakehouse processing SEC financial data with dbt models, data quality gates, and cost optimization through partitioning and clustering.",
      role: "Data Engineer",
      dates: "2024",
      metrics: [
        { label: "Cost Reduction", value: "80-90%" },
        { label: "Data Quality", value: "100%" },
        { label: "dbt Tests", value: "14/14" },
        { label: "Daily Refresh", value: "06:00 UTC" }
      ],
      stack: ["GCP", "BigQuery", "dbt", "Great Expectations", "GitHub Actions", "Looker Studio"],
      slug: "sec-edgar-warehouse"
    },
    {
      title: "Cloud-Native Crypto ETL",
      summary: "Serverless ETL pipeline ingesting CoinGecko data with automated validation, Terraform infrastructure, and cost-optimized BigQuery queries.",
      role: "Data Engineer",
      dates: "2024",
      metrics: [
        { label: "Monthly Cost", value: "$2.36" },
        { label: "Automation", value: "100%" },
        { label: "Data Quality", value: "Validated" },
        { label: "Infrastructure", value: "IaC" }
      ],
      stack: ["Cloud Run Jobs", "Cloud Scheduler", "BigQuery", "dbt", "Terraform", "Great Expectations"],
      slug: "crypto-etl"
    },
    {
      title: "Recruit Reveal - ML Model Serving",
      summary: "Low-latency XGBoost model serving on Databricks with MLflow tracking, SQL UDFs, and Next.js frontend for sports recruitment predictions.",
      role: "ML Engineer",
      dates: "2024",
      metrics: [
        { label: "Model Type", value: "XGBoost" },
        { label: "Serving", value: "SQL UDF" },
        { label: "Latency", value: "Low" },
        { label: "MLflow", value: "@production" }
      ],
      stack: ["Databricks", "SQL Warehouse", "Unity Catalog", "XGBoost", "MLflow", "Node.js", "Next.js"],
      slug: "recruit-reveal"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Case Studies</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Deep dives into production data engineering solutions with measurable business impact.
        </p>
      </div>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card key={project.slug}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 text-emerald-400">{project.title}</h2>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <span>{project.role}</span>
                <span>•</span>
                <span>{project.dates}</span>
              </div>
            </div>
            
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">{project.summary}</p>
            
            {/* Key Metrics */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-emerald-400">Key Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.metrics.map((metric, index) => (
                  <Metric key={index} label={metric.label} value={metric.value} />
                ))}
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button href={(project as any).caseStudyHref ?? `/projects/${project.slug}`}>Read Case Study</Button>
              {Boolean((project as any).codeHref) && (
                <Button href={(project as any).codeHref} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">View Code</Button>
              )}
              {Boolean((project as any).codeHref) && (
                <Button href={`${(project as any).codeHref}/stargazers`} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">⭐ Star Repo</Button>
              )}
              <Button href={(project as any).demoHref ?? "/resume"} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">Resume (PDF)</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
