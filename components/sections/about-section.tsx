import { motion } from "framer-motion";
import { TechPill } from "@/components/tech-pill";
import { techStack as ts } from "@/components/data/tech-stack";

export function AboutSection() {
  const techStack = ts;
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-slate-200 to-emerald-300 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-slate-300 leading-relaxed text-justify">
              &emsp;Computer Science student specializing in Software
              Engineering with a focus on Back End and Full Stack development.
              Proven track record across 4+ real-world projects and 3+ awards in
              software development competitions. Experienced in implementing
              robust back-end systems, while also building clean and functional
              front-end interfaces. Strong in problem-solving, collaboration,
              and adapting quickly to new challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-slate-200">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <TechPill
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
