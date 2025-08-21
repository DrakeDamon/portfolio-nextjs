import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. Deployed on GitHub Pages.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/DrakeDamon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/drakedamon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/DrakeDamon/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            Source
          </Link>
        </div>
      </div>
    </footer>
  )
}