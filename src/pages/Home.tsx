import Aboutservices from "../components/ourservices";
import Footer from "../components/footer";
import HomeHero from "../components/home-hero";
import ServiceDetails from "../components/servicedetails";
import IndustryWeServe from "../components/industryweserve";
import CaseStudy from "../components/casestudy";
import Testimonials from "../components/testimonials";
import MarqueeSlider from "../components/marqueeslider";
import InfoBox from "../components/infobox";
import TestimonialCard from "../components/tesimonialcard";
import Aboutcompany from "../components/aboutcompany";
import Whychooseus from "../components/whychooseus";
import AboutServices from "../components/aboutservices";

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
{/* <InfoBox /> */}
{/* <CaseStudy /> */}
{/* <IndustryWeServe /> */}