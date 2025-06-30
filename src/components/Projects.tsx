
import { ExternalLink, Github, Shield, Globe, Lock, DollarSign, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Phishing Link Scanner",
      description: "A comprehensive security tool that detects malicious URLs using Flask (Python) with a clean, intuitive frontend. Helps users stay safe online by analyzing suspicious links.",
      tech: ["Python", "Flask", "HTML/CSS", "JavaScript"],
      icon: Shield,
      color: "from-red-400 to-pink-400",
      github: "https://github.com/Vatsal12goil/Phising_Scanner",
      demo: "#",
    },
    {
      title: "Trash Trade Marketplace",
      description: "An innovative web platform connecting users to buy and sell household waste. Promotes recycling and environmental sustainability through e-commerce.",
      tech: ["Node.js", "HTML/CSS", "JavaScript", "Database"],
      icon: Globe,
      color: "from-green-400 to-emerald-400",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Application",
      description: "A responsive weather app providing real-time weather data with a clean interface. Features location-based forecasts and detailed weather metrics.",
      tech: ["JavaScript", "API Integration", "HTML/CSS"],
      icon: Cloud,
      color: "from-blue-400 to-cyan-400",
      github: "https://github.com/Vatsal12goil/Weather_app",
      demo: "#",
    },
    {
      title: "Password Strength Checker",
      description: "Developed a real-time Password Strength Checker web application to assess the strength of user-entered passwords based on various criteria. The project enhances user security awareness by visually indicating password robustness. Internship Project at: Brainwave Matrix Solution",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: Lock,
      color: "from-purple-400 to-indigo-400",
      github: "#",
      demo: "#",
    },
    {
      title: "Currency Converter",
      description: "Created a Currency Converter web application that allows users to convert values between different currencies using real-time or fixed exchange rates. The project focuses on improving practical JavaScript skills and designing an intuitive user interface.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: DollarSign,
      color: "from-yellow-400 to-orange-400",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => project.github !== "#" && window.open(project.github, "_blank")}
                  disabled={project.github === "#"}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
