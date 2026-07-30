import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BrowserFrame from "./BrowserFrame";
import GlassCard from "./GlassCard";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <GlassCard
        className={`overflow-hidden p-8 lg:p-10 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ================= IMAGE ================= */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <BrowserFrame>
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover transition duration-700 hover:scale-105"
              />
            </BrowserFrame>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <div>
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Featured Project
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              {project.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold transition duration-300 hover:border-blue-400 hover:bg-white/10"
              >
                <FaGithub />

                GitHub
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProjectCard;