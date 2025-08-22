import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Get In Touch</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Let's discuss data engineering opportunities, collaboration on projects, or just connect!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-neutral-300">Email</p>
                <a href="mailto:dddamon06@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  dddamon06@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-neutral-300">Phone</p>
                <a href="tel:+13166098566" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  (316) 609-8566
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-neutral-300">Location</p>
                <p className="text-neutral-400">Tampa, FL</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Connect Online</h3>
            <div className="flex flex-wrap gap-4">
              <Button href="https://www.linkedin.com/in/drakedamon/" className="flex items-center gap-2">
                LinkedIn
              </Button>
              <Button href="https://github.com/DrakeDamon" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 flex items-center gap-2">
                GitHub
              </Button>
            </div>
          </div>
        </Card>
        
        <Card>
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">What I'm Looking For</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">🚀 Data Engineering Roles</h3>
              <p className="text-neutral-300">Opportunities to build scalable data pipelines, implement MLOps, and work with modern data stack technologies.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">🤝 Collaboration</h3>
              <p className="text-neutral-300">Open source projects, data engineering consulting, or technical mentoring opportunities.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">💡 Learning & Growth</h3>
              <p className="text-neutral-300">Always interested in discussing new technologies, data architecture patterns, and industry best practices.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Preferred Contact</h3>
            <p className="text-neutral-300 mb-4">
              Feel free to reach out via email or LinkedIn. I typically respond within 24-48 hours.
            </p>
            <Button href="mailto:dddamon06@gmail.com?subject=Portfolio Contact" className="w-full">
              Send Email
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}