import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const h1Variant = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const textVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const imageVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-[100px] md:mt-0">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent"
            variants={h1Variant}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Himesh Sampat Laddha
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
            variants={textVariant}
          >
            Full-Stack Web Developer | 3D Enthusiast
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0"
            variants={textVariant}
          >
            I'm Himesh, a Full Stack Developer and IT undergraduate at PICT, Pune. I build scalable, functional web applications using the MERN stack and TypeScript, while exploring the intersection of software engineering and AI research. 
            <br />
            My focus is simple: writing clean, maintainable code that solves real world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={textVariant}
          >
            <motion.a
              href="/Himesh_Laddha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side (Image) */}
        <motion.div
          className="flex-1"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/himesh.jpg"
            alt="Himesh Laddha"
            className="mx-4 w-80 h-80 max-w-sm md:mx-0 rounded-full border-4 border-primary/50 shadow-xl transition-all duration-500 hover:scale-115 hover:shadow-primary/40 hover:shadow-2xl hover:border-blue-500"
            whileHover={{ scale: 1.18, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
