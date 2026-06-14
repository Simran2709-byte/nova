import { motion } from "framer-motion";

const nodes = [
  { name: "AI", top: "10%", left: "45%" },
  { name: "Design", top: "30%", left: "15%" },
  { name: "Science", top: "30%", left: "75%" },
  { name: "Business", top: "65%", left: "20%" },
  { name: "Psychology", top: "65%", left: "70%" },
  { name: "Space", top: "85%", left: "45%" },
];

const KnowledgeGalaxy = () => {
  return (
    <section className="relative min-h-screen bg-[#040714] overflow-hidden flex items-center justify-center">

      <div className="text-center absolute z-10">
        <div className="w-32 h-32 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_60px_rgba(0,217,255,0.5)]">
          YOU
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
        >
          <div className="px-6 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:scale-110 transition-all cursor-pointer">
            {node.name}
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-16 text-center">
        <h2 className="text-5xl font-bold text-white">
          Every Skill Is Connected
        </h2>

        <p className="text-slate-400 mt-4">
          Learning is not linear. It is a network.
        </p>
      </div>

    </section>
  );
};

export default KnowledgeGalaxy;