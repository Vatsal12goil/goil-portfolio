
import { ExternalLink, Github, Shield, Globe, Lock, DollarSign, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const projects = [
    {
      title: "Vehicle Tracking System",
      description: "An intelligent real-time vehicle monitoring platform that leverages GPS technology and IoT sensors to provide comprehensive fleet management solutions. Features live location tracking, route optimization, driver behavior analysis, and automated alerts for enhanced operational efficiency and security.",
      tech: ["React", "Node.js", "MongoDB", "GPS API", "Socket.io"],
      icon: Shield,
      color: "from-blue-500 to-teal-500",
      github: "https://github.com/Vatsal12goil/vehicle-tracking-system",
      demo: "",
      image: null,
    },
    {
      title: "Trash Trade Marketplace",
      description: "An innovative web platform connecting users to buy and sell household waste. Promotes recycling and environmental sustainability through e-commerce.",
      tech: ["Node.js", "HTML/CSS", "JavaScript", "Database"],
      icon: Globe,
      color: "from-green-400 to-emerald-400",
      github: "https://github.com/Vatsal12goil/TTM2",
      demo: "https://vatsal12goil.github.io/TTM2/",
      image: "/lovable-uploads/f4072176-287c-48fe-9a7a-2cfcc38a645b.png",
    },
    {
      title: "Weather Application",
      description: "A responsive weather app providing real-time weather data with a clean interface. Features location-based forecasts and detailed weather metrics.",
      tech: ["JavaScript", "API Integration", "HTML/CSS"],
      icon: Cloud,
      color: "from-blue-400 to-cyan-400",
      github: "https://github.com/Vatsal12goil/Weather_app",
      demo: "https://weatherapp1216.netlify.app",
      image: "/lovable-uploads/55c14bb1-a03b-4559-ad8f-f938bf58e159.png",
    },
    {
      title: "Password Strength Checker",
      description: "Developed a real-time Password Strength Checker web application to assess the strength of user-entered passwords based on various criteria. The project enhances user security awareness by visually indicating password robustness. Internship Project at: Brainwave Matrix Solution",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: Lock,
      color: "from-purple-400 to-indigo-400",
      github: "https://github.com/Vatsal12goil/Password_checker",
      demo: "https://beamish-puppy-d87b95.netlify.app",
      image: "/lovable-uploads/bf35cf01-d4a0-48ac-bd7c-f1457ae60d6b.png",
    },
    {
      title: "Currency Converter",
      description: "Created a Currency Converter web application that allows users to convert values between different currencies using real-time or fixed exchange rates. The project focuses on improving practical JavaScript skills and designing an intuitive user interface.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: DollarSign,
      color: "from-yellow-400 to-orange-400",
      github: "https://github.com/Vatsal12goil/Currency_Con",
      demo: "#",
      image: "/lovable-uploads/5ce292dc-4d85-43e2-8e42-d26eeab41b1e.png",
    },
    {
      title: "ResQ - Women Safety Platform",
      description: "An innovative final year project addressing the critical issue of domestic violence through technology. ResQ provides a comprehensive digital safety net featuring emergency SOS alerts, secure location sharing with trusted contacts, anonymous reporting mechanisms, and AI-powered threat assessment. The platform integrates mental health resources, legal guidance, and connects victims with support networks to create a holistic protection ecosystem.",
      tech: ["React Native", "Firebase", "Machine Learning", "Geolocation API", "Real-time DB"],
      icon: Shield,
      color: "from-pink-500 to-rose-500",
      github: "#",
      demo: "#",
      image: null,
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

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
              className={`flip-card ${project.image ? 'cursor-pointer' : ''}`}
              onClick={() => project.image && toggleFlip(index)}
            >
              <div className={`flip-card-inner ${flippedCards[index] ? 'flipped' : ''}`}>
                {/* Front Side - Original Design */}
                <div className="flip-card-front bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
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

                  <div className="flex gap-4">
                    {project.github && project.github !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-900 hover:bg-slate-700 hover:text-white bg-white flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && project.demo !== "#" && project.demo !== "" && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white flex-1`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, "_blank");
                        }}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Back Side - Project Image */}
                {project.image && (
                  <div className="flip-card-back bg-slate-800/30 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/50 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Screenshot`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
