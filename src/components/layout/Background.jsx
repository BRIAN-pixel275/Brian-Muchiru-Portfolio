import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-10 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute right-20 top-60 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]"
      />
    </div>
  );
};

export default Background;