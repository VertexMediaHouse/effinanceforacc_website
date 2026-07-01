import Navbar from "../components/navbar";
import ServicesHero from "../components/services-hero";
import UniqueServices from "../components/unique-services";
import ServicesBlog from "../components/services-blog";
import Footer from "../components/footer";
import DifferentiatorCTA from "../components/differentiatorCTA";
import Testimonials from "../components/testimonials";
import Whychooseus from "../components/whychooseus";

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <UniqueServices />
      <Whychooseus />
      <Testimonials />
      <DifferentiatorCTA />
      <ServicesBlog />
      <Footer />
    </main>
  );
}
