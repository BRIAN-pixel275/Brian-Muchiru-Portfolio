import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="font-display text-7xl font-semibold text-paper"
        >
          <span className="text-brass">B</span>M
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
          }}
          className="mt-4 font-mono-ledger text-sm uppercase tracking-[4px] text-paper-muted"
        >
          Brian Muchiru — Software Engineer
        </motion.h2>

        <motion.div
          className="mx-auto mt-10 h-[2px] w-56 overflow-hidden bg-ink-line"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-brass"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
