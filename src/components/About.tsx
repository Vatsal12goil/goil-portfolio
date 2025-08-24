
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Motivated and detail-oriented Computer Science undergraduate with a strong foundation in database management (SQL) and full-stack web development 
                using HTML, CSS, JavaScript, Node.js, and Python. Passionate about cybersecurity and cryptography, with hands-on experience in network scanning tools 
                such as Wireshark and Nmap.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Demonstrates a continuous learning mindset and a commitment to building secure, scalable, and efficient software solutions. 
                Eager to leverage technical skills and creativity to contribute meaningfully to innovative projects and real-world problem-solving.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold text-white">B-Tech in Computer Science (CyberSecurity)</h4>
                  <p className="text-slate-400">Punjabi University Singh Institute Of Technology, Kanpur, India</p>
                  <p className="text-slate-300 text-sm">2022-2026 • Current Aggregate: 60.7%</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="font-semibold text-white">Intermediate 70%</h4>
                  <p className="text-slate-400">Shree Sanatan Dharm Education Center • 2020-2022</p>
                </div>
                <div className="border-l-2 border-green-400 pl-4">
                  <h4 className="font-semibold text-white">High School 90%</h4>
                  <p className="text-slate-400">Shree Sanatan Dharm Education Center</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center mb-4">
                <MapPin className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p className="text-slate-300">Kanpur, Uttar Pradesh, India</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-lg p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center mb-4">
                <Calendar className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Graduation</h3>
              </div>
              <p className="text-slate-300">Expected: 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
