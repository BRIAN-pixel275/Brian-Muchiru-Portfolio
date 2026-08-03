import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="p-6 h-full">

        <div className="flex items-center gap-4">

          <Icon className="text-3xl text-brass" />

          <div>
            <h3 className="font-semibold text-lg text-paper">
              {skill.name}
            </h3>

            <p className="font-mono-ledger text-sm text-paper-muted">
              {skill.category}
            </p>
          </div>

        </div>

        <div className="mt-6">

          <div className="mb-2 flex justify-between font-mono-ledger text-sm text-paper-muted">

            <span>Proficiency</span>

            <span>{skill.level}%</span>

          </div>

          <div className="h-1 bg-ink-line">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-brass"
            />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
};

export default SkillCard;
