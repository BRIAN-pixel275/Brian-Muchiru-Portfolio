import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor]"
    );

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "tween",
          duration: 0.02,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-blue-400"
      />

      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - (hovering ? 20 : 16),
          y: position.y - (hovering ? 20 : 16),
          width: hovering ? 40 : 32,
          height: hovering ? 40 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-blue-400/60"
      />
    </>
  );
};

export default CustomCursor;