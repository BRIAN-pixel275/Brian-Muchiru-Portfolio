import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import GlassCard from "../ui/GlassCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-lg text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-black leading-tight lg:text-7xl">
            Brian
            <br />
            Muchiru
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I build beautiful, scalable web applications with
            React, Tailwind CSS, JavaScript and Java.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-blue-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-400">
              View Projects
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 backdrop-blur-md transition hover:bg-white/10">
              Download CV
            </button>
          </div>

          <div className="mt-12 flex gap-6 text-2xl">
            <FaGithub className="cursor-pointer transition hover:text-blue-400" />
            <FaLinkedin className="cursor-pointer transition hover:text-blue-400" />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <GlassCard className="w-full max-w-md p-8">

            <h3 className="mb-8 text-2xl font-bold">
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/5 p-4">
                React
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                Tailwind CSS
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                JavaScript
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                Java
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                Git
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                GitHub
              </div>

            </div>

            <button className="mt-8 flex items-center gap-2 text-blue-400">
              Explore My Work
              <FaArrowRight />
            </button>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;