
import { Code, Shield, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "React", level: 65 },
      ],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Nmap", level: 80 },
        { name: "Wireshark", level: 75 },
        { name: "Cryptography", level: 70 },
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "DBMS", level: 85 },
        { name: "Problem Solving", level: 80 },
        { name: "LeetCode", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
