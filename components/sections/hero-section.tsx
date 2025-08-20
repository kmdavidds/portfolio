import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="w-40 h-40 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-50"></div>
          <Image
            src="/square-photo.png"
            alt="Komang David"
            fill
            className="rounded-full object-cover border-4 border-emerald-400/70 relative z-10"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-slate-200 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-float"
          style={{
            backgroundSize: "200% 200%",
            animation:
              "float 3s ease-in-out infinite, gradient 4s ease infinite",
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.6 }}
          >
            K
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.7 }}
          >
            o
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.8 }}
          >
            m
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.9 }}
          >
            a
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.0 }}
          >
            n
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.1 }}
          >
            g
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.2 }}
            className="hidden md:inline"
          >
            {" "}
          </motion.span>
                    <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.2 }}
            className="inline md:hidden"
          >
            <br />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.3 }}
          >
            D
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.4 }}
          >
            a
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.5 }}
          >
            v
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.6 }}
          >
            i
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.7 }}
          >
            d
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl font-light mb-8 text-slate-300"
        >
          Software Engineer & NixOS Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
            <motion.a
              href="/Komang David Dananjaya Suartana - Resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl min-w-[275px] justify-center"
            >
              <Download size={24} />
              Get My Resume
            </motion.a>
            <motion.a
            href="mailto:kmdavidds@gmail.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(100, 116, 139, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 border-2 border-slate-500 text-slate-300 hover:bg-slate-500/10 hover:border-slate-400 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 min-w-[275px] justify-center"
            >
            <Mail size={24} />
            Email Me
            </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-8 mt-8"
        >
          {[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/komangdavid/",
              color: "hover:text-blue-400",
              bg: "hover:bg-blue-500/20",
            },
            {
              icon: Github,
              href: "https://github.com/kmdavidds",
              color: "hover:text-stone-300",
              bg: "hover:bg-stone-500/20",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/kmdavidds/",
              color: "hover:text-pink-400",
              bg: "hover:bg-pink-500/20",
            },
          ].map(({ icon: Icon, href, color, bg }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-slate-400 ${color} ${bg} transition-all duration-300 p-4 rounded-full border border-slate-600/30`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
