import { motion } from "framer-motion";
import Image from "next/image";

interface TechPillProps {
  name: string;
  icon: string;
  delay?: number;
  color?: string;
}

export const TechPill = ({
  name,
  icon,
  delay = 0,
  color = "from-navy-600 to-navy-700",
}: TechPillProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.1, rotateY: 10 }}
    className={`flex items-center gap-2 bg-gradient-to-r ${color} border border-navy-500/50 rounded-full px-4 py-2 text-sm text-slate-100 shadow-lg backdrop-blur-sm`}
  >
    <Image
      src={icon || "/placeholder.svg"}
      alt={name}
      width={24}
      height={24}
      className="text-lg"
    />
    {name}
  </motion.div>
);
