import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import Navbar from "../components/Navbar";
const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#060816]">
 <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#060816] pb-40"></section>
 <ParticleBackground />
 <div className="absolute top-32 left-20 text-cyan-400 animate-pulse">
 AI
</div>

<div className="absolute top-64 right-24 text-purple-400 animate-pulse">
 Psychology
</div>

<div className="absolute bottom-40 left-40 text-pink-400 animate-pulse">
 Design
</div>

<div className="absolute bottom-24 right-48 text-yellow-300 animate-pulse">
 Business
</div>
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

     <div className="relative z-10 text-center px-6 max-w-5xl pt-36">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="px-4 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md text-cyan-300 text-sm">
            NOVA • Learning Reimagined
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
         The Future Is Not Found.
          <br />
         It Is Designed.
         
         NOVA helps ambitious learners discover skills, connect ideas,
and build extraordinary futures.<br />
        </motion.h1>

        <motion.h2
          className="mt-6 text-4xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          You Are Here To Expand Your Mind.
        </motion.h2>

        <motion.p
          className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Discover ideas. Connect knowledge. Visualize your future.
          Experience learning in a completely new way.
        </motion.p>

        <motion.button
          className="mt-10 px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Begin Exploration
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;