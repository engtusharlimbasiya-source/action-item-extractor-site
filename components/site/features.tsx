import { CalendarClock, Download, HelpCircle, Quote, UserRound, ListChecks } from 'lucide-react'

const features = [
  {
    icon: ListChecks,
    title: 'Every action item',
    body: 'Pulls out each action item from stand-up and client-call notes into one clean task list.',
  },
  {
    icon: UserRound,
    title: 'Owner attached',
    body: 'Each task comes with the person responsible for it.',
  },
  {
    icon: CalendarClock,
    title: 'Due date attached',
    body: 'Each task keeps its due date, so deadlines stay visible.',
  },
  {
    icon: Quote,
    title: 'Exact source sentence',
    body: 'Every item shows the exact sentence it came from in your notes.',
  },
  {
    icon: HelpCircle,
    title: 'Separate decisions list',
    body: 'Open questions are kept in their own decisions list instead of mixing with tasks.',
  },
  {
    icon: Download,
    title: 'Markdown or CSV export',
    body: 'Export the results as Markdown or CSV to use wherever you work.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-b border-border/70">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">What it does</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            From a wall of notes to a list you can act on.
          </h2>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <li key={title} className="bg-card p-6">
              <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
