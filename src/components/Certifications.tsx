
import { Award, Shield, Database, Code, Globe, FileText } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Database Management",
      issuer: "Academic",
      icon: Database,
      color: "from-blue-400 to-cyan-400",
      description: "Comprehensive understanding of database systems and management"
    },
    {
      title: "Cryptography",
      issuer: "Academic",
      icon: Shield,
      color: "from-purple-400 to-pink-400",
      description: "Intermediate level cryptography concepts and applications"
    },
    {
      title: "HTML5",
      issuer: "Infosys Springboard",
      icon: Code,
      color: "from-orange-400 to-red-400",
      description: "Modern HTML5 web development fundamentals"
    },
    {
      title: "CSS3",
      issuer: "Infosys Springboard",
      icon: Globe,
      color: "from-green-400 to-emerald-400",
      description: "Advanced CSS3 styling and responsive design"
    },
    {
      title: "JavaScript",
      issuer: "Infosys Springboard",
      icon: Code,
      color: "from-yellow-400 to-orange-400",
      description: "JavaScript programming and web interactivity"
    },
    {
      title: "Python Basic",
      issuer: "HackerRank",
      icon: FileText,
      color: "from-indigo-400 to-purple-400",
      description: "Python programming fundamentals and problem solving"
    },
    {
      title: "SQL Basic",
      issuer: "HackerRank",
      icon: Database,
      color: "from-teal-400 to-cyan-400",
      description: "SQL database querying and management basics"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      icon: Shield,
      color: "from-red-400 to-pink-400",
      description: "Cybersecurity fundamentals and best practices"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-slate-400">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="text-yellow-400 mr-2" size={16} />
                  <span className="text-slate-400 text-xs">Certified</span>
                </div>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
