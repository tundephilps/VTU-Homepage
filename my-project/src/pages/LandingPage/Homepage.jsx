import Navbar from "../../components/LandingPage/Navbar";
import NavbarMobile from "../../components/LandingPage/NavbarMobile";
import Hero from "../../components/LandingPage/Hero";
import Companies from "../../components/LandingPage/Companies";
import Plan from "../../components/LandingPage/Plan";
import { Contact } from "../../components/LandingPage/Contact";
import Services from "../../components/LandingPage/Services";
import { Services2 } from "../../components/LandingPage/Services2";
import { Testimonial } from "../../components/LandingPage/Testimonial";
import { Footer } from "../../components/LandingPage/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="">
        <Hero />
      </div>
      <div className="z-auto">
        <Companies />
      </div>
      <div>
        <Plan />
      </div>
      <Contact />
      <Services />
      <div className="lg:hidden block ">
        <Services2 />
      </div>
      <div className="relative z-50 lg:pt-0 pt-32">
        <Testimonial />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
