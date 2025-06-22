import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Pune Institute of Computer Technology",
      period: "2023–2027",
      degree: "B.E. in IT",
      grade: "CGPA: 9.93",
      icon: "🎓"
    },
    {
      institution: "Namo Rims Jr. College",
      period: "2021–2023",
      degree: "HSC",
      grade: "78.33%",
      icon: "📘"
    },
    {
      institution: "City International School",
      period: "Up to 2021",
      degree: "SSC",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="container-custom section-padding">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary">Education</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-dark-light rounded-xl p-6 hover:bg-dark-lighter transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-gray-800 hover:border-primary/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                      <span className="text-primary font-medium">{edu.period}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-gray-300">{edu.degree}</p>
                      <span className="text-gray-400 font-medium">{edu.grade}</span>
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

export default Education;