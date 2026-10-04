const steps = [
  {
    title: 'Paste your notes',
    body: 'Drop in the messy notes from a stand-up or client call, as they are.',
  },
  {
    title: 'Get a clean task list',
    body: 'Action items appear with owner, due date and source sentence. Open questions go to a separate decisions list.',
  },
  {
    title: 'Export',
    body: 'Download the result as Markdown or CSV.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-border/70 bg-muted/60">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">Three steps.</h2>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-primary pt-5">
              <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
