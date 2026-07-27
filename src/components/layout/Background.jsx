import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
        bg-[size:70px_70px]
      "
      />

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="
          absolute
          left-20
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 70, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="
          absolute
          right-10
          bottom-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/20
          blur-[200px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

    </div>
  );
};

export default Background;