import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
