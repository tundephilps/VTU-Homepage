import Navbar from "../../components/Navbar";
import NavbarMobile from "../../components/NavbarMobile";
import Hero from "../../components/Hero";
import Companies from "../../components/Companies";
import Plan from "../../components/Plan";
import { Contact } from "../../components/Contact";
import Services from "../../components/Services";
import { Services2 } from "../../components/Services2";
import { Testimonial } from "../../components/Testimonial";
import { Footer } from "../../components/Footer";

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
