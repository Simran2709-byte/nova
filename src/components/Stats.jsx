const stats = [
  { value: "10K+", label: "Ideas Explored" },
  { value: "250+", label: "Learning Paths" },
  { value: "98%", label: "Engagement" },
  { value: "∞", label: "Possibilities" },
];

const Stats = () => {
  return (
    <section className="py-24 bg-[#070B19]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {item.value}
            </h2>

            <p className="text-slate-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;