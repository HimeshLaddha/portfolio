import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "CORE COMPUTER SCIENCE",
      skills: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Design"
      ],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "FRONTEND",
      skills: ["React.js", "Next.js", "Three.js", "React Three Fiber", "Tailwind CSS", "HTML5", "CSS3"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.io"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "AI / MACHINE LEARNING",
      skills: ["XGBoost", "scikit-learn", "RDKit", "LLM Orchestration", "RAG", "Gemini API", "Computer Vision", "NLP"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "SYSTEMS & TOOLS",
      skills: ["Microservices", "Celery", "RabbitMQ", "Redis", "MongoDB", "MySQL", "Git", "GitHub", "Clerk", "Cloudinary", "Postman"],
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0 opacity-50"></div>

      <div className="container-custom section-padding relative z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-5 p-3.5 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 w-full mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs sm:text-sm font-medium rounded-lg border border-white/10 transition-all duration-200 hover:bg-primary/20 hover:text-white hover:border-primary/50"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

