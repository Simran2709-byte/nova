import { motion } from "framer-motion";

const steps = [
  "Today",
  "Learn Fundamentals",
  "Build Projects",
  "Create Portfolio",
  "Launch Something Meaningful",
];

const FutureMirror = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#080B18] px-6 py-32">

      <div className="max-w-7xl mx-auto w-full">

        <motion.h2
          className="text-center text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Future Mirror
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Every future begins with a decision made today.
        </motion.p>

        <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-6 min-w-55 text-center">

                <h3 className="text-white font-semibold text-xl">
                  {step}
                </h3>

              </div>

              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500"></div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FutureMirror;