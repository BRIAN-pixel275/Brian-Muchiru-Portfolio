import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import Button from "../ui/Button";
import ProfileCard from "../ui/ProfileCard";
import FloatingBadge from "../ui/FloatingBadge";
import Counter from "../ui/Counter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-medium text-blue-400">
             Hello, I'm
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Digital
            </span>
            Experiences
          </h1>

          <h2 className="mt-8 text-3xl font-bold">
            Brian Muchiru
          </h2>

          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Java Developer",
              2000,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-2xl font-semibold text-blue-400"
          />

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
            I build modern, responsive and scalable web applications
            with React, Tailwind CSS, JavaScript and Java while
            creating clean user experiences that solve real-world
            problems.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            <Button>
              View Projects
            </Button>

            <Button primary={false}>
              Download Resume
            </Button>
          </div>

          {/* Statistics */}

          <div className="mt-14 flex flex-wrap gap-10">
            <Counter end={10} label="Projects" />
            <Counter end={15} label="Technologies" />
            <Counter end={3} label="Years Learning" />
          </div>

          {/* Social Links */}

          <div className="mt-14 flex gap-5">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
            >
              <FaLinkedin size={22} />
            </a>

          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <ProfileCard />

          <FloatingBadge
            title="React"
            className="-left-4 top-20"
          />

          <FloatingBadge
            title="Tailwind CSS"
            className="-left-10 bottom-24"
          />

          <FloatingBadge
            title="JavaScript"
            className="left-20 -top-5"
          />

          <FloatingBadge
            title="Java"
            className="-right-4 top-36"
          />

          <FloatingBadge
            title="Git"
            className="right-8 bottom-20"
          />

          <FloatingBadge
            title="GitHub"
            className="right-20 -bottom-3"
          />
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-slate-400">

          <span className="text-sm">
            Scroll
          </span>

          <FaArrowDown />

        </div>
      </motion.div>

    </section>
  );
};

export default Hero;