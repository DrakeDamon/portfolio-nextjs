import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-muted-foreground">
          Let&apos;s discuss data engineering opportunities and collaboration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">dddamon06@gmail.com</p>
            </div>
            
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground">(316) 609-8566</p>
            </div>
            
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted-foreground">Tampa, FL</p>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="w-full" asChild>
                <a href="mailto:dddamon06@gmail.com">
                  Send Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Social Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col space-y-4">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/drakedamon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/DrakeDamon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  GitHub Portfolio
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/resume"
                  className="w-full"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}