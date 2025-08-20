import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Code,
  Rocket,
} from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  codeLink?: string;
  delay?: number;
  featured?: boolean;
}

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  demoLink,
  codeLink,
  delay = 0,
  featured = false,
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -15, rotateX: 5 }}
    className={`bg-gradient-to-br from-navy-800/40 to-navy-900/60 border border-navy-600/40 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl ${
      featured ? "md:col-span-2 lg:col-span-2" : ""
    }`}
  >
    <div className="aspect-video bg-gradient-to-br from-navy-700/50 to-slate-800/50 relative overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
    </div>
    <div className="p-8">
      <div className="flex items-center gap-3 mb-4">
        <Code className="text-emerald-400" size={24} />
        <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
        {featured && (
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            FEATURED
          </span>
        )}
      </div>
      <p className="text-slate-300 mb-6 leading-relaxed text-lg">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-navy-700 to-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm border border-navy-500/50 font-medium shadow-md"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-4">
        {demoLink && (
          <motion.a
            href={demoLink}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <Rocket size={18} />
            Live Demo
          </motion.a>
        )}
        {codeLink && (
          <motion.a
            href={codeLink}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(100, 116, 139, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 border-2 border-slate-600 text-slate-300 hover:bg-slate-600/20 hover:border-slate-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Github size={18} />
            Source Code
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);
