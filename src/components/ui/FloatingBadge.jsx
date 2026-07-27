import { motion } from "framer-motion";

const FloatingBadge = ({ title, className }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        border
        border-white/10
        bg-white/[0.07]
        px-5
        py-3
        backdrop-blur-2xl
        shadow-xl
        ${className}
      `}
    >
      {title}
    </motion.div>
  );
};

export default FloatingBadge;