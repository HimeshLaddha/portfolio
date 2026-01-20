import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern - TheDesignTrip",
      period: "Jul 2025 - Dec 2025",
      location: "TheDesignTrip",
      description: (
        <>
          <p className="mb-3">
            Worked as a Frontend Developer Intern at TheDesignTrip, contributing to multiple real world client projects in a collaborative and fast paced environment. Actively coordinated with UI/UX designers and backend engineers to deliver production ready interfaces while adhering to industry standard development practices.
          </p>

          <p className="mb-3">
            Contributed to a large scale government project for the client <strong>Protean</strong>, where I was responsible for approximately <strong>20% of the overall UI development</strong>. My work focused on implementing pixel perfect user interfaces using <strong>Next.js</strong> and <strong>TypeScript</strong>, ensuring complete frontend functionality and writing clean, scalable code aligned with enterprise standards to support smooth backend integration. This project provided valuable exposure to structured workflows and large codebases.
          </p>

          <p>
            Additionally, worked on an animation intensive frontend project for the client <strong>JWGlobal</strong>, where I independently handled around <strong>30% of the UI development</strong> and nearly <strong>50% of the animation logic</strong>. Implementing complex UI animations strengthened my logical thinking and mathematical understanding, particularly in managing motion timing, spatial calculations, and smooth transitions, significantly improving my problem-solving and attention to detail.
          </p>
        </>
      ),
      icon: "💼"
    },
    {
      title: "Game DevUtopia Club - Member",
      period: "2024 - Present",
      location: "PICT Game DevUtopia Club",
      description:
        "Contributed across multiple teams within the club, including event management, design, and technical support. Actively involved in planning and coordinating club events, creating visual assets, and assisting with technical setups. Gained hands on exposure to design workflows and learned the fundamentals of 3D modeling using Blender.",
      icon: "🎮"
    },
    {
      title: "Impetus & Concepts 2025 - Organizing Team",
      period: "2024",
      location: "PICT, Pune",
      description:
        "Part of the organizing team for the annual technical festival, contributing to event planning, technical coordination, and promotional activities. Gained experience in teamwork, coordination under deadlines, and managing responsibilities in a large scale college event.",
      icon: "📅"
    }    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -33 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-light">
      <div className="container-custom section-padding">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-dark rounded-xl p-6 hover:bg-dark-lighter transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-gray-800 hover:border-primary/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{exp.location}</p>
                    <div className="text-gray-300 space-y-3">
                      {exp.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;