import { motion } from 'framer-motion';

const AboutSection = () => {
  const education = [
    {
      institution: "Pune Institute of Computer Technology",
      period: "2023 – 2027",
      degree: "B.E. in Information Technology",
      grade: "CGPA: 9.32",
      icon: "🎓"
    },
    {
      institution: "Namo Rims Jr. College",
      period: "2021 – 2023",
      degree: "HSC",
      grade: "78.33%",
      icon: "📘"
    },
    {
      institution: "City International School",
      period: "Up to 2021",
      degree: "CBSE",
      grade: "85.67%",
      icon: "🏫"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-dark overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="container-custom section-padding relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-16 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div
              className="glass rounded-2xl p-8 border border-white/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-4xl">🚀</span>
                <span>My Journey</span>
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  I&apos;m an Information Technology undergraduate at Pune Institute of Computer Technology (PICT) with a strong interest in software development and problem solving.
                </p>
                <p>
                  I enjoy building full-stack applications using React, Next.js, Node.js and MongoDB, with a particular interest in frontend architecture, interactive UI and scalable application design.
                </p>
                <p>
                  During my frontend development internship at DesignTrip, I contributed to production client projects using Next.js and TypeScript, working on UI development, animations and responsive interfaces.
                </p>
                <p>
                  Alongside development, I actively practice Data Structures &amp; Algorithms and core Computer Science fundamentals while exploring AI/ML through projects and hackathons.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Education */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  Education
                </h3>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                              {edu.institution}
                            </h4>
                            <span className="text-xs font-bold text-center text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mt-2 sm:mt-0 w-[115px]">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
                          <p className="text-gray-400 text-sm">{edu.grade}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
