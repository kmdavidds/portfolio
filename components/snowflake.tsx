import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Snowflake = ({ delay = 0, duration = 10, size = 4 }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <motion.div
      className="absolute text-slate-300/10 pointer-events-none"
      initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
      animate={{
        y: window.innerHeight + 100,
        rotate: 360,
        x: Math.random() * window.innerWidth,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{ fontSize: `${size}px` }}
    >
      ❄
    </motion.div>
  );
};
