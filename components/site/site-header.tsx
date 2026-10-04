import { ListChecks } from 'lucide-react'
import { PROJECT_URL } from '@/lib/site'

const links = [
  { href: '#features', label: 'What it does' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#why', label: 'Why it matters' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ListChecks className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm">Action Item Extractor</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={PROJECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Open the app
        </a>
      </div>
    </header>
  )
}
