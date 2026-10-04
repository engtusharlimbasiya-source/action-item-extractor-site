import { ArrowUpRight } from 'lucide-react'
import { PROJECT_URL } from '@/lib/site'

export function WhyItMatters() {
  return (
    <section id="why" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="text-sm font-medium text-primary">Why it matters</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          A daily chore, cut down. Commitments, kept.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-sm text-muted-foreground">Turning notes into tasks</p>
            <div className="mt-4 flex items-end gap-4">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-muted-foreground line-through decoration-2">
                  15 min
                </p>
                <p className="mt-1 text-xs text-muted-foreground">before</p>
              </div>
              <div>
                <p className="text-5xl font-semibold tracking-tight text-primary">~2 min</p>
                <p className="mt-1 text-xs text-muted-foreground">with the extractor</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              It cuts a 15-minute daily chore to about two minutes.
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-xl bg-primary p-8 text-primary-foreground">
            <p className="text-pretty text-2xl font-medium leading-snug">
              It stops commitments from getting lost.
            </p>
            <p className="mt-6 text-sm leading-relaxed opacity-85">
              Every task keeps its owner, due date and the exact sentence it came from.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-secondary p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-secondary-foreground">See it or read more</h3>
            <p className="mt-1 break-all font-mono text-sm text-muted-foreground">{PROJECT_URL}</p>
          </div>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open the app
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
