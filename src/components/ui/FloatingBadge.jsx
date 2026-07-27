import { motion } from "framer-motion";

const FloatingBadge = ({
  title,
  className,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        backdrop-blur-xl
        text-sm
        font-medium
        shadow-lg
        ${className}
      `}
    >
      {title}
    </motion.div>
  );
};

export default FloatingBadge;