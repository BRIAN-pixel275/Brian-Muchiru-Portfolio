import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";

import Container from "../layout/Container";
import ProfileCard from "../ui/ProfileCard";
import FloatingBadge from "../ui/FloatingBadge";
import StatCard from "../ui/StatCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Available Badge */}

            <div className="inline-flex items-center gap-2 rounded-sm border border-moss/30 bg-ink-raised px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-moss"></span>

              <span className="font-mono-ledger text-sm text-paper">
                Available for Work
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 font-display text-6xl font-semibold leading-none text-paper lg:text-7xl">
              Building
              <br />

              <span className="text-brass">
                Digital
              </span>

              <br />

              Experiences
              <br />

              That Matter.
            </h1>

            {/* Typing */}

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Java Developer",
                2000,
                "UI Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="mt-8 block font-mono-ledger text-xl text-brass"
            />

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-paper-muted">
              I build fast, responsive and modern web applications using React,
              Tailwind CSS, JavaScript and Java, focusing on clean design and
              great user experiences.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-sm bg-brass px-6 py-3 font-semibold text-ink transition duration-300 hover:bg-brass-deep"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="rounded-sm border border-ink-line px-6 py-3 font-semibold text-paper transition duration-300 hover:border-brass hover:text-brass"
              >
                Download Resume
              </a>
            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-5">
              <StatCard value="10+" label="Projects" />

              <StatCard value="15+" label="Technologies" />

              <StatCard value="3+" label="Years Learning" />
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <ProfileCard />

            <FloatingBadge
              title="⚛ React"
              className="-top-6 right-12"
            />

            <FloatingBadge
              title=" JavaScript"
              className="-left-6 top-24"
            />

            <FloatingBadge
              title=" Tailwind"
              className="-left-10 bottom-24"
            />

            <FloatingBadge
              title=" Java"
              className="right-4 bottom-8"
            />

            <FloatingBadge
              title=" GitHub"
              className="left-8 -bottom-8"
            />

            <FloatingBadge
              title="🌿 Git"
              className="right-0 top-60"
            />
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-paper-muted">
          <span className="font-mono-ledger text-sm tracking-widest uppercase">
            Scroll
          </span>

          <FaArrowDown />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
