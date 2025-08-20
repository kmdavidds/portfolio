import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-6 relative border-t border-navy-700/50 bg-navy-900/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-slate-200 to-emerald-300 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h3>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on
            innovative projects and collaborate with passionate teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-slate-300 mb-16">
            <motion.a
              href="mailto:kmdavidds@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-navy-800/40 border border-navy-600/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <Mail size={32} className="text-emerald-400" />
              <div>
                <div className="font-semibold text-slate-200">Email</div>
                <div className="text-slate-400">kmdavidds@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/6287860414114"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-navy-800/40 border border-navy-600/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <MessageCircle size={32} className="text-emerald-400" />
              <div>
                <div className="font-semibold text-slate-200">WhatsApp</div>
                <div className="text-slate-400">+6287860414114</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.google.com/maps/place/Malang,+Malang+City,+East+Java/@-7.9786453,112.631783,38676m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2dd62822063dc2fb:0x78879446481a4da2!8m2!3d-7.9666204!4d112.6326321!16zL20vMDR3OGRu?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-4 p-6 bg-navy-800/40 border border-navy-600/40 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <MapPin size={32} className="text-emerald-400" />
              <div>
              <div className="font-semibold text-slate-200">Location</div>
              <div className="text-slate-400">Kota Malang, Indonesia</div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-navy-700/50 text-slate-500 text-sm"
          >
            © 2025 Komang David
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
