import Footer from "../components/footer";
import HomeHero from "../components/home-hero";
import Aboutcompany from "../components/aboutcompany";
import Whychooseus from "../components/whychooseus";
import AboutServices from "../components/aboutservices";
import IndustryWeServe from "../components/industryweserve";
import Marquee from "../components/marquee";
import Navbar from "../components/navbar";
import FAQ from "../components/faq";
import DifferentiatorCTA from "../components/differentiatorCTA";
import Testimonial from "../components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomeHero />
      <Marquee/>
      <Aboutcompany/>
      <AboutServices />
      <Whychooseus/>
      <IndustryWeServe/>
      {/* <MarqueeSlider /> */}
      <DifferentiatorCTA/>
      <Testimonial />
      <FAQ/>
      <Footer />
    </main>
  );
}