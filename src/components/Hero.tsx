
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open("https://1drv.ms/b/c/1ad62e9322aeefa7/EahOsWnhpjZImTFxUKUVtn0BAWBbyUf0soChkpAbyQMy3Q", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements with 3D feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-orange-500/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-blue-500/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="relative inline-block mb-6">
            {/* Multiple Dynamic Glowing Rings */}
            {/* Outer Ring - Clockwise */}
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin opacity-40 shadow-lg shadow-indigo-500/30" style={{animationDuration: '4s', left: '-32px', top: '-32px'}}></div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-transparent border-b-violet-500 border-l-blue-600 animate-spin opacity-30 shadow-lg shadow-violet-500/30" style={{animationDuration: '5s', left: '-32px', top: '-32px'}}></div>
            
            {/* Middle Ring - Anti-clockwise */}
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full border-2 border-transparent border-t-blue-500 border-r-indigo-600 animate-spin opacity-50 shadow-md shadow-blue-500/40" style={{animationDuration: '3s', animationDirection: 'reverse', left: '-16px', top: '-16px'}}></div>
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full border-2 border-transparent border-b-purple-600 border-l-violet-600 animate-spin opacity-40 shadow-md shadow-purple-600/40" style={{animationDuration: '3.5s', animationDirection: 'reverse', left: '-16px', top: '-16px'}}></div>
            
            {/* Inner Ring - Clockwise Fast */}
            <div className="absolute inset-0 w-36 h-36 mx-auto rounded-full border-2 border-transparent border-t-indigo-400 border-r-blue-500 animate-spin opacity-60 shadow-sm shadow-indigo-400/50" style={{animationDuration: '2s', left: '-8px', top: '-8px'}}></div>
            <div className="absolute inset-0 w-36 h-36 mx-auto rounded-full border-2 border-transparent border-b-purple-500 border-l-violet-500 animate-spin opacity-50 shadow-sm shadow-purple-500/50" style={{animationDuration: '2.5s', left: '-8px', top: '-8px'}}></div>
            
            {/* Innermost Glow Ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border border-indigo-400/20 animate-pulse shadow-xl shadow-indigo-400/30"></div>
            
            <img
              src="/lovable-uploads/9cd0c6c5-eb3c-41d3-b122-e49396a7f8d8.png"
              alt="Vatsal Goil"
              className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700/50 shadow-2xl object-cover hover:scale-110 transition-transform duration-300 hover:shadow-indigo-500/50 relative z-10 shadow-indigo-400/30"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Vatsal Goil
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Cybersecurity Enthusiast | Web Developer | Explorer of Knowledge
          </p>
          <p className="text-lg text-slate-400 mb-8">
            B.Tech Student at PSIT Kanpur • Graduating 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </Button>
          <Button
            onClick={openResume}
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            View Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:2k22.cscys2211389@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+919628979410"
            className="text-slate-400 hover:text-green-400 transition-colors duration-200"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vatsal-goil-0ab077283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/vatsal12goil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-gray-300 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
        </div>

        <TypingEffect />

        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
