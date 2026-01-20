import { motion } from 'framer-motion';

const AboutSection = () => {
  const education = [
    {
      institution: "Pune Institute of Computer Technology",
      period: "2023-2027",
      degree: "B.E. in IT",
      grade: "CGPA: 9.195",
      icon: "🎓"
    },
    {
      institution: "Namo Rims Jr. College",
      period: "2021-2023",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <motion.div
            className="bg-dark-lighter rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I'm Himesh, a full stack web developer and Information Technology undergraduate at PICT, Pune. I enjoy building clean, functional, and engaging web applications using technologies like React, Typescript, Node.js, MongoDB, and experimenting with Three.js when visuals matter. My focus is always on writing practical, maintainable code that solves real problems.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I strongly believe that real learning happens through hands on work. From academic projects to self initiated builds, each experience has helped me strengthen my problem solving skills and understanding of system design. I value clean architecture, logical thinking, and continuous improvement in everything I create.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Beyond code, I'm someone who enjoys collaborating, learning from others, and helping teammates whenever possible. I'm actively working on improving both my technical depth and professional mindset step by step. My goal is simple: keep learning, build meaningful products, and grow into a reliable engineer who adds real value.
            </motion.p>
            <motion.p
              className="text-lg text-gray-200 leading-relaxed mb-10 text-left mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Here's a snapshot of my educational journey that shaped the foundation I'm standing on today:
            </motion.p>
            <motion.div
              className="space-y-6 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-dark rounded-xl p-5 hover:bg-dark transition-all duration-300 border border-gray-800 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                        <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                        <span className="text-primary font-medium">{edu.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                        <p className="text-gray-300">{edu.degree}</p>
                        <span className="text-gray-400 font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
