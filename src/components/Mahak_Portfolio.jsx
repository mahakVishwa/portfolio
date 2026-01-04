import React, { useState, useEffect } from 'react';
import { Terminal, Code, Database, Brain, Cpu, ChevronRight, Globe, Sparkles, Zap, Rocket } from 'lucide-react';
import Header from "./Header";
import HomeSection from "./HomeSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


export default function SciFiPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const [scanLine, setScanLine] = useState(0);
  const [particles, setParticles] = useState([]);

  const fullText = "ACCESSING CREATIVE CORE...";

  useEffect(() => {
    if (terminalText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullText.slice(0, terminalText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [terminalText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [activeSection]);

useEffect(() => {
  const titles = {
    home: "Mahak Vishwakarma | Portfolio",
    skills: "Skills | Mahak Vishwakarma",
    projects: "Projects | Mahak Vishwakarma",
    contact: "Contact | Mahak Vishwakarma",
  };

  document.title = titles[activeSection];
}, [activeSection]);


  const skills = [
    { name: 'C/C++', level: 'Advanced', icon: <Code className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 'Advanced', icon: <Code className="w-5 h-5" />, color: 'from-cyan-500 to-teal-500' },
    { name: 'React', level: 'Advanced', icon: <Zap className="w-5 h-5" />, color: 'from-cyan-500 to-cyan-400' },
    { name: 'HTML/CSS', level: 'Advanced', icon: <Globe className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'PHP', level: 'Intermediate', icon: <Code className="w-5 h-5" />, color: 'from-purple-500 to-cyan-500' },
    { name: 'PowerBI', level: 'Advanced', icon: <Database className="w-5 h-5" />, color: 'from-teal-500 to-cyan-500' },
    { name: 'Python', level: 'Intermediate', icon: <Code className="w-5 h-5" />, color: 'from-cyan-400 to-blue-400' },
    { name: 'AI/ML', level: 'Learning', icon: <Brain className="w-5 h-5" />, color: 'from-cyan-500 via-purple-500 to-pink-500' }
  ];

  const projects = [
    {
      title: 'NOVA - AI Voice Assistant',
      period: 'May 2025 - Jun 2025',
      description: 'Fully functional AI-powered assistant with a sci-fi personality inspired by JARVIS. NOVA is witty, sassy and interactive, designed with a futuristic terminal-style UI.',
      highlights: [
        'Integrated conversational AI with distinct sassy persona',
        'Web-based terminal interface with HTML, CSS, JavaScript',
        'OpenRouter API integration for natural language responses',
        'Deployed online for public interaction via InfinityFree'
      ],
      tech: ['JavaScript', 'API Integration', 'PHP', 'CSS', 'HTML'],
      gradient: 'from-cyan-500 to-blue-500',
       github: "https://github.com/mahakVishwa/NOVA",
       live: "https://nova-terminal-c3tx.onrender.com/"
    },
    {
      title: 'Music x Mind - A PowerBI Story',
      period: 'Oct 2025 - Nov 2025',
      description: 'Analyzed real-world data exploring how music habits influence anxiety, depression and sleep quality using Power BI with emotion-driven storytelling.',
      highlights: [
        'Cleaned and transformed datasets directly in Power BI',
        'Built DAX measures for genre-based mental health patterns',
        'Designed interactive emotion-driven dashboard',
        'Data-driven insights on psychological impact of music'
      ],
      tech: ['Power BI', 'DAX', 'Data Analysis', 'Data Visualization'],
      gradient: 'from-purple-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b1220] to-slate-900 text-cyan-400 relative overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400 opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s infinite ease-in-out`
          }}
        />
      ))}

      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animation: 'gridScroll 20s linear infinite'
      }} />
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Scan line effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(transparent ${scanLine}%, rgba(0, 255, 255, 0.08) ${scanLine}%, rgba(0, 255, 255, 0.08) ${scanLine + 1}%, transparent ${scanLine + 1}%)`
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Rajdhani', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Orbitron', monospace;
          letter-spacing: 0.05em;
        }

        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-2px, -2px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .animate-fadeIn {
          animation: slideInUp 0.6s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        
        .glow-border {
          animation: glow 2s infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Header */}
      <Header
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>

      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Home Section */}
        {activeSection === "home" && (
  <HomeSection terminalText={terminalText} />
)}


        {/* Skills Section */}
        {activeSection === "skills" && (
  <SkillsSection skills={skills} />
)}


        {/* Projects Section */}
        {activeSection === "projects" && (
  <ProjectsSection projects={projects} />
)}


        {/* Contact Section */}
        {activeSection === "contact" && <ContactSection />}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}