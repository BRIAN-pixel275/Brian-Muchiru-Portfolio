import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard
        className={`grid items-center gap-10 p-8 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Project Preview */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

          <div className="flex aspect-video items-center justify-center text-slate-500">
            Project Screenshot
          </div>

        </div>

        {/* Content */}

        <div>

          <h3 className="text-3xl font-bold">
            {project.title}
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="mt-10 flex gap-4">

            <a
              href={project.live}
              className="rounded-full bg-blue-500 px-6 py-3"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              className="rounded-full border border-white/10 px-6 py-3"
            >
              GitHub
            </a>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
};

export default ProjectCard;