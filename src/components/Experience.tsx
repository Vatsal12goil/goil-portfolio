
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Brainwave Matrix Solution",
      role: "Cybersecurity & Ethical Hacking Intern",
      duration: "Feb 2025 - Mar 2025 (1 Month)",
      location: "Remote",
      projects: ["Password Strength Checker", "Phishing Scanner", "Network Security Analysis"],
      color: "from-blue-400 to-cyan-400",
      certificate: "/lovable-uploads/a025095e-42b2-41bf-82c8-7874778b0b0b.png",
      description: "Successfully completed 1-month internship with outstanding remarks, focusing on cybersecurity and ethical hacking concepts."
    },
    {
      company: "TechnoHacks Solutions",
      role: "Cybersecurity & Digital Forensics Intern",
      duration: "Mar 2025 - Apr 2025 (1 Month)",
      location: "Remote",
      projects: ["Nmap Network Scanning", "Wireshark Analysis", "Digital Forensics Investigation"],
      color: "from-purple-400 to-pink-400",
      certificate: "/lovable-uploads/5b710e69-0f39-49f5-86a4-65a607e3680e.png",
      description: "Completed internship in Cybersecurity & Digital Forensics with consistent and hardworking performance."
    },
    {
      company: "Pinnacle Labs",
      role: "Web Development Intern",
      duration: "Nov 2024 - Dec 2024 (4 weeks)",
      location: "Remote",
      projects: ["Weather Application", "Calculator", "Currency Converter"],
      color: "from-green-400 to-emerald-400",
      certificate: "/lovable-uploads/82609dcd-949a-428d-9eba-a9538f96966f.png",
      description: "Demonstrated exceptional dedication and skill during virtual internship with commendable performance."
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Experience Details */}
                <div className="md:col-span-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-lg text-slate-300">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="flex items-center text-slate-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-slate-400">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Projects & Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <span
                          key={project}
                          className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 text-slate-300 rounded-full text-sm border border-slate-600`}
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="flex items-center justify-center">
                  <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 group-hover:border-slate-500 transition-all duration-300">
                    <img
                      src={exp.certificate}
                      alt={`${exp.company} Certificate`}
                      className="w-full max-w-sm rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex items-center justify-center mt-3">
                      <Award className="text-yellow-400 mr-2" size={20} />
                      <span className="text-slate-300 text-sm font-medium">Completion Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
