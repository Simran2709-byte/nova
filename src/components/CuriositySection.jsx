import { motion } from "framer-motion";

const topics = [
  "Artificial Intelligence",
  "Psychology",
  "Design",
  "Business",
  "Science",
  "Space",
  "Creativity",
  "Technology",
];

const CuriositySection = () => {
  return (
    <section className="min-h-screen bg-[#060816] px-6 py-32">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          className="text-center text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Curiosity Universe
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 mt-6 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Knowledge is not isolated. Every idea connects to another.
          Explore how your interests shape your future.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 mb-6"></div>

              <h3 className="text-white text-xl font-semibold">
                {topic}
              </h3>

              <p className="text-slate-400 mt-4">
                Discover new connections and pathways inside this knowledge domain.
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CuriositySection;