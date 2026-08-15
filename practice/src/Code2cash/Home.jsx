import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import WhyUs from "./WhyUs";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Team from "./Team";
import CTA from "./CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Projects />
      <Team />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;