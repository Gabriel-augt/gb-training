import Contact from "../components/contact/Contact";
import Faq from "../components/faq/Faq";
import Feedbacks from "../components/feedbacks/Feedbacks";
import Footer from "../components/footer/Footer";
import HomePage from "../components/homePage/HomePage";
import LogoSlider from "../components/logoSlider/LogoSlider";
import Qualifications from "../components/qualifications/Qualifications";
import Services from "../components/services/Services";
import About from "../components/about/About";

export default function Home() {
  return (
    <div>
      <HomePage />
      <LogoSlider />
      <About />
      <Qualifications />
      <Services />
      <Feedbacks />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
