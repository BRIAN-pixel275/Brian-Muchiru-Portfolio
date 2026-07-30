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
      className={`absolute rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-2xl ${className}`}
    >
      {title}
    </motion.div>
  );
};

export default FloatingBadge;