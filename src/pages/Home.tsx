import Footer from "../components/footer";
import HomeHero from "../components/home-hero";
import MarqueeSlider from "../components/marqueeslider";
import TestimonialCard from "../components/tesimonialcard";
import Aboutcompany from "../components/aboutcompany";
import Whychooseus from "../components/whychooseus";
import AboutServices from "../components/aboutservices";
import IndustryWeServe from "../components/industryweserve";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <MarqueeSlider />
      <Aboutcompany/>
      <AboutServices />
      <Whychooseus/>
      <IndustryWeServe/>
      <TestimonialCard />
      <Footer />
    </main>
  );
}