import { motion } from "framer-motion";
import { projects as p } from "@/components/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const projects = p;
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-slate-200 to-emerald-300 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
