import { Globe, Zap, Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="border-2 border-cyan-400/30 bg-gradient-to-br from-black/80 via-cyan-950/10 to-black/80 p-8 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl shadow-cyan-400/30 glow-border">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 flex items-center gap-4">
          <Globe
            className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400"
            style={{ animation: "pulse 2s infinite" }}
          />
          ESTABLISH CONNECTION
        </h2>

        <div className="space-y-10 text-cyan-200">
          <p className="text-lg sm:text-xl leading-relaxed flex items-start gap-3">
            <span className="text-cyan-400 text-2xl font-bold mt-1">&gt;</span>
            <span>
              Ready to collaborate on innovative projects or discuss opportunities
              in AI, data analysis, and full-stack development.
            </span>
          </p>

          {/* Contact Box */}
          <div className="border-2 border-cyan-400/30 bg-black/40 p-6 sm:p-8 space-y-6 backdrop-blur-xl hover:border-cyan-400 transition-all duration-500">
            <p className="text-cyan-400 font-bold text-lg sm:text-xl tracking-wider uppercase flex items-center gap-3">
              <Zap className="w-6 h-6" />
              COMMUNICATION CHANNELS
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">

              <a
                href="mailto:mahakjha12@gmail.com"
                className="flex items-center gap-5 p-4 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <Mail className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-semibold text-cyan-300">Email</p>
                  <p className="text-sm text-cyan-500">
                    Reach out for collaboration or queries
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/mahakVishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <Github className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-semibold text-cyan-300">GitHub</p>
                  <p className="text-sm text-cyan-500">
                    Projects, experiments & source code
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mahak-vishwakarma-18248a353"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <Linkedin className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-semibold text-cyan-300">LinkedIn</p>
                  <p className="text-sm text-cyan-500">
                    Professional updates & networking
                  </p>
                </div>
              </a>

            </div>
          </div>

          <p className="text-sm sm:text-base text-cyan-500 italic text-center pt-8 border-t-2 border-cyan-400/30 tracking-wider">
            "Building the future, one line of code at a time."
          </p>
        </div>
      </div>
    </div>
  );
}
