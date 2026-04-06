import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Terminal, Shield, Cpu, Database, Code, Server } from "lucide-react";
import photoUrl from "@assets/32DE9ED4-46B2-4DC7-8645-F0F9EC574792_1775456633557.jpeg";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 15, 25, 0)", "rgba(11, 15, 25, 0.8)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 240, 255, 0)", "rgba(0, 240, 255, 0.1)"]
  );

  const navItems = [
    { id: "home", label: "00_Init" },
    { id: "about", label: "01_Profile" },
    { id: "skills", label: "02_Stack" },
    { id: "projects", label: "03_Deploy" },
    { id: "experience", label: "04_History" },
    { id: "contact", label: "05_Ping" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <div className="noise-bg" />
      
      {/* Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(to right, #00F0FF 1px, transparent 1px), linear-gradient(to bottom, #00F0FF 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Navigation */}
      <motion.nav 
        style={{ background: navBackground, borderBottomColor: navBorder, borderBottomWidth: 1, borderBottomStyle: 'solid' }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-mono font-bold text-primary tracking-tighter text-xl">
            {"<Sreeranjini/>"}
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors duration-300 relative ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary/80'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono w-max">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                SYSTEM_ONLINE
              </motion.div>
              
              <motion.div variants={fadeUpVariant}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
                  <span className="block text-muted-foreground text-2xl md:text-3xl font-normal mb-2 font-mono">whoami</span>
                  Sreeranjini S
                </h1>
                <h2 className="text-2xl md:text-3xl text-primary font-mono mt-4">
                  Cybersecurity & IoT Engineer
                </h2>
              </motion.div>
              
              <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building AI/ML threat detection solutions and architecting secure systems. Bridging the gap between creative problem-solving and cryptographic rigor.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex gap-4 mt-4">
                <button onClick={() => scrollTo("projects")} className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors font-mono">
                  EXECUTE_PORTFOLIO
                </button>
                <button onClick={() => scrollTo("contact")} className="px-6 py-3 border border-border text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all font-mono rounded-md">
                  ESTABLISH_CONNECTION
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md aspect-square"
            >
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
              <div className="absolute inset-4 border border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ borderStyle: 'dotted' }}></div>
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary ring-4 ring-primary/20 bg-muted">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <img 
                  src={photoUrl} 
                  alt="Sreeranjini S" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-16">
                <span className="text-primary font-mono text-xl">01.</span>
                <h2 className="text-4xl font-bold">Profile_Summary</h2>
                <div className="h-[1px] flex-1 bg-border ml-4"></div>
              </div>
              
              <div className="grid md:grid-cols-12 gap-12">
                <motion.div variants={fadeUpVariant} className="md:col-span-8 text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    Cybersecurity and IoT Engineering graduate with specialized training in blockchain technology and a strong foundation in secure system development.
                  </p>
                  <p>
                    Skilled in vulnerability assessment, penetration testing, and cryptographic principles, with hands-on experience in building AI/ML-based threat detection solutions. I approach engineering with a security-first mindset, ensuring that innovation doesn't compromise integrity.
                  </p>
                  <div className="p-6 border border-border bg-background/50 rounded-lg mt-8 font-mono text-sm">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Terminal size={16} />
                      <span>system_status.log</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-muted-foreground">Location:</span> 
                        <span className="text-foreground">Calicut, Kerala, India</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-muted-foreground">Education:</span> 
                        <span className="text-foreground">Yenepoya Institute of Technology (CGPA: 7.9)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-muted-foreground">Focus:</span> 
                        <span className="text-foreground">Blockchain, AI/ML Threat Detection, IoT</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeUpVariant} className="md:col-span-4 flex flex-col gap-6">
                  <a href="https://github.com/Sreeranjini456" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                    <Github className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <div className="font-mono text-sm text-muted-foreground">GitHub</div>
                      <div className="font-medium">Sreeranjini456</div>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/sreeranjini-s-867a43313" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                    <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <div className="font-mono text-sm text-muted-foreground">LinkedIn</div>
                      <div className="font-medium">Connect</div>
                    </div>
                  </a>
                  <a href="mailto:sreeranjinisreeranjini08@gmail.com" className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                    <Mail className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <div className="font-mono text-sm text-muted-foreground">Email</div>
                      <div className="font-medium truncate max-w-[200px]">sreeranjinisreeranjini08@gmail.com</div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-16">
                <span className="text-primary font-mono text-xl">02.</span>
                <h2 className="text-4xl font-bold">Tech_Stack</h2>
                <div className="h-[1px] flex-1 bg-border ml-4"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div variants={fadeUpVariant} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-mono">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C", "C++", "SQL"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border rounded text-sm text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-mono">Web Dev</h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3", "JavaScript", "Django"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border rounded text-sm text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-mono">Security</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Vulnerability Assessment", "Penetration Testing", "Cryptography"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border rounded text-sm text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-mono">Tools & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "Librosa", "Arduino", "Git", "GitHub"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border rounded text-sm text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-16">
                <span className="text-primary font-mono text-xl">03.</span>
                <h2 className="text-4xl font-bold">Deployed_Modules</h2>
                <div className="h-[1px] flex-1 bg-border ml-4"></div>
              </div>

              <div className="space-y-24">
                {/* Project 1 */}
                <motion.div variants={fadeUpVariant} className="grid md:grid-cols-12 gap-8 items-center relative group">
                  <div className="md:col-span-7 bg-background border border-border rounded-xl aspect-video p-8 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors z-10">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="text-center z-10">
                      <Shield className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                      <div className="font-mono text-xl text-primary/80">system_analysis_active</div>
                    </div>
                  </div>
                  <div className="md:col-span-5 md:-ml-12 z-20">
                    <div className="font-mono text-primary mb-2">Featured Project</div>
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">DeepFake Voice & Face Detection</h3>
                    <div className="bg-background/90 backdrop-blur-sm p-6 border border-border rounded-xl text-muted-foreground shadow-2xl mb-6">
                      Multimodal Deep Learning system utilizing CNNs to achieve 90% accuracy in threat detection. Integrated OpenCV and Librosa for real-time facial feature and acoustic anomaly extraction, effectively mitigating biometric spoofing through synchronized audio-visual data analysis.
                    </div>
                    <div className="flex flex-wrap gap-3 font-mono text-sm text-primary/80">
                      <span>Python</span>
                      <span>CNN</span>
                      <span>OpenCV</span>
                      <span>Librosa</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div variants={fadeUpVariant} className="grid md:grid-cols-12 gap-8 items-center relative group">
                  <div className="md:col-span-5 z-20 text-right md:-mr-12">
                    <div className="font-mono text-primary mb-2">Featured Project</div>
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">Image Recognition Core</h3>
                    <div className="bg-background/90 backdrop-blur-sm p-6 border border-border rounded-xl text-muted-foreground shadow-2xl mb-6 text-left">
                      Engineered a robust CNN model in Python achieving 92% accuracy in multi-class object identification. Implemented advanced Data Augmentation techniques to ensure system resilience against adversarial inputs and environmental noise.
                    </div>
                    <div className="flex flex-wrap justify-end gap-3 font-mono text-sm text-primary/80">
                      <span>Python</span>
                      <span>CNN</span>
                      <span>Data Augmentation</span>
                    </div>
                  </div>
                  <div className="md:col-span-7 bg-background border border-border rounded-xl aspect-video p-8 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors z-10">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="text-center z-10">
                      <Database className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                      <div className="font-mono text-xl text-primary/80">vision_processing_module</div>
                    </div>
                  </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div variants={fadeUpVariant} className="grid md:grid-cols-12 gap-8 items-center relative group">
                  <div className="md:col-span-7 bg-background border border-border rounded-xl aspect-video p-8 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors z-10">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="text-center z-10">
                      <Cpu className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                      <div className="font-mono text-xl text-primary/80">iot_controller_node</div>
                    </div>
                  </div>
                  <div className="md:col-span-5 md:-ml-12 z-20">
                    <div className="font-mono text-primary mb-2">Featured Project</div>
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">Automatic Pet Feeder</h3>
                    <div className="bg-background/90 backdrop-blur-sm p-6 border border-border rounded-xl text-muted-foreground shadow-2xl mb-6">
                      Designed and built an IoT-based hardware solution featuring scheduled remote feeding control. Provided seamless automation and real-time monitoring capabilities for remote users through custom hardware-software integration.
                    </div>
                    <div className="flex flex-wrap gap-3 font-mono text-sm text-primary/80">
                      <span>IoT</span>
                      <span>Arduino</span>
                      <span>Hardware Integration</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="py-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* Experience */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-primary font-mono text-xl">04a.</span>
                  <h2 className="text-3xl font-bold">Experience</h2>
                </div>
                
                <div className="space-y-12">
                  <motion.div variants={fadeUpVariant} className="relative pl-8 border-l border-border">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-2xl font-bold">Web Development Intern</h3>
                    <div className="text-primary font-mono my-2">InternPe</div>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        Architected and deployed responsive web interfaces using HTML5, CSS3, JavaScript with cross-browser compatibility
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        Engineered front-end solutions resolving critical bugs for smoother navigation and enhanced site performance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        Partnered with cross-functional teams to refine UI/UX design principles for intuitive user journeys
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-primary font-mono text-xl">04b.</span>
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-12">
                  <motion.div variants={fadeUpVariant} className="relative pl-8 border-l border-border">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                    <h3 className="text-xl font-bold">BE – Computer Science & Engineering</h3>
                    <div className="text-primary font-mono my-2">Yenepoya Institute of Technology</div>
                    <div className="text-sm text-muted-foreground font-mono mb-2">2022 – 2026 | CGPA: 7.9</div>
                    <p className="text-muted-foreground mt-2">Specialization in IoT & Cybersecurity Including Blockchain Technology.</p>
                  </motion.div>

                  <motion.div variants={fadeUpVariant} className="relative pl-8 border-l border-border">
                    <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-bold">Higher Secondary Education (PCMCS)</h3>
                    <div className="text-primary font-mono my-2">Kunhali Marakkar Higher Secondary School</div>
                    <div className="text-sm text-muted-foreground font-mono">2020 – 2022 | 87%</div>
                  </motion.div>

                  <motion.div variants={fadeUpVariant} className="relative pl-8 border-l border-border">
                    <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-bold">Secondary Education (SSLC)</h3>
                    <div className="text-primary font-mono my-2">GVHSS Payyoli</div>
                    <div className="text-sm text-muted-foreground font-mono">2020 | 96%</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 bg-card/50 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariant} className="font-mono text-primary mb-4">05. What's Next?</motion.div>
              <motion.h2 variants={fadeUpVariant} className="text-5xl font-bold mb-6">Get In Touch</motion.h2>
              <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground mb-12">
                Currently exploring new opportunities in cybersecurity, AI development, and secure software engineering. Whether you have a question or just want to say hi, my inbox is always open.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="mailto:sreeranjinisreeranjini08@gmail.com"
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors font-mono inline-flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Initiate Handshake
                </a>
                <a 
                  href="tel:+919539733781"
                  className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-colors rounded-md font-mono inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  +91 9539733781
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-muted-foreground font-mono text-sm border-t border-border">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <MapPin size={14} className="inline mr-2 text-primary" />
              Calicut, Kerala, India
            </div>
            <div>
              Designed & Built securely by Sreeranjini S
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
