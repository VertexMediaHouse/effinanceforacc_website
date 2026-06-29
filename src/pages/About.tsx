import AboutHero from "../components/about-hero";
import AboutCompany from "../components/aboutcompany";
import EngagementModel from "../components/engagement-model";
import WhyChooseUs from "../components/whychooseus";
import ProcessOfWork from "../components/process-of-work";
import Footer from "../components/footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutCompany />
      <EngagementModel />
      <WhyChooseUs />
      <ProcessOfWork />
      <Footer />
    </main>
  );
}
