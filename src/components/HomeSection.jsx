import React from "react";
import { Terminal, Code, Database, Brain } from "lucide-react";

export default function HomeSection({ terminalText }) {
  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Terminal Intro Card */}
      <div className="border-2 border-cyan-400/30 bg-gradient-to-br from-black/80 via-cyan-950/10 to-black/80 p-12 backdrop-blur-xl shadow-2xl shadow-cyan-400/30 glow-border">
        <div className="mb-8">
          <Terminal
            className="w-16 h-16 text-cyan-400 mb-6"
            style={{ animation: "pulse 2s infinite" }}
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            {terminalText}
            <span className="animate-pulse opacity-80">▌</span>
          </h2>
          <div
            className="h-1 w-48 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent"
            style={{ animation: "pulse 1.5s infinite" }}
          />
        </div>

        <div className="space-y-6 text-cyan-200 text-lg">
          <p className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl font-bold mt-1">&gt;</span>
            <span className="leading-relaxed">
              Second-year IT student who enjoys building things where logic meets
              creativity.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl font-bold mt-1">&gt;</span>
            <span className="leading-relaxed">
              I work across full-stack development, data analysis, and I’m slowly
              diving into AI/ML.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl font-bold mt-1">&gt;</span>
            <span className="leading-relaxed">
              I like clean UIs, meaningful data, and projects that actually feel
              alive.
            </span>
          </p>
        </div>
      </div>

      {/* Focus Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Code />,
            title: "Full-Stack Dev",
            desc: "Web applications with modern frameworks",
            color: "from-cyan-500 to-blue-500",
          },
          {
            icon: <Database />,
            title: "Data Analysis",
            desc: "Insights through PowerBI & Python",
            color: "from-blue-500 to-purple-500",
          },
          {
            icon: <Brain />,
            title: "AI/ML",
            desc: "Intelligent & impactful solutions",
            color: "from-purple-500 to-pink-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group border-2 border-cyan-400/30 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8
 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div
              className={`text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br ${item.color} p-4 rounded-lg inline-block`}
            >
              {React.cloneElement(item.icon, { className: "w-10 h-10" })}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {item.title}
            </h3>
            <p className="text-cyan-200 text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
