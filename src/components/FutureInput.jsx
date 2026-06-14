import { useState } from "react";
import { generateRoadmap } from "../services/ai";
import { motion } from "framer-motion";
import MarkdownRenderer from "../components/MarkdownRenderer"; // <-- Import

const FutureInput = () => {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!goal.trim()) {
      setError("Please enter a learning goal.");
      return;
    }

    setLoading(true);
    setError("");
    setRoadmap("");

    try {
      const result = await generateRoadmap(goal);
      setRoadmap(result);
    } catch (err) {
      console.error(err);
      setError("Failed to generate roadmap. Check your API key and try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-32 px-6 bg-[#060816]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            AI Career Pathfinder
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Tell NOVA what you want to become and get a personalized learning roadmap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Example: AI Engineer, Web Developer, UI Designer, Data Scientist..."
              className="w-full bg-transparent outline-none text-white text-lg placeholder:text-slate-500"
            />

          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all disabled:opacity-50"
            >
              {loading ? "Generating Roadmap..." : "Generate Roadmap"}
            </button>
          </div>
           
           {loading && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-cyan-300 font-medium">
                    NOVA is designing your future...
                  </span>
                </div>
              </div>
          )}

          {error && (
            <div className="mt-6 text-center text-red-400">
              {error}
            </div>
          )}
        </motion.div>

        {roadmap && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

              <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                Your Personalized Roadmap
              </h3>

              {/* Replace whitespace-pre-wrap with MarkdownRenderer */}
              <MarkdownRenderer content={roadmap} />

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default FutureInput;