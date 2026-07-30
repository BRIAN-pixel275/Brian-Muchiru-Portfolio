import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="p-6 h-full">

        <div className="flex items-center gap-4">

          <Icon className="text-3xl text-blue-400" />

          <div>
            <h3 className="font-semibold text-lg">
              {skill.name}
            </h3>

            <p className="text-sm text-slate-400">
              {skill.category}
            </p>
          </div>

        </div>

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-sm">

            <span>Proficiency</span>

            <span>{skill.level}%</span>

          </div>

          <div className="h-2 rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
};

export default SkillCard;