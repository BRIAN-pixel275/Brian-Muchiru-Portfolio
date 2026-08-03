import Background from "./components/layout/Background";
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
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/layout/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
     useEffect(() => {
     document.body.style.overflow = loading ? "hidden" : "auto";
    }, [loading]);

  return (
    <>
    <AnimatePresence>
      {loading && <LoadingScreen />}
      </AnimatePresence>
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