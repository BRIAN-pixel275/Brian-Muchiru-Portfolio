import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#030712]"
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
          className="text-7xl font-black"
        >
          <span className="text-blue-500">B</span>M
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
          }}
          className="mt-4 text-2xl font-bold"
        >
          Brian Muchiru
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-2 text-slate-400"
        >
          Software Engineer
        </motion.p>

        <motion.div
          className="mx-auto mt-10 h-1 w-56 overflow-hidden rounded-full bg-slate-700"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-violet-500"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;