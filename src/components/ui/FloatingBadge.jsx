import { motion } from "framer-motion";

const FloatingBadge = ({ title, className }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute rounded-sm border border-ink-line bg-ink-raised px-5 py-3 font-mono-ledger text-sm text-paper ${className}`}
    >
      {title}
    </motion.div>
  );
};

export default FloatingBadge;
