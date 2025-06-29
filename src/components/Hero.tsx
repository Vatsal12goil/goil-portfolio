
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-orange-500/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img
            src="/lovable-uploads/9cd0c6c5-eb3c-41d3-b122-e49396a7f8d8.png"
            alt="Vatsal Goil"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl object-cover"
          />
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
            onClick={() => scrollToSection("#projects")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Contact Me
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
