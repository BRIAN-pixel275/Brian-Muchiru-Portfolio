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
          rounded-sm
          border
          border-ink-line
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-ink-raised/95 shadow-2xl py-3"
              : "bg-ink-raised/80 py-4"
          }
        `}
      >
        <div className="flex items-center justify-between px-8">

          {/* Logo */}

          <a
            href="#home"
            className="font-display text-3xl font-semibold tracking-tight text-paper"
          >
            <span className="text-brass">B</span>M
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
                    className={`relative font-mono-ledger text-sm uppercase tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-brass"
                        : "text-paper-muted hover:text-paper"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-full bg-brass"
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
            className="hidden rounded-sm bg-brass px-7 py-3 font-semibold text-ink transition hover:bg-brass-deep lg:block"
          >
            Resume
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-paper lg:hidden"
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
            className="mt-6 border-t border-ink-line bg-ink-raised p-6 lg:hidden"
          >
            <ul className="space-y-5">

              {navLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-mono-ledger text-lg uppercase tracking-wide ${
                      activeSection ===
                      link.href.replace("#", "")
                        ? "text-brass"
                        : "text-paper-muted"
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
