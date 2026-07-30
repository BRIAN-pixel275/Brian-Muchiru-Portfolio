import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;