import WhyChooseUs from "../components/whychooseus";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import EngagementModelHero from "../components/engagement-hero";
import EngagementCard from "../components/engagement-card";
import Testimonial from "../components/testimonials";
import Marquee from "../components/marquee";
import DifferentiatorCTA from "../components/differentiatorCTA";

export default function EngagementModelPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EngagementModelHero />
      <Marquee/>
      <EngagementCard/>
      <WhyChooseUs />
      <DifferentiatorCTA/>
      <Testimonial/>
      <Footer />
    </main> 
  );
}
