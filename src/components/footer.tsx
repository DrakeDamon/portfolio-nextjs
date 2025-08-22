export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <p className="text-sm text-neutral-400">
            © 2024 David Damon. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/DrakeDamon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/drakedamon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dddamon06@gmail.com"
              className="text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}