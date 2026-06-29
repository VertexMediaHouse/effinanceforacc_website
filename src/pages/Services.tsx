import ServicesHero from "../components/services-hero";
import UniqueServices from "../components/unique-services";
import ServicesWhyBest from "../components/services-why-best";
import ServicesStats from "../components/services-stats";
import ServicesTestimonials from "../components/services-testimonials";
import ServicesClients from "../components/services-clients";
import ServicesBlog from "../components/services-blog";
import ServicesCta from "../components/services-cta";
import ServicesFooter from "../components/services-footer";

export default function Services() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <UniqueServices />
      <ServicesWhyBest />
      {/* <ServicesStats /> */}
      <ServicesTestimonials />
      <ServicesClients />
      <ServicesBlog />
      <ServicesCta />
      <ServicesFooter />
    </main>
  );
}
