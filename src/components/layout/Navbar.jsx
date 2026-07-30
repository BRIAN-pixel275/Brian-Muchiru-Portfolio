import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect current section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`
          w-full
          max-w-7xl
          rounded-full
          border
          border-white/10
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-slate-900/90 shadow-2xl py-3"
              : "bg-slate-900/70 py-4"
          }
        `}
      >
        <div className="flex items-center justify-between px-8">

          {/* Logo */}

          <a
            href="#home"
            className="text-3xl font-black tracking-tight"
          >
            <span className="text-blue-500">B</span>M
          </a>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-10 lg:flex">

            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className={`relative font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 mx-auto h-[3px] w-8 rounded-full bg-blue-500"
                      />
                    )}
                  </a>

                </li>
              );
            })}

          </ul>

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 font-semibold text-white transition hover:scale-105 lg:block"
          >
            Resume
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-3xl border-t border-white/10 bg-slate-900/95 p-6 lg:hidden"
          >
            <ul className="space-y-5">

              {navLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-lg ${
                      activeSection ===
                      link.href.replace("#", "")
                        ? "text-blue-400"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>
          </motion.div>

        )}

      </motion.nav>

    </header>
  );
};

export default Navbar;