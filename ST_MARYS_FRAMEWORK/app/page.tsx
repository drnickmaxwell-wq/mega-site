import { SparkleButton } from '@/components/ui/SparkleButton';
import { WaveBackground } from '@/components/fx/WaveBackground';
import { ShimmerText } from '@/components/fx/ShimmerText';
import GlowCard from '@/components/fx/GlowCard';
import SEOHead from '@/components/seo/SEOHead';
import Link from 'next/link';
import '@/styles/tokens.css';

// SEO metadata & JSON-LD
export const metadata = {
  title: "St Mary’s House Dental Care – Luxury Coastal Dentistry",
  description: "Discover luxury, modern dentistry at St Mary’s House Dental Care in Shoreham-by-Sea. Book a consultation today.",
  openGraph: {
    title: "St Mary’s House Dental Care – Luxury Coastal Dentistry",
    description: "Discover luxury, modern dentistry at St Mary’s House Dental Care in Shoreham-by-Sea. Book a consultation today.",
    url: "https://smhdental.co.uk",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "St Mary’s House Dental Care",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <SEOHead />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-xl tracking-tight">St Mary’s House</span>
          <nav className="hidden md:flex gap-6">
            <Link href="#treatments">Treatments</Link>
            <Link href="#about">About</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 relative overflow-hidden">
        <WaveBackground className="opacity-60" />

        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32 lg:pt-40 pb-10">
          {/* Hero video */}
          <div className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-2xl shadow-lg mb-8">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/video/hero/hero-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/hero/hero.webm" type="video/webm" />
              <source src="/video/hero/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 pointer-events-none" />
          </div>

          <ShimmerText asChild>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Experience Luxury Coastal Dentistry
            </h1>
          </ShimmerText>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            State‑of‑the‑art technology meets spa‑like comfort. Your smile deserves nothing less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SparkleButton variant="primary" size="lg">
              Book a Consultation
            </SparkleButton>
            <SparkleButton variant="outline" size="lg">
              See 3D Dentistry
            </SparkleButton>
          </div>
        </section>

        {/* Stats Strip */}
        <section id="stats" className="relative z-10 bg-[var(--color-background)] py-8">
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold">5★</h3>
              <p className="text-sm">Google Rated</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Same‑Day</h3>
              <p className="text-sm">3D Dentistry</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">20+ Years</h3>
              <p className="text-sm">of Care</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Sedation</h3>
              <p className="text-sm">Available</p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="treatments" className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Signature Treatments</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Guided Implants</h3>
              <p className="text-sm">
                Precise implant placement using digital planning for optimal results.
              </p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Same‑Day Veneers</h3>
              <p className="text-sm">
                3D‑printed veneers for a smile makeover delivered in a single visit.
              </p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Spark Aligners</h3>
              <p className="text-sm">
                Nearly invisible aligners customised for comfort and rapid results.
              </p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Sedation Dentistry</h3>
              <p className="text-sm">
                Comfortable, anxiety‑free care with multiple sedation options.
              </p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-sm">
                Same‑day appointments for urgent dental issues when you need them most.
              </p>
            </GlowCard>
            <GlowCard>
              <h3 className="text-xl font-semibold mb-2">Digital Smile Planning</h3>
              <p className="text-sm">
                Visualise your future smile with advanced digital simulations.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative z-10 bg-[var(--color-background)] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <details className="border border-white/10 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">What makes SMH Dental different?</summary>
                <p className="mt-2 text-sm">We blend leading‑edge technology with a luxury, spa‑like experience to deliver exceptional care and comfort.</p>
              </details>
              <details className="border border-white/10 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">Do you offer sedation?</summary>
                <p className="mt-2 text-sm">Yes. We provide multiple sedation options to ensure patients with dental anxiety feel relaxed and safe.</p>
              </details>
              <details classTitle="border border-white/10 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">How quickly can I get veneers?</summary>
                <p className="mt-2 text-sm">Thanks to our 3D printing technology, many veneer cases can be completed in a single visit.</p>
              </details>
              <details className="border border-white/10 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">Do you see emergency patients?</summary>
                <p className="mt-2 text-sm">Absolutely. We reserve same‑day emergency appointments for urgent dental issues.</p>
              </details>
              <details className="border border-white/10 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">Where are you located?</summary>
                <p className="mt-2 text-sm">St Mary’s House Dental Care is in Shoreham‑by‑Sea, West Sussex, serving BN43 and surrounding towns.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Action Dock */}
      <nav aria-label="Action dock" className="fixed bottom-4 right-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 z-50">
        <a href="/contact#book" className="rounded-full p-3 bg-[var(--gradient-primary)] text-white shadow-lg hover:shadow-xl transition">Book</a>
        <a href="tel:+441273453109" className="rounded-full p-3 bg-[var(--color-magenta)] text-white shadow-lg hover:shadow-xl transition">Call</a>
        <a href="https://wa.me/{process.env.NEXT_PUBLIC_WHATSAPP}" className="rounded-full p-3 bg-[var(--color-turquoise)] text-white shadow-lg hover:shadow-xl transition">WhatsApp</a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full p-3 bg-[var(--color-gold)] text-white shadow-lg hover:shadow-xl transition">Top</button>
      </nav>

      {/* Footer */}
      <footer className="bg-[var(--color-background)] border-t border-white/10 py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} St Mary’s House Dental Care</p>
          <nav className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </footer>

      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes SMH Dental different?",
                "acceptedAnswer": { "@type": "Answer", "text": "We blend leading‑edge technology with a luxury, spa‑like experience to deliver exceptional care and comfort." }
              },
              {
                "@type": "Question",
                "name": "Do you offer sedation?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide multiple sedation options to ensure patients with dental anxiety feel relaxed and safe." }
              },
              {
                "@type": "Question",
                "name": "How quickly can I get veneers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Thanks to our 3D printing technology, many veneer cases can be completed in a single visit." }
              },
              {
                "@type": "Question",
                "name": "Do you see emergency patients?",
                "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We reserve same‑day emergency appointments for urgent dental issues." }
              },
              {
                "@type": "Question",
                "name": "Where are you located?",
                "acceptedAnswer": { "@type": "Answer", "text": "St Mary’s House Dental Care is in Shoreham‑by‑Sea, West Sussex, serving BN43 and surrounding towns." }
              }
            ]
          })
        }}
      />
    </div>
  );
}
