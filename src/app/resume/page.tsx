import Button from '@/components/ui/button'
import Card from '@/components/ui/card'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Resume</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
          Azure-focused, AI-accelerated data engineer building production lakehouses with reliability, observability, and cost control.
        </p>
        <Button href="/resume.pdf" className="mb-8">Download Resume (PDF)</Button>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-emerald-400">David Damon</h2>
          <p className="text-xl text-neutral-300 mb-4">Data Engineer — Azure Lakehouse (ADF · ADLS Gen2 · Databricks/Delta · dbt · Azure Monitor · GitHub Actions)</p>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400">
            <span>📍 Tampa, FL</span>
            <span>📧 dddamon06@gmail.com</span>
            <span>📞 (316) 609-8566</span>
            <span>🔗 linkedin.com/in/drakedamon</span>
            <span>💻 github.com/DrakeDamon</span>
          </div>
        </div>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Professional Summary</h3>
          <p className="text-neutral-300 mb-6">
            Azure, AI-accelerated data engineer building ADF ingest → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) → dbt Gold marts, operationalized with GitHub Actions, Service Principal + Secret Scopes (OAuth), and Azure Monitor alerts.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Azure Data Platform</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• ADF (Copy, triggers, params)</li>
                <li>• ADLS Gen2</li>
                <li>• Databricks (Spark, Delta)</li>
                <li>• Azure Monitor</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Data Engineering</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• PySpark/Spark, SQL (window functions)</li>
                <li>• Medallion (Bronze/Silver/Gold)</li>
                <li>• dbt (Core) & data contracts</li>
                <li>• Partition/cluster strategies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Ops & CI/CD</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• GitHub Actions, scheduled triggers</li>
                <li>• Alerts, structured logging, runbooks</li>
                <li>• ARM templates, Docker</li>
                <li>• Least-privilege IAM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Programming & Quality</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• Python 3.11, TypeScript</li>
                <li>• REST/JSON interop</li>
                <li>• dbt tests, Great Expectations</li>
                <li>• Secret Scopes (OAuth)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Key Achievements</h3>
          <ul className="text-neutral-300 space-y-2 mb-6">
            <li>• dbt tests: 14/14; 100% validation success</li>
            <li>• Query cost reduction: 80–90% via partition + clustering</li>
            <li>• Daily schedules: 06:00 & 18:00 with Azure Monitor alerts</li>
            <li>• React apps: ~40% median load time reduction</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Certifications</h3>
          <ul className="text-neutral-300 space-y-1 mb-6">
            <li>• AWS Certified Cloud Practitioner</li>
            <li>• Databricks Certified Data Engineer Associate</li>
          </ul>

          <div className="text-center mt-8">
            <Button href="/experience">View Detailed Experience</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
