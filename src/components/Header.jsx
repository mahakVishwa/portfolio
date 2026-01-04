import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "skills", "projects", "contact"];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <header className="relative z-20 border-b-2 border-cyan-400/30 bg-black/20
 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Cpu
                className="w-10 h-10 text-cyan-400"
                style={{ animation: "pulse 2s infinite" }}
              />
              <div className="absolute inset-0 w-10 h-10 border-2 border-cyan-400 rotate-45 opacity-50" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                MAHAK VISHWAKARMA
              </h1>
              <p className="text-xs md:text-sm text-cyan-500 tracking-wider">
                IT STUDENT · FULL STACK · DATA & AI
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`uppercase text-sm font-semibold tracking-wider transition-all duration-300 relative ${
                  activeSection === section
                    ? "text-cyan-400"
                    : "text-cyan-600 hover:text-cyan-400"
                }`}
              >
                {section}
                {activeSection === section && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-6 border-t border-cyan-400/30 pt-6 space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left uppercase text-sm font-semibold tracking-wider ${
                  activeSection === section
                    ? "text-cyan-400"
                    : "text-cyan-500 hover:text-cyan-400"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
