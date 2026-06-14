const SkillTree = () => {
  return (
    <section className="py-32 bg-[#060816]">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white">
          Skill Evolution Path
        </h2>

        <div className="mt-20 flex flex-col items-center gap-8">

          <div className="bg-cyan-500/20 px-8 py-4 rounded-full text-white">
            Python
          </div>

          <div className="h-12 w-1 bg-cyan-500"></div>

          <div className="bg-purple-500/20 px-8 py-4 rounded-full text-white">
            Data Science
          </div>

          <div className="h-12 w-1 bg-purple-500"></div>

          <div className="bg-pink-500/20 px-8 py-4 rounded-full text-white">
            Machine Learning
          </div>

          <div className="h-12 w-1 bg-pink-500"></div>

          <div className="bg-yellow-500/20 px-8 py-4 rounded-full text-white">
            Deep Learning
          </div>

        </div>

      </div>

    </section>
  );
};

export default SkillTree;