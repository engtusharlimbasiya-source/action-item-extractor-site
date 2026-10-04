import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Features } from '@/components/site/features'
import { HowItWorks } from '@/components/site/how-it-works'
import { WhyItMatters } from '@/components/site/why-it-matters'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyItMatters />
      </main>
      <SiteFooter />
    </>
  )
}
