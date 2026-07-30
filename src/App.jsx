import Background from "./components/layout/Background";
<ScrollProgress />
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import BackToTop from "./components/layout/BackToTop";
import CustomCursor from "./components/layout/CustomCursor";

function App() {
  return (
    <>
       <CustomCursor/>
      <Background />
      <Navbar />
      <ScrollProgress />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BackToTop />

      <Footer />
    </>
  );
}

export default App;