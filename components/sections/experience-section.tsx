import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";
import { useState } from "react";
import { workExperience as we } from "@/components/data/work-experience";
import { volunteerExperience as ve } from "@/components/data/volunteer-experience";
import { ExperienceItem } from "@/components/experience-item";

export function ExperienceSection() {
  const [experienceType, setExperienceType] = useState<"work" | "volunteer">(
    "work"
  );
  const workExperience = we;
  const volunteerExperience = ve;
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-slate-200 to-emerald-300 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-navy-800/50 border border-navy-600/50 rounded-2xl p-2 backdrop-blur-sm">
            <div className="flex gap-2">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExperienceType("work")}
                className={`flex items-center justify-center min-w-[175px] gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  experienceType === "work"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
                }`}
                >
                <Briefcase size={20} />
                Work
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExperienceType("volunteer")}
                className={`flex items-center justify-center min-w-[175px] gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  experienceType === "volunteer"
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-300"
                }`}
                >
                <Heart size={20} />
                Volunteer
                </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          key={experienceType}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {(experienceType === "work"
              ? workExperience
              : volunteerExperience
            ).map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
                type={experienceType}
                isLast={
                  index ===
                  (experienceType === "work"
                    ? workExperience
                    : volunteerExperience
                  ).length -
                    1
                }
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
