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
            <span className="inline-flex border-b-2 border-brass pb-1 font-mono-ledger text-xs uppercase tracking-[3px] text-brass">
              Featured Project
            </span>

            <h2 className="mt-6 font-display text-4xl font-semibold text-paper">
              {project.title}
            </h2>

            <p className="mt-6 leading-8 text-paper-muted">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-ink-line px-4 py-2 font-mono-ledger text-sm text-paper-muted transition hover:border-brass hover:text-brass"
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
                className="flex items-center gap-2 rounded-sm bg-brass px-6 py-3 font-semibold text-ink transition duration-300 hover:bg-brass-deep"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm border border-ink-line px-6 py-3 font-semibold text-paper transition duration-300 hover:border-brass hover:text-brass"
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
