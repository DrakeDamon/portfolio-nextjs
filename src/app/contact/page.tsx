import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Let's discuss data engineering opportunities and collaboration.
        </p>
      </div>
      
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Email</p>
            <p className="text-gray-600 dark:text-gray-300">dddamon06@gmail.com</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
            <p className="text-gray-600 dark:text-gray-300">(316) 609-8566</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Location</p>
            <p className="text-gray-600 dark:text-gray-300">Tampa, FL</p>
          </div>
          
          <div className="pt-4">
            <Button size="lg" className="w-full">
              <a href="mailto:dddamon06@gmail.com">
                Send Email
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-4 pt-2">
            <Button variant="outline">
              <a
                href="https://www.linkedin.com/in/drakedamon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline">
              <a
                href="https://github.com/DrakeDamon"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}