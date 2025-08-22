"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
          David Damon
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/DrakeDamon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}