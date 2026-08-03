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
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-2xl shadow-lg">
          {item.icon}
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-1 rounded-full bg-blue-500/30" />
        )}
      </div>

      {/* Card */}
      <GlassCard className="mb-10 flex-1 p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          {item.year}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

export default TimeLineCard;