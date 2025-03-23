import Hero from "@/components/home/Hero"
import ProblemStatement from "@/components/home/ProblemStatement"
import PrivacyProtection from "@/components/home/PrivacyProtection"
import AlternativesOverview from "@/components/home/AlternativesOverview"
import GuidesSection from "@/components/home/GuidesSection"
import CallToAction from "@/components/CallToAction"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <ProblemStatement />
      <PrivacyProtection />
      <AlternativesOverview />
      <GuidesSection />
      <CallToAction />
    </div>
  )
}

