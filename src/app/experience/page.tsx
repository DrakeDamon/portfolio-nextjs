import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "React Engineer (Contract)",
    company: "DevSoft",
    period: "Jun 2022 – Present",
    description: "Built and maintained React apps for 1,000+ users; perf work (code-splitting, lazy-loading) cut median load time ~40%."
  },
  {
    title: "Biology Teacher", 
    company: "Freedom High School (HCPS)",
    period: "Aug 2023 – Present",
    description: "Analyzed performance data for 150+ students; viz/stat summaries informed instruction with an 8-member team."
  },
  {
    title: "CDL Driver",
    company: "FedEx Freight", 
    period: "2021 – 2023",
    description: "99.9% on-time delivery with rigorous documentation."
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Experience</h1>
        <p className="text-xl text-muted-foreground">Professional journey in data engineering and education</p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative pl-8 border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl">{exp.title}</CardTitle>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-medium">{exp.company}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg">AWS Certified Cloud Practitioner</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg">Databricks Certified Data Engineer Associate</h3>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg">Flatiron School (2025)</h3>
              <p className="text-muted-foreground">Full-Stack Web Development (Python/Flask & JavaScript)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg">Friends University (2021)</h3>
              <p className="text-muted-foreground">B.S., Biology</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}