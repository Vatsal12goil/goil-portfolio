
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      name: "Database Management Systems (DBMS)",
      issuer: "Academic Excellence",
      date: "2024",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "TechnoHacks Solutions",
      date: "2024",
      color: "from-red-400 to-pink-400",
    },
    {
      name: "Ethical Hacking Concepts",
      issuer: "Professional Development",
      date: "2024",
      color: "from-green-400 to-emerald-400",
    },
    {
      name: "Web Development",
      issuer: "Pinnacle Labs",
      date: "2024",
      color: "from-purple-400 to-indigo-400",
    },
    {
      name: "Network Security Tools",
      issuer: "Self-Study & Practice",
      date: "2024",
      color: "from-orange-400 to-red-400",
    },
    {
      name: "Cryptography Intermediate",
      issuer: "Online Learning",
      date: "2023",
      color: "from-teal-400 to-cyan-400",
    },
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
              key={cert.name}
              className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="text-white" size={20} />
                </div>
                <span className="text-sm text-slate-400">{cert.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {cert.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <ExternalLink size={14} className="mr-2" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
