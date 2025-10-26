import Card from '@/components/ui/card'
import Chip from '@/components/ui/chip'
import Badge from '@/components/ui/badge'

const experiences = [
  {
    title: "React Engineer (Contract)",
    company: "DevSoft",
    location: "Tampa, FL",
    dates: "Jun 2022 – Present",
    description: "Built React apps with code-splitting, lazy-loading, and REST API integrations.",
    achievements: [
      "Built React apps with code-splitting, lazy-loading, and REST API integrations",
      "Reduced median load time by ~40% through performance optimizations"
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST APIs", "Performance Optimization"]
  },
  {
    title: "Biology Teacher",
    company: "Freedom High School (HCPS)",
    location: "Tampa, FL",
    dates: "Aug 2023 – Present",
    description: "Analyzed data for 150+ students, producing visualization/statistical reports.",
    achievements: [
      "Analyzed data for 150+ students, producing visualization/statistical reports",
      "Informed instruction for an 8-member team using data insights"
    ],
    technologies: ["Data Analysis", "Statistical Analysis", "Data Visualization", "Educational Analytics"]
  }
];

const certifications = ["AWS Certified Cloud Practitioner", "Databricks Certified Data Engineer Associate"];

const education = [
  {
    degree: "Full-Stack Web Development",
    school: "Flatiron School",
    year: "2025",
    details: "Python/Flask & JavaScript - Tampa, FL"
  },
  {
    degree: "Bachelor of Science in Biology",
    school: "Friends University",
    year: "2021",
    details: "Wichita, KS"
  }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Professional Experience</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Building scalable data solutions and driving business impact through data-driven insights.
        </p>
      </div>
      
      <div className="space-y-12 mb-16">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 text-emerald-400">{experience.title}</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-lg text-neutral-300">
                <span className="font-semibold">{experience.company}</span>
                <span className="hidden md:block">•</span>
                <span>{experience.location}</span>
                <span className="hidden md:block">•</span>
                <span className="text-neutral-400">{experience.dates}</span>
              </div>
            </div>
            
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">{experience.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Key Achievements</h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Badge key={cert} className="block w-full text-center py-3">{cert}</Badge>
            ))}
          </div>
        </Card>
        
        <Card>
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-b border-neutral-800 pb-4 last:border-b-0">
                <h3 className="text-xl font-semibold text-emerald-400">{edu.degree}</h3>
                <p className="text-lg text-neutral-300">{edu.school}</p>
                <p className="text-neutral-400">{edu.year}</p>
                <p className="text-sm text-neutral-400 mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
