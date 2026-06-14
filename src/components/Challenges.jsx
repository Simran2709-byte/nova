const challenges = [
  "Learn Python in 30 Days",
  "Build 5 Projects",
  "Read 10 Books",
  "Create a Portfolio",
];

const Challenges = () => {
  return (
    <section className="py-32 px-6 bg-[#050816]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-white">
          Learning Challenges
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {challenges.map((challenge) => (
            <div
              key={challenge}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-white"
            >
              {challenge}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Challenges;