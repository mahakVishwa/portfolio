import { Rocket, ChevronRight, Zap } from "lucide-react";

export default function ProjectsSection({ projects }) {
  return (
    <div className="space-y-10 sm:space-y-8
 animate-fadeIn">
      <div className="border-2 border-cyan-400/30 bg-gradient-to-br from-black/80 via-cyan-950/10 to-black/80 p-12 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 flex items-center gap-4">
          <Rocket
            className="w-12 h-12 text-cyan-400"
            style={{ animation: "pulse 2s infinite" }}
          />
          PROJECT ARCHIVES
        </h2>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border-2 border-cyan-400/30 bg-gradient-to-br from-black/60 to-cyan-950/5 p-6 sm:p-8
 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-xl"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Title Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3
                    className={`text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-cyan-500 text-sm tracking-wider font-semibold">
                    {project.period}
                  </p>
                </div>
                <ChevronRight className="w-8 h-8 text-cyan-400 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Description */}
              <p className="text-cyan-300 mb-6 text-base sm:text-lg leading-relaxed">

                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                <p className="text-cyan-400 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  KEY HIGHLIGHTS
                </p>

                {project.highlights.map((highlight, j) => (
                  <p
                    key={j}
                    className="text-cyan-300 text-base leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-cyan-400 text-xl font-bold mt-1">
                      ▹
                    </span>
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border-2 border-cyan-400/50 text-cyan-300 text-sm font-semibold rounded hover:border-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
