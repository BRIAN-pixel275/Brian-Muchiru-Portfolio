import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Background />

      <main className="relative text-white">
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default App;