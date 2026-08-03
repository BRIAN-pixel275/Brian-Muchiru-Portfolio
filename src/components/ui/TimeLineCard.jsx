import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const TimeLineCard = ({ item, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-6"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-brass bg-ink-raised text-2xl">
          {item.icon}
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-px bg-ink-line" />
        )}
      </div>

      {/* Card */}
      <GlassCard className="mb-10 flex-1 p-6">
        <p className="font-mono-ledger text-sm font-semibold uppercase tracking-wider text-brass">
          {item.year}
        </p>

        <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-paper-muted">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

export default TimeLineCard;
