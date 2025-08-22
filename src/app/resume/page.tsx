import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Resume</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
          Download my resume to learn more about my professional background and technical expertise.
        </p>
        <Button href="/resume.pdf" className="mb-8">Download Resume (PDF)</Button>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-emerald-400">David Damon</h2>
          <p className="text-xl text-neutral-300 mb-4">Data Engineer | GCP + Databricks | BigQuery | MLflow | dbt | Terraform</p>
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
            Cloud-first, AI-accelerated data engineer who builds production ETL/ELT on GCP and Databricks, tracks models 
            with MLflow, and surfaces results via APIs and UIs. I optimize for reliability, observability, and cost.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Data Engineering</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• ETL/ELT Pipeline Development</li>
                <li>• Real-time Data Processing</li>
                <li>• Data Warehouse Architecture</li>
                <li>• Stream Processing (Kafka, Spark)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Cloud & DevOps</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• AWS/GCP/Azure Cloud Architecture</li>
                <li>• Infrastructure as Code (Terraform)</li>
                <li>• Containerization (Docker, Kubernetes)</li>
                <li>• CI/CD Pipeline Implementation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Machine Learning</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• ML Model Development & Deployment</li>
                <li>• Feature Engineering & Selection</li>
                <li>• Model Monitoring & A/B Testing</li>
                <li>• MLOps Best Practices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">Full Stack Development</h4>
              <ul className="text-neutral-300 space-y-1">
                <li>• React/Next.js Frontend Development</li>
                <li>• Node.js/Python Backend APIs</li>
                <li>• Database Design & Optimization</li>
                <li>• System Architecture & Design</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Key Achievements</h3>
          <ul className="text-neutral-300 space-y-2 mb-6">
            <li>• Built real-time analytics infrastructure processing 100k+ events per minute with 99.9% uptime</li>
            <li>• Architected serverless ETL systems resulting in $200k+ annual cost savings</li>
            <li>• Developed ML recommendation engine improving user engagement by 40% and revenue by $2M</li>
            <li>• Led data platform modernization improving data quality by 95% and reducing query times by 60%</li>
            <li>• Mentored junior engineers and established data engineering best practices across teams</li>
          </ul>
          
          <div className="text-center mt-8">
            <Button href="/experience">View Detailed Experience</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}