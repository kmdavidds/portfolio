import { motion } from "framer-motion";

interface ExperienceItemProps {
  time: string;
  company: string;
  title: string;
  results: string[];
  isLast?: boolean;
  delay?: number;
  icon: React.ReactNode;
  type?: "work" | "volunteer";
}

export const ExperienceItem = ({
  time,
  company,
  title,
  results,
  isLast = false,
  delay = 0,
  icon,
  type = "work",
}: ExperienceItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative flex gap-6 group"
  >
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`w-12 h-12 bg-gradient-to-br ${
          type === "work"
            ? "from-emerald-500 to-teal-600"
            : "from-rose-500 to-pink-600"
        } rounded-full border-4 border-navy-800 flex items-center justify-center shadow-lg`}
      >
        {icon}
      </motion.div>
      {!isLast && (
        <div
          className={`w-1 h-full bg-gradient-to-b ${
            type === "work"
              ? "from-emerald-500/50 to-transparent"
              : "from-rose-500/50 to-transparent"
          } mt-2`}
        ></div>
      )}
    </div>

    <motion.div
      whileHover={{ x: 10, scale: 1.02 }}
      className="flex-1 pb-8 bg-navy-800/30 border border-navy-600/30 rounded-xl p-6 backdrop-blur-sm shadow-xl group-hover:shadow-2xl transition-all duration-300"
    >
      <div className="text-slate-400 text-sm mb-2 font-mono">{time}</div>
      <div className="text-slate-100 font-bold text-xl mb-1">{company}</div>
      <div className="text-slate-300 mb-4 font-medium">{title}</div>
      <ul className="text-slate-400 text-sm space-y-2">
        {results.map((result, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <span
              className={`${
                type === "work" ? "text-emerald-400" : "text-rose-400"
              } mt-1 text-lg`}
            >
              →
            </span>
            {result}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);
