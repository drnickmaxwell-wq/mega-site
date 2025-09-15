import WaveBackground from '@/components/fx/WaveBackground'
import { ShimmerText } from '@/components/fx/ShimmerText'
import { GlowCard } from '@/components/fx/GlowCard'
import { ParallaxSection } from '@/components/fx/ParallaxSection'
import SparkleButton from '@/components/ui/SparkleButton'

export const dynamic = 'force-static'

export default function LightPreview() {
  return (
    <div className="min-h-screen" data-theme="light">
      <WaveBackground />
      <header className="relative z-10 py-8">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-semibold">Light Theme Preview</h1>
        </div>
      </header>
      <main className="relative z-10 container mx-auto px-4 py-16 space-y-24">
        <section className="text-center space-y-6">
          <ShimmerText as="h1" className="text-5xl font-bold tracking-tight">
            Experience Luxury Dentistry
          </ShimmerText>
          <p className="max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
            This is a preview of our light theme with sparkly effects and shimmering components.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <SparkleButton size="lg">Book a Consultation</SparkleButton>
            <SparkleButton variant="outline" size="lg">Explore Services</SparkleButton>
          </div>
        </section>
        <ParallaxSection className="space-y-12">
          <GlowCard>
            <h2 className="text-2xl font-semibold mb-2">Glow Card Title</h2>
            <p>
              This card showcases a subtle glow and shimmer effect on hover, demonstrating our luxury
              UI components.
            </p>
          </GlowCard>
          <GlowCard>
            <h2 className="text-2xl font-semibold mb-2">Another Card</h2>
            <p>
              Combine parallax scrolling with glowing cards to create engaging, dynamic layouts that
              feel both elegant and modern.
            </p>
          </GlowCard>
        </ParallaxSection>
      </main>
    </div>
  )
}
