import IndustriesHero from "../components/industries-hero";
import IndustriesCaseStudies from "../components/industries-case-studies";
import Footer from "../components/footer";
import Testimonial from "../components/testimonials";
import Navbar from "../components/navbar";
import DifferentiatorCTA from "../components/differentiatorCTA";
import EngagementModel from "../components/engagement-model";
import ProcessOfWork from "../components/process-of-work";


export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <IndustriesHero />
      <IndustriesCaseStudies />
      <EngagementModel />
      <ProcessOfWork />
      <DifferentiatorCTA/>
      <Testimonial/>
      <Footer />
    </main>
  );
}
