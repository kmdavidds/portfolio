import { motion } from "framer-motion";

export const Snowflake = ({ delay = 0, duration = 10, size = 4 }) => (
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
