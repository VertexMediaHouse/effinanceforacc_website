import IndustriesHero from "../components/industries-hero";
import IndustriesCaseStudies from "../components/industries-case-studies";
import ServicesCta from "../components/services-cta";
import Footer from "../components/footer";
import Testimonial from "../components/testimonials";

export default function Industries() {
  return (
    <main className="min-h-screen">
      <IndustriesHero />
      <IndustriesCaseStudies />
      <ServicesCta />
      <Testimonial/>
      <Footer />
    </main>
  );
}
