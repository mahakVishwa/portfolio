import { Sparkles } from "lucide-react";

export default function SkillsSection({ skills }) {
  return (
    <div className="space-y-10 sm:space-y-8
 animate-fadeIn">
      <div className="border-2 border-cyan-400/30 bg-gradient-to-br from-black/80 via-cyan-950/10 to-black/80 p-12 backdrop-blur-xl shadow-2xl shadow-cyan-400/30">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 flex items-center gap-4">
          <Sparkles
            className="w-12 h-12 text-cyan-400"
            style={{ animation: "pulse 2s infinite" }}
          />
          SKILL MATRIX
        </h2>

        {/* Skills */}
        <div className="space-y-10 sm:space-y-8
">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="space-y-3 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                  <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg`}>
                    {skill.icon}
                  </div>
                  <span className="text-cyan-200 font-bold text-xl tracking-wide">
                    {skill.name}
                  </span>
                </div>

                {/* Level Badge */}
                <span
                  className={`font-bold text-lg px-3 py-1 sm:px-4 rounded-full border-2 ${
                    skill.level === "Advanced"
                      ? "text-green-400 border-green-400 bg-green-400/10"
                      : skill.level === "Intermediate"
                      ? "text-blue-400 border-blue-400 bg-blue-400/10"
                      : "text-purple-400 border-purple-400 bg-purple-400/10"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="mt-12 pt-12 border-t-2 border-cyan-400/30">
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            INTERESTS & FOCUS AREAS
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "3D Animation",
              "AI/ML Applications",
              "Data Science",
              "API Integration",
              "Creative Development",
            ].map((interest, i) => (
              <span
                key={i}
                className="px-6 py-3 border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-200 text-base font-semibold rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
