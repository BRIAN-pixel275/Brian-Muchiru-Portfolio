import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "../ui/Button";
import ProfileCard from "../ui/ProfileCard";
import FloatingBadge from "../ui/FloatingBadge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-medium text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="mt-5 text-6xl font-black leading-none lg:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Digital
            </span>
            Experiences
          </h1>

          <h2 className="mt-8 text-3xl font-bold">
            Brian Muchiru
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-400">
            Software Developer passionate about creating
            beautiful, scalable and high-performance web
            applications using React, Tailwind CSS,
            JavaScript and Java.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              View Projects
            </Button>

            <Button primary={false}>
              Download Resume
            </Button>
          </div>

          {/* Stats */}

          <div className="mt-14 flex gap-12">
            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                10+
              </h3>

              <p className="text-slate-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                15+
              </h3>

              <p className="text-slate-400">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                3+
              </h3>

              <p className="text-slate-400">
                Years Learning
              </p>
            </div>
          </div>

          {/* Social Icons */}

          <div className="mt-12 flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-blue-500"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-blue-500"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <ProfileCard />

          <FloatingBadge
            title="React"
            className="-left-6 top-20"
          />

          <FloatingBadge
            title="Tailwind CSS"
            className="-left-10 bottom-24"
          />

          <FloatingBadge
            title="Java"
            className="-right-6 top-36"
          />

          <FloatingBadge
            title="GitHub"
            className="right-4 bottom-20"
          />

          <FloatingBadge
            title="JavaScript"
            className="left-24 -top-5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;