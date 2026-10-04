import { ArrowRight, ArrowUpRight, FileText, ListChecks, HelpCircle } from 'lucide-react'
import { AUTHOR, PROJECT_NAME, PROJECT_URL } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="border-b border-border/70">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            A small web app by {AUTHOR}
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">{PROJECT_NAME}</h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Turns messy stand-up and client-call notes into a clean task list. Paste the notes, and it pulls out every
            action item with its owner, due date and the exact sentence it came from.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Try it live
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              See what it does
            </a>
          </div>
        </div>

        <FlowDiagram />
      </div>
    </section>
  )
}

function FlowDiagram() {
  return (
    <figure aria-label="Messy notes go in; a task list and a decisions list come out." className="relative">
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <FileText className="size-4" aria-hidden="true" />
          Messy notes
        </div>
        <div className="mt-4 space-y-2.5" aria-hidden="true">
          <div className="h-2 w-11/12 rounded-full bg-muted" />
          <div className="h-2 w-8/12 rounded-full bg-muted" />
          <div className="h-2 w-10/12 rounded-full bg-muted" />
          <div className="h-2 w-6/12 rounded-full bg-muted" />
        </div>
      </div>

      <div className="flex justify-center py-3" aria-hidden="true">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ArrowRight className="size-4 rotate-90" />
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-primary/30 bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
            <ListChecks className="size-4" aria-hidden="true" />
            Action items
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            {['Task', 'Owner', 'Due date', 'Source sentence'].map((field) => (
              <div key={field} className="flex items-center justify-between gap-3 rounded-md bg-secondary px-3 py-2">
                <dt className="text-secondary-foreground">{field}</dt>
                <dd className="h-1.5 w-12 rounded-full bg-primary/30" aria-hidden="true" />
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <HelpCircle className="size-4" aria-hidden="true" />
            Decisions
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Open questions, kept separate.</p>
          <div className="mt-4 flex gap-2 font-mono text-xs">
            <span className="rounded border border-border px-2 py-1">.md</span>
            <span className="rounded border border-border px-2 py-1">.csv</span>
          </div>
        </div>
      </div>
    </figure>
  )
}
