import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Chip from '@/components/ui/chip'
import Metric from '@/components/ui/metric'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          David Damon
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
          ETL/ELT · Cloud Platforms (Azure, GCP) · Databricks/Spark/Delta · dbt · Monitoring · CI/CD
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Chip>Azure</Chip>
          <Chip>ADF</Chip>
          <Chip>Databricks/Delta</Chip>
          <Chip>dbt</Chip>
          <Chip>GitHub Actions</Chip>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">Get In Touch</Button>
        </div>
      </section>

      {/* Metrics Section (resume-aligned) */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Metric label="dbt Tests" value="14/14" />
          <Metric label="Cost Reduction" value="80–90%" />
          <Metric label="Daily Schedules" value="06:00 / 18:00" />
          <Metric label="App Users" value="1,000+" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <Card>
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">About Me</h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Data Engineer delivering production-grade lakehouses and analytics platforms across cloud environments. Experienced in orchestrating ETL/ELT pipelines, building medallion architectures, applying data quality frameworks, and operationalizing deployments with CI/CD and monitoring. Strong focus on clean architecture, profiling, config-driven pipelines, and clear documentation to ensure scalability and reliability.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Chip>Data Lakehouse</Chip>
            <Chip>ADF Pipelines</Chip>
            <Chip>Databricks Delta</Chip>
            <Chip>Azure Monitor</Chip>
          </div>
          <Button href="/experience">Learn More</Button>
        </Card>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-400">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">E-commerce Data Warehouse</h3>
            <p className="text-neutral-300 mb-4">
              Production-ready cloud-native data warehouse with Medallion Architecture processing 116K+ records with 58% intelligent deduplication.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip>GCP</Chip>
              <Chip>BigQuery</Chip>
              <Chip>dbt Core</Chip>
              <Chip>GitHub Actions</Chip>
              <Chip>Workload Identity</Chip>
            </div>
            <Button href="/projects/ecommerce-warehouse">View Case Study</Button>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Earthquakes Lakehouse (Azure)</h3>
            <p className="text-neutral-300 mb-4">
              ADF → ADLS Gen2 → Databricks Delta (B/S/G) with dbt Gold marts and Azure Monitor alerts.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip>Azure</Chip>
              <Chip>ADF</Chip>
              <Chip>ADLS Gen2</Chip>
              <Chip>Databricks/Delta</Chip>
              <Chip>dbt</Chip>
            </div>
            <Button href="/projects/earthquakes-lakehouse">View Case Study</Button>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Taxi Lakehouse (Azure)</h3>
            <p className="text-neutral-300 mb-4">
              ADF Copy → ADLS → Databricks Bronze/Silver with dbt Gold fact fct_taxi_daily and email alerts.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip>Azure</Chip>
              <Chip>ADF</Chip>
              <Chip>ADLS Gen2</Chip>
              <Chip>Databricks/Delta</Chip>
              <Chip>dbt</Chip>
            </div>
            <Button href="/projects/taxi-lakehouse">View Case Study</Button>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">Recruit Reveal - ML Model Serving</h3>
            <p className="text-neutral-300 mb-4">
              Low-latency XGBoost model serving on Databricks with MLflow tracking and Next.js frontend.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip>Databricks</Chip>
              <Chip>XGBoost</Chip>
              <Chip>MLflow</Chip>
              <Chip>Next.js</Chip>
            </div>
            <Button href="/projects/recruit-reveal">View Case Study</Button>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button href="/projects">View All Projects</Button>
        </div>
      </section>
    </div>
  )
}
