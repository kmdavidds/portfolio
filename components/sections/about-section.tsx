import { motion } from "framer-motion";
import { TechPill } from "@/components/tech-pill";
import { techStack as ts } from "@/components/data/tech-stack";

export function AboutSection() {
  const techStack = ts;
  return (
    <section className="py-24 px-6 relative">
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
            <p className="text-xl text-slate-300 leading-relaxed">
              Hi, I'm Rafael Amaral, a passionate full-stack developer with over
              4 years of experience crafting digital solutions that make a
              difference. I specialize in building scalable web applications and
              have a deep love for clean code and innovative problem-solving.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me contributing to open source
              projects, mentoring aspiring developers, or exploring the latest
              in AI and machine learning. I believe technology should be
              accessible and inclusive for everyone.
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
