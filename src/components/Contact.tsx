
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2k22.cscys2211389@gmail.com",
      href: "mailto:2k22.cscys2211389@gmail.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9628979410",
      href: "tel:+919628979410",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vatsal-goil-0ab077283",
      href: "https://linkedin.com/in/vatsal-goil-0ab077283",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vatsal12goil",
      href: "https://github.com/vatsal12goil",
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg">
            Let's connect and discuss opportunities, projects, or just have a tech chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold transition-all duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p className="text-slate-300">Kanpur, Uttar Pradesh, India</p>
              <p className="text-slate-400 text-sm mt-2">Available for remote opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700">
        <div className="text-center">
          <p className="text-slate-400">
            © 2024 Vatsal Goil. Built with passion and lots of coffee ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
