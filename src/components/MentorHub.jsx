import { useState } from "react";

const mentors = {
  "AI Mentor": {
    advice: "Build projects before taking more courses.",
    skills: ["Python", "Machine Learning", "Deep Learning"],
  },

  "Design Mentor": {
    advice: "Design is solving problems, not decoration.",
    skills: ["Figma", "UX", "Design Systems"],
  },

  "Startup Mentor": {
    advice: "Talk to users before building products.",
    skills: ["Validation", "Marketing", "Leadership"],
  },

  "Productivity Mentor": {
    advice: "Consistency beats intensity.",
    skills: ["Focus", "Habits", "Time Management"],
  },
};

const MentorHub = () => {
  const [selected, setSelected] = useState("AI Mentor");

  return (
    <section className="py-32 px-6 bg-[#050816]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-white">
          Choose Your AI Mentor
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mt-12">

          {Object.keys(mentors).map((mentor) => (
            <button
              key={mentor}
              onClick={() => setSelected(mentor)}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white hover:bg-white/10"
            >
              {mentor}
            </button>
          ))}

        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-cyan-400 text-3xl font-bold">
            {selected}
          </h3>

          <p className="text-slate-300 mt-4">
            {mentors[selected].advice}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {mentors[selected].skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorHub;