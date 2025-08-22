import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Resume</h1>
        <p className="text-xl text-muted-foreground">Download my complete professional resume</p>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">David (Drake) Damon</CardTitle>
          <p className="text-lg text-muted-foreground">Data Engineer — GCP · Databricks · BigQuery · dbt · MLflow · Terraform</p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4 mb-8">
            <p><strong>Location:</strong> Tampa, FL</p>
            <p><strong>Email:</strong> dddamon06@gmail.com</p>
            <p><strong>Phone:</strong> (316) 609-8566</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/drakedamon" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/DrakeDamon" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub
              </a>
            </div>
          </div>
          
          <Button size="lg" className="mb-4">
            <a href="mailto:dddamon06@gmail.com?subject=Resume Request" className="flex items-center gap-2">
              Request Resume PDF
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            PDF resume available upon request. Contains detailed project descriptions, 
            technical skills matrix, and professional references.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Cloud-first, AI-accelerated data engineer who builds production ETL/ELT on GCP & Databricks, 
            tracks models with MLflow, and ships results to UIs and APIs—optimized for reliability, 
            observability, and cost.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}