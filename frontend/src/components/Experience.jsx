import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TheDesignTrip",
      period: "Jul 2025 - Dec 2025",
      description: [
        "Contributed to a government project for Protean, handling 20% of UI development using Next.js & TypeScript.",
        "Built pixel-perfect, scalable interfaces and ensured smooth backend integration.",
        "Independently handled 30% of UI and 50% of animation logic for a JWGlobal project.",
        "Mastered complex UI animations, improving logical thinking and attention to detail."
      ],
      icon: "💼"
    },
    {
      title: "Core Team Member",
      company: "Game DevUtopia Club",
      period: "2024 - Present",
      description: [
        "Contributed to event management, design, and technical support.",
        "Coordinated club events and created visual assets.",
        "Gained hands-on experience with 3D modeling using Blender."
      ],
      icon: "🎮"
    },
    {
      title: "Organizing Team",
      company: "Impetus & Concepts (PICT)",
      period: "2024",
      description: [
        "Managed technical coordination and promotional activities for the annual tech fest.",
        "Developed teamwork and deadlines management skills in a high-pressure environment."
      ],
      icon: "📅"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-light relative overflow-hidden">
      <div className="container-custom section-padding">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dark border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 last:md:pr-12 md:text-right">
                  <div className={`glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? "md:text-left md:ml-12" : "md:text-right md:mr-12"
                    }`}>
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>

                    <ul className={`space-y-2 text-gray-300 text-sm leading-relaxed ${index % 2 !== 0 ? "md:items-end" : "md:items-start"
                      }`}>
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1 min-w-[10px]">▹</span>
                          <span className={index % 2 !== 0 ? "text-right" : "text-left"}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;