import { HeroSection } from '@/components/hero-section'
import { FeaturedMetrics } from '@/components/featured-metrics'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedMetrics />
    </div>
  )
}