import { useState } from "react";
import { askNova } from "../services/ai";
import { motion } from "framer-motion";
import MarkdownRenderer from "../components/MarkdownRenderer"; // <-- Import

const NovaChat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await askNova(question);
      setAnswer(response);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, NOVA couldn't answer right now.");
    }

    setLoading(false);
  };

  return (
    <section className="py-32 px-6 bg-[#050816]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-center text-5xl font-bold text-white">
            Ask NOVA
          </h2>

          <p className="text-center text-slate-400 mt-4">
            Your personal AI learning mentor.
          </p>
        </motion.div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What should I learn after React?"
            className="w-full bg-transparent outline-none text-white text-lg"
          />

        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleAsk}
            className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 text-white font-semibold"
          >
            Ask NOVA
          </button>
        </div>

        {loading && (
          <div className="text-center mt-8 text-cyan-400 animate-pulse">
            NOVA is thinking...
          </div>
        )}

        {answer && (
          <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">
            {/* Replace whitespace-pre-wrap with MarkdownRenderer */}
            <MarkdownRenderer content={answer} />
          </div>
        )}

      </div>
    </section>
  );
};

export default NovaChat;