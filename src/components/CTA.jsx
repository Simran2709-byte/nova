import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060816] px-6">

      <div className="absolute w-125 h-125 bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 text-center max-w-4xl">

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Future Version
          <br />
          Of You Is Waiting.
        </motion.h2>

        <motion.p
          className="mt-8 text-xl text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Start exploring ideas, building skills, and creating a future
          you'll be proud of.
        </motion.p>

        <motion.button
          className="mt-12 px-10 py-5 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Begin Your Journey
        </motion.button>

      </div>
    </section>
  );
};

export default CTA;