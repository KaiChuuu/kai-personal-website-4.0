import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Work from "./_components/work";
import Project from "./_components/project";
import Footer from "./_components/footer";
import VJGA from "./_components/vjga";
import Certification from "./_components/certification";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Work />
      <Project />
      <VJGA />
      <Certification />
      <Footer />
      {/* <div className="py-60"></div> */}
    </div>
  );
}
