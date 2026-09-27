import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import StatsStrip from "./components/StatsStrip/StatsStrip";
import SaleDiscovery from "./components/SaleDiscovery/SaleDiscovery";
import WhyChooseStrike from "./components/WhyChooseStrike/WhyChooseStrike";
import RoadmapSection from "./components/RoadmapSection/RoadmapSection";
import CourseSection from "./components/CourseSection/CourseSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <SaleDiscovery />
        <WhyChooseStrike />
        <RoadmapSection />
        <CourseSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
