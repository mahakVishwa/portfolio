import { Globe, Zap } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="space-y-10 sm:space-y-8
 animate-fadeIn">
      <div className="border-2 border-cyan-400/30 bg-gradient-to-br from-black/80 via-cyan-950/10 to-black/80 p-12 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 glow-border">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 flex items-center gap-4">
          <Globe
            className="w-12 h-12 text-cyan-400"
            style={{ animation: "pulse 2s infinite" }}
          />
          ESTABLISH CONNECTION
        </h2>

        <div className="space-y-10 sm:space-y-8
 text-cyan-300">
          <p className="text-xl leading-relaxed flex items-start gap-3">
            <span className="text-cyan-400 text-2xl font-bold mt-1">&gt;</span>
            <span>
              Ready to collaborate on innovative projects or discuss opportunities
              in AI, data analysis, and full-stack development.
            </span>
          </p>

          {/* Contact Box */}
          <div className="border-2 border-cyan-400/30 bg-black/40 p-6 sm:p-8
 space-y-6 backdrop-blur-xl hover:border-cyan-400 transition-all duration-500">
            <p className="text-cyan-400 font-bold text-xl tracking-wider uppercase flex items-center gap-3">
              <Zap className="w-6 h-6" />
              COMMUNICATION CHANNELS
            </p>

            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 text-xl font-bold">▹</span>
                <span>
                  Email:{" "}
                  <a
                    href="mailto:mahakjha12@gmail.com"
                    className="underline underline-offset-4"
                  >
                    mahakjha12@gmail.com
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 text-xl font-bold">▹</span>
                <span>
                  GitHub:{" "}
                  <a
                    href="https://github.com/mahakVishwa"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    github.com/mahakVishwa
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 text-xl font-bold">▹</span>
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/mahak-vishwakarma-18248a353"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    linkedin.com/in/mahak-vishwakarma
                  </a>
                </span>
              </p>
            </div>
          </div>

          <p className="text-base text-cyan-500 italic text-center pt-8 border-t-2 border-cyan-400/30 tracking-wider">
            "Building the future, one line of code at a time."
          </p>
        </div>
      </div>
    </div>
  );
}
