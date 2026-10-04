import { AUTHOR, PROJECT_NAME, PROJECT_URL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {PROJECT_NAME} — made by <span className="font-medium text-foreground">{AUTHOR}</span>
        </p>
        <a
          href={PROJECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          action-item-extractor.ai.studio
        </a>
      </div>
    </footer>
  )
}
